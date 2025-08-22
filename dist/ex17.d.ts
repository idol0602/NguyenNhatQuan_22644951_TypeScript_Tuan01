declare class Logger {
    private static instance;
    private constructor();
    static getInstance(): Logger;
    log(message: string): void;
    error(message: string): void;
    warn(message: string): void;
}
declare const logger1: Logger;
declare const logger2: Logger;
//# sourceMappingURL=ex17.d.ts.map