class LoggerService {
  static instance;

  constructor() {
    if (LoggerService.instance) {
      return LoggerService.instance;
    }
    LoggerService.instance = this;
  }

  log(msg) {
    this.msg = msg;
    console.log(msg);
  }
}

let log = new LoggerService();
log.log('hello');

let log2 = new LoggerService();
log2.log('hello2');

let log3 = new LoggerService();
console.log(log3.msg);
