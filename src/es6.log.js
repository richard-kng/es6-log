var isDebug = true;

function getOn() {
    return isDebug;
}
function setOn(value) {
    if(typeof value === "boolean") {
        isDebug = value;
    }
}
function getOff() {
    return !isDebug;
}
function setOff(value) {
    if(typeof value === "boolean") {
        isDebug = value === false;
    }
}

const self = function log(...args) {
    if(isDebug) {
        console.log.apply(console, args);
    }
};

self.getOn = self.getDebug = getOn;
self.setOn = self.setDebug = setOn;
self.getOff = self.getProduction = getOff;
self.setOff = self.setProduction = setOff;

Object.defineProperties(self, {
    on: {
        get: getOn,
        set: setOn,
        enumerable: true,
        configurable: false
    },
    debug: {
        get: getOn,
        set: setOn,
        enumerable: true,
        configurable: false
    },
    off: {
        get: getOff,
        set: setOff,
        enumerable: true,
        configurable: false
    },
    production: {
        get: getOff,
        set: setOff,
        enumerable: true,
        configurable: false
    }
});

export default self;