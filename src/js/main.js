'use strict';

var destroy = require('./plugin/destroy');
var initialize = require('./plugin/initialize');
var update = require('./plugin/update');
var instances = require('./plugin/instances');

module.exports = {
  initialize: initialize,
  update: update,
  destroy: destroy,
  instances: instances
};
