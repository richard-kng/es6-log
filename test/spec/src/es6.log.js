System.register("src_es6.log", [], function() {
  "use strict";
  var __moduleName = "src_es6.log";
  var isDebug = true;
  function getOn() {
    return isDebug;
  }
  function setOn(value) {
    if (typeof value === "boolean") {
      isDebug = value;
    }
  }
  function getOff() {
    return !isDebug;
  }
  function setOff(value) {
    if (typeof value === "boolean") {
      isDebug = value === false;
    }
  }
  var self = function log() {
    for (var args = [],
        $__0 = 0; $__0 < arguments.length; $__0++)
      $traceurRuntime.setProperty(args, $__0, arguments[$traceurRuntime.toProperty($__0)]);
    if (isDebug) {
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
  var $__default = self;
  return {get default() {
      return $__default;
    }};
});
