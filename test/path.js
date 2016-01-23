const resolve = require("../npm-resolve");
const request = require("../gen-request");
const test = require("ava");

/** This is a description of the foo function. */
test("Request generation test", t => {
    t.is(request(''))
});

test("Path generation test", t => {
    
});
