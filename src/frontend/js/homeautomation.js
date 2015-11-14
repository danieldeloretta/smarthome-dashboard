// first of all, let's be strict!
"use strict";

// requirements
if(typeof __COMMON_JS === 'undefined') { throw new Error("common.js is required and was not yet loaded!"); }

// include guard
if(typeof __HOMEAUTOMATION_JS !== 'undefined') { throw new Error("homeautomation.js was already included!"); }
var __HOMEAUTOMATION_JS = null;

// common module
var homeautomation = function() {

   // process JSON
   var processJSON = function(data) {
      common.logMessage("processing JSON data");

      $("#container").append("<pre>" + JSON.stringify(data, null, 2) + "</pre>");
   };

   // expose functions
   return {
      processJSON: processJSON,
   };

}();