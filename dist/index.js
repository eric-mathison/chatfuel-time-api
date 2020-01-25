"use strict";

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _logger = _interopRequireDefault(require("./config/logger"));

var _chatfuel = _interopRequireDefault(require("./routes/chatfuel"));

var _manychat = _interopRequireDefault(require("./routes/manychat"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
var port = process.env.PORT || 3000;
app.use((0, _morgan["default"])('common', {
  skip: function skip(req, res) {
    return res.statusCode < 400;
  },
  stream: process.stderr
}));
app.use((0, _morgan["default"])('common', {
  skip: function skip(req, res) {
    return res.statusCode >= 400;
  },
  stream: process.stdout
}));
app.use('/chatfuel', _chatfuel["default"]);
app.use('/manychat', _manychat["default"]);
app.get('/', function (req, res) {
  res.send({
    message: 'Server Running'
  });
}); // eslint-disable-next-line no-unused-vars

app.use(function (err, req, res, next) {
  _logger["default"].error(err.stack);

  res.status(500).send('Server Error');
}); // eslint-disable-next-line no-unused-vars

app.use(function (req, res, next) {
  _logger["default"].error('404 page requested');

  res.status(404).send('Page not found');
});
app.listen(port, function () {
  _logger["default"].info("Listening on Port ".concat(port));
});