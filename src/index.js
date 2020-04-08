import express from 'express';
import morgan from 'morgan';
import logger from './config/logger';
import chatfuel from './routes/chatfuel';
import manychat from './routes/manychat';

const app = express();
const port = process.env.PORT || 3000;

app.use(
    morgan('common', {
        skip: (req, res) => res.statusCode < 400,
        stream: process.stderr,
    })
);

app.use(
    morgan('common', {
        skip: (req, res) => res.statusCode >= 400,
        stream: process.stdout,
    })
);

app.use('/chatfuel', chatfuel);

app.use('/manychat', manychat);

app.get('/', (req, res) => {
    res.send({
        message: 'Current Time API',
    });
});

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
    logger.error(err.stack);
    res.status(500).send('Server Error');
});

// eslint-disable-next-line no-unused-vars
app.use((req, res, next) => {
    logger.error('404 page requested');
    res.status(404).send('Page not found');
});

app.listen(port, () => {
    logger.info(`Listening on Port ${port}`);
});

export default app; // for testing
