/*
 * Copyright 2014 Red Hat, Inc.
 *
 * Red Hat licenses this file to you under the Apache License, version 2.0
 * (the "License"); you may not use this file except in compliance with the
 * License.  You may obtain a copy of the License at:
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  See the
 * License for the specific language governing permissions and limitations
 * under the License.
 */

/** @module ext-apex-addons-js/cors */
var utils = require('vertx-js/util/utils');
var RoutingContext = require('ext-apex-core-js/routing_context');

var io = Packages.io;
var JsonObject = io.vertx.core.json.JsonObject;
var JCors = io.vertx.ext.apex.addons.Cors;

/**
 Server side CORS support for Vert.x Apex
 http://www.w3.org/TR/cors/

 @class
*/
var Cors = function(j_val) {

  var j_cors = j_val;
  var that = this;

  /**

   @public
   @param method {Object} 
   @return {Cors}
   */
  this.allowedMethod = function(method) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'string') {
      return new Cors(j_cors.allowedMethod(io.vertx.core.http.HttpMethod.valueOf(__args[0])));
    } else utils.invalidArgs();
  };

  /**

   @public
   @param headerName {string} 
   @return {Cors}
   */
  this.allowedHeader = function(headerName) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'string') {
      return new Cors(j_cors.allowedHeader(headerName));
    } else utils.invalidArgs();
  };

  /**

   @public
   @param headerNames {Array.<string>} 
   @return {Cors}
   */
  this.allowedHeaders = function(headerNames) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0] instanceof Array) {
      return new Cors(j_cors.allowedHeaders(utils.convParamSetBasicOther(headerNames)));
    } else utils.invalidArgs();
  };

  /**

   @public
   @param headerName {string} 
   @return {Cors}
   */
  this.exposedHeader = function(headerName) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'string') {
      return new Cors(j_cors.exposedHeader(headerName));
    } else utils.invalidArgs();
  };

  /**

   @public
   @param headerNames {Array.<string>} 
   @return {Cors}
   */
  this.exposedHeaders = function(headerNames) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0] instanceof Array) {
      return new Cors(j_cors.exposedHeaders(utils.convParamSetBasicOther(headerNames)));
    } else utils.invalidArgs();
  };

  /**

   @public
   @param allow {boolean} 
   @return {Cors}
   */
  this.allowCredentials = function(allow) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='boolean') {
      return new Cors(j_cors.allowCredentials(allow));
    } else utils.invalidArgs();
  };

  /**

   @public
   @param maxAgeSeconds {number} 
   @return {Cors}
   */
  this.maxAgeSeconds = function(maxAgeSeconds) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='number') {
      return new Cors(j_cors.maxAgeSeconds(maxAgeSeconds));
    } else utils.invalidArgs();
  };

  /**

   @public
   @param context {RoutingContext} 
   */
  this.handle = function(context) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0]._jdel) {
      j_cors.handle(context._jdel);
    } else utils.invalidArgs();
  };

  // A reference to the underlying Java delegate
  // NOTE! This is an internal API and must not be used in user code.
  // If you rely on this property your code is likely to break if we change it / remove it without warning.
  this._jdel = j_cors;
};

/**

 @memberof module:ext-apex-addons-js/cors
 @param allowedOriginPattern {string} 
 @return {Cors}
 */
Cors.cors = function(allowedOriginPattern) {
  var __args = arguments;
  if (__args.length === 1 && typeof __args[0] === 'string') {
    return new Cors(JCors.cors(allowedOriginPattern));
  } else utils.invalidArgs();
};

// We export the Constructor function
module.exports = Cors;