var sinon = require('sinon');
var expect = require('chai').expect;
var app = require('../app');

describe('App', function() {
  describe('init', function() {

    it('should alert', function(){
      alert = sinon.spy();

      app.init();

      expect(alert.calledOnce).to.be.equal(true);
    });

  });
});
