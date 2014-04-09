#!/usr/bin/env node --harmony
var commander = require('commander'),
  nodegitwiki = require('../index');

var dataFolder = process.cwd();


commander
  .option('-p, --port <num>', 'Port number (Default: 4567)', 4567)
  .parse(process.argv);

var options = {
  baseURL: 'http://localhost:' + commander.port,
  port: commander.port
};

nodegitwiki.init(dataFolder, options, function(err) {
  if (err) {
    console.error(err.stack);
    return;
  }

  console.log('NodeGitWiki started in: ' + dataFolder);
});