import express from 'express';
import moment from 'moment-timezone';
import { Chatfuel } from 'chatfuel-api';
import logger from '../config/logger';

const router = express.Router();

const validateTz = (tz) => {
    const tzNames = moment.tz.names();
    const found = tzNames.find((zone) => zone === tz);
    if (found) {
        return true;
    }
    return false;
};

export default router.get('/', (req, res) => {
    const { ctTimezone } = req.query;
    logger.debug(`Timezone is: ${ctTimezone}`);

    if (validateTz(ctTimezone)) {
        const now = moment().tz(ctTimezone);
        logger.debug(`Now: ${now.format()}`);
        const ctFullDate = now.format('MMM D, YYYY');
        const ctMonth = now.format('M');
        const ctDay = now.format('D');
        const ctYear = now.format('YYYY');
        const ctHour = now.format('H');
        const ctMinute = now.format('mm');
        const ctWeekDay = now.format('d');

        const message = new Chatfuel()
            .addAttributes({
                ctFullDate,
                ctMonth,
                ctDay,
                ctYear,
                ctHour,
                ctMinute,
                ctWeekDay,
            })
            .render();

        res.send(message);
    } else {
        res.status(500).send({
            error: 'Not a valid timezone',
        });
    }
});
