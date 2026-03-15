"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _promise = _interopRequireDefault(require("mysql2/promise"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var pool = _promise["default"].createPool({
  host: "localhost",
  user: "root",
  password: "mahi",
  database: "finvision",
  waitForConnections: true,
  connectionLimit: 10
});

var _default = pool;
exports["default"] = _default;
//# sourceMappingURL=db.dev.js.map
