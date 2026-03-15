"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.POST = POST;

var _server = require("next/server");

var _db = _interopRequireDefault(require("@/lib/db"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function POST(req) {
  var _ref, email, password, _ref2, _ref3, user;

  return regeneratorRuntime.async(function POST$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(req.json());

        case 2:
          _ref = _context.sent;
          email = _ref.email;
          password = _ref.password;
          _context.prev = 5;
          _context.next = 8;
          return regeneratorRuntime.awrap(_db["default"].query("SELECT * FROM users WHERE email = ? AND password = ?", [email, password]));

        case 8:
          _ref2 = _context.sent;
          _ref3 = _slicedToArray(_ref2, 1);
          user = _ref3[0];

          if (!(user.length > 0)) {
            _context.next = 13;
            break;
          }

          return _context.abrupt("return", _server.NextResponse.json({
            success: true
          }));

        case 13:
          return _context.abrupt("return", _server.NextResponse.json({
            success: false
          }));

        case 16:
          _context.prev = 16;
          _context.t0 = _context["catch"](5);
          console.error(_context.t0);
          return _context.abrupt("return", _server.NextResponse.json({
            success: false
          }));

        case 20:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[5, 16]]);
}
//# sourceMappingURL=route.dev.js.map
