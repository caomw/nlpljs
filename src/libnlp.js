/*
 * Natural Language Processing Library for JavaScript
 *
 * A client-side NLP utility library for web applications
 *
 * Copyright 2015 Intel Corporation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 *
 *
 * Authors:
 *   Elliot Smith <elliot.smith@intel.com>
 *   Max Waterman <max.waterman@intel.com>
 *   Plamena Manolova <plamena.manolova@intel.com>
 */

(function () {
  var makeLibnlp = function (tokenizer, postagger, keyphrase_extractor) {
    return {
      tokenizer: tokenizer,
      postagger: postagger,
      keyphrase_extractor: keyphrase_extractor
    };
  };

  if (typeof define !== 'undefined' && define.amd) {
    define(
      ['tokenizer', 'postagger', 'keyphrase_extractor'],
      function (tokenizer, postagger, keyphrase_extractor) {
        return makeLibnlp(tokenizer, postagger, keyphrase_extractor);
      }
    );
  } else {
    var tokenizer = require('./tokenizer');
    var postagger = require('./postagger');
    var keyphrase_extractor = require('./keyphrase_extractor');
    module.exports = makeLibnlp(tokenizer, postagger, keyphrase_extractor);
  }
})();