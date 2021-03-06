#!/usr/bin/env node
/*jshint node:true*/
var fs = require('fs'),
    generate = require('./index.js'),
    schema,
    instance;

schema = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
instance = generate(schema);
console.log(JSON.stringify(instance, null, 4));
