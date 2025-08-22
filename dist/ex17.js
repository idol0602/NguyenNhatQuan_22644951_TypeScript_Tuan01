"use strict";
// 17. Write a singleton Logger class that logs messages to console.
class Logger {
    static instance;
    constructor() { }
    static getInstance() {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }
    log(message) {
        console.log(`[LOG] ${message}`);
    }
    error(message) {
        console.error(`[ERROR] ${message}`);
    }
    warn(message) {
        console.warn(`[WARN] ${message}`);
    }
}
const logger1 = Logger.getInstance();
const logger2 = Logger.getInstance();
logger1.log("Application started");
logger2.warn("Low memory");
logger1.error("Something went wrong");
console.log("logger1 === logger2 ?", logger1 === logger2);
//# sourceMappingURL=ex17.js.map