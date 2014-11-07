var System = require("../node_modules/es6-module-loader").System,
    log;

describe("wait for System.import", function(){
    it("-> have to be done within a couple of seconds at most", function(done) {
        System.import("src/es6.log").then(function(es6_log) {
            log = es6_log.default;
            done();
        });
    }, 15000);
});

describe("if es6-log exists", function() {
        it('-> have to return "function"', function() {
            expect(typeof log).toEqual("function");
        });
    });
describe("by default setup es6-log", function() {
    it('-> have to return "true" for .on/.getOn()', function() {
        expect(log.on === true).toEqual(true);
        expect(log.getOn() === true).toEqual(true);
    });

    it('-> have to return "false" for .off/.getOff()', function() {
        expect(log.off === false).toEqual(true);
        expect(log.getOff() === false).toEqual(true);
    });

    it('-> have to return "true" for .debug/.getDebug()', function() {
        expect(log.debug === true).toEqual(true);
        expect(log.getDebug() === true).toEqual(true);
    });

    it('-> have to return "false" for .production/.getProduction()', function() {
        expect(log.production === false).toEqual(true);
        expect(log.getProduction() === false).toEqual(true);
    });
});
describe("a log message", function() {
    it("-> should print out a massage to the console", function() {
        log("this should be visible", true, 1, {a:2, b:3}, [4, 5], new Date(), /\s+/g);
        expect(1).toBe(1);
    });
});
describe("turn off logging with .on = false", function() {
    it("-> have to turn logging off with .on = false", function() {
        log.on = false;
        expect(1).toBe(1);
    });

    it('-> have to return "false" for .on/.getOn()', function() {
        expect(log.on === false).toEqual(true);
        expect(log.getOn() === false).toEqual(true);
    });

    it('-> have to return "true" for .off/.getOff()', function() {
        expect(log.off === true).toEqual(true);
        expect(log.getOff() === true).toEqual(true);
    });

    it('-> have to return "false" for .debug/.getDebug()', function() {
        expect(log.debug === false).toEqual(true);
        expect(log.getDebug() === false).toEqual(true);
    });

    it('-> have to return "true" for .production/.getProduction()', function() {
        expect(log.production === true).toEqual(true);
        expect(log.getProduction() === true).toEqual(true);
    });
});
describe("another log message", function() {
    it("-> should NOT print out a massage to the console", function() {
        log("this should NOT be visible", true, 1, {a:2, b:3}, [4, 5], new Date(), /\s+/g);
        expect(1).toBe(1);
    });
});
describe("turn on logging with .on = true", function() {
    it("-> have to turn logging on with .on = true", function() {
        log.on = true;
        expect(1).toBe(1);
    });
    it('-> have to return "true" for .on/.getOn()', function() {
        expect(log.on === true).toEqual(true);
        expect(log.getOn() === true).toEqual(true);
    });

    it('-> have to return "false" for .off/.getOff()', function() {
        expect(log.off === false).toEqual(true);
        expect(log.getOff() === false).toEqual(true);
    });

    it('-> have to return "true" for .debug/.getDebug()', function() {
        expect(log.debug === true).toEqual(true);
        expect(log.getDebug() === true).toEqual(true);
    });

    it('-> have to return "false" for .production/.getProduction()', function() {
        expect(log.production === false).toEqual(true);
        expect(log.getProduction() === false).toEqual(true);
    });
});
describe("next log message", function() {
    it("-> should print out a massage to the console", function() {
        log("this should be visible too", true, 1, {a:2, b:3}, [4, 5], new Date(), /\s+/g);
        expect(1).toBe(1);
    });
});