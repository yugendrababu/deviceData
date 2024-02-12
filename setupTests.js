import { format } from "util";

// Throw errors and fail tests for unhandled rejection messages
process.on("unhandledRejection", (err) => {
  throw err;
});

// Throw errors and fail tests if any console.errors or console.warn are output
const { error, warn } = global.console;

global.console.error = (...args) => {
  error(...args);
  throw new Error(format(...args));
};

global.console.warn = (...args) => {
  warn(...args);
  throw new Error(format(...args));
};
