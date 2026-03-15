"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendResetEmail = sendResetEmail;

var _nodemailer = _interopRequireDefault(require("nodemailer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var transporter = _nodemailer["default"].createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

function sendResetEmail(to, link) {
  return regeneratorRuntime.async(function sendResetEmail$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(transporter.sendMail({
            from: "\"FinVision\" <".concat(process.env.EMAIL_USER, ">"),
            to: to,
            subject: "Reset Your FinVision Password",
            html: "\n      <h2>Password Reset Request</h2>\n      <p>Click the link below to reset your password:</p>\n      <a href=\"".concat(link, "\">").concat(link, "</a>\n    ")
          }));

        case 2:
        case "end":
          return _context.stop();
      }
    }
  });
}
//# sourceMappingURL=mailer.dev.js.map
