'use strict';

module.exports = {

  'Contents test' : function (browser) {
    browser
      .url('http://localhost:9100/')
      .pause(1000)
      .assert.title('Nightwatch.js Demo')
      .assert.containsText('#content', 'Hello, Nightwatch.js!')
      .end();
  }

};
