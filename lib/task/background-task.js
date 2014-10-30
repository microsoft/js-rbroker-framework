/*!
 * Copyright (C) 2010-2014 by Revolution Analytics Inc.
 *
 * This program is licensed to you under the terms of Version 2.0 of the
 * Apache License. This program is distributed WITHOUT
 * ANY EXPRESS OR IMPLIED WARRANTY, INCLUDING THOSE OF NON-INFRINGEMENT,
 * MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. Please refer to the
 * Apache License 2.0 (http://www.apache.org/licenses/LICENSE-2.0) for more 
 * details.
 */
var Base = require('selfish').Base;

module.exports = Base.extend({

  initialize: function(config) {
    this.props = config;
  }, 

  toJSON: function() {
    var clone = {};
    for(var keys = Object.keys(this.props), l = keys.length; l; --l) {
     clone[ keys[l-1] ] = this.props[ keys[l-1] ];
    }

    return clone;
  },     

  toString: function() {    
    var out = 'BackgroundTask: ';
    for(var o in this.props) {
      out += ' [ ' + o + ' = "' + this.props[o] + '" ]';
    }

    return out;
  }
});
