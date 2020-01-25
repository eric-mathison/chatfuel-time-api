"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _momentTimezone = _interopRequireDefault(require("moment-timezone"));

var _chatfuelApi = require("chatfuel-api");

var _logger = _interopRequireDefault(require("../config/logger"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

var validateTz = function validateTz(tz) {
  var tzNames = _momentTimezone["default"].tz.names();

  var found = tzNames.find(function (zone) {
    return zone === tz;
  });

  if (found) {
    return true;
  }

  return false;
};

var _default = router.get('/', function (req, res) {
  var ctTimezone = req.query.ctTimezone;

  _logger["default"].debug("Timezone is: ".concat(ctTimezone));

  if (validateTz(ctTimezone)) {
    var now = (0, _momentTimezone["default"])().tz(ctTimezone);

    _logger["default"].debug("Now: ".concat(now.format()));

    var ctFullDate = now.format('MMM D, YYYY');
    var ctMonth = now.format('M');
    var ctDay = now.format('D');
    var ctYear = now.format('YYYY');
    var ctHour = now.format('H');
    var ctMinute = now.format('mm');
    var ctWeekDay = now.format('d');
    var message = new _chatfuelApi.Chatfuel().addAttributes({
      ctFullDate: ctFullDate,
      ctMonth: ctMonth,
      ctDay: ctDay,
      ctYear: ctYear,
      ctHour: ctHour,
      ctMinute: ctMinute,
      ctWeekDay: ctWeekDay
    }).render();
    res.send({
      message: message
    });
  } else {
    res.status(500).send({
      error: 'Not a valid timezone'
    });
  }
});

exports["default"] = _default;