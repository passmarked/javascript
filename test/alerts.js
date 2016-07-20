// modules
var assert      = require('assert')
var _           = require('underscore')
var fs          = require('fs');
var passmarked  = require('passmarked');
var pluginFunc  = require('../lib/rules/alerts');

describe('alerts', function(){

  it('Should return no errors if alerts was null', function(done){

    // create a dummy payload
    var payload = passmarked.createPayload(
      {
        alerts: null,
        url:    'http://example.com'
      },
      {},
      '');

    // handle the stream
    pluginFunc(payload, function(err){

      // check for a error
      if(err) assert.fail(err);

      // get the rules
      var rules = payload.getRules();

      // check if we got any rules back ...
      if(rules.length != 0)
        assert.fail('Was expecting 0 rules, but got ' + rules.length);

      // done
      done();

    });

  });

  it('Should return no errors if alerts was undefined', function(done){

    // create a dummy payload
    var payload = passmarked.createPayload(
      {

        url:    'http://example.com'

      },
      {},
      '');

    // handle the stream
    pluginFunc(payload, function(err){

      // check for a error
      if(err) assert.fail(err);

      // get the rules
      var rules = payload.getRules();

      // check if we got any rules back ...
      if(rules.length != 0)
        assert.fail('Was expecting 0 rules, but got ' + rules.length);

      // done
      done();

    });

  });

  it('Should return 2 errors if multiple are given', function(done){

    // create a dummy payload
    var payload = passmarked.createPayload(
      {

        url:    'http://example.com',
        alerts: [

          JSON.stringify({ message: 'Might have I ask you something ... ?' }),
          JSON.stringify({ message: 'WAIT ! Leaving so early ?' })

        ]

      },
      {},
      '');

    // handle the stream
    pluginFunc(payload, function(err){

      // check for a error
      if(err) assert.fail(err);

      // get the rules
      var rules = payload.getRules();

      // check if we got any rules back ...
      if(rules.length != 1)
        assert.fail('Was expecting 1 rule, but got ' + rules.length);

      // check if we got any rules back ...
      if(rules[0].occurrences.length != 2)
        assert.fail('Was expecting 2 occurrences, but got ' + rules.length);

      // done
      done();

    });

  });

  it('Should return a error if one was given', function(done){

    // create a dummy payload
    var payload = passmarked.createPayload(
      {

        url:    'http://example.com',
        alerts: [

          JSON.stringify({ message: 'Let me introduce you to ...' })

        ]

      },
      {},
      '');

    // handle the stream
    pluginFunc(payload, function(err){

      // check for a error
      if(err) assert.fail(err);

      // get the rules
      var rules = payload.getRules();

      // check if we got any rules back ...
      if(rules.length != 1)
        assert.fail('Was expecting 1 rule, but got ' + rules.length);

      // check if we got any rules back ...
      if(rules[0].occurrences.length != 1)
        assert.fail('Was expecting 1 occurrences, but got ' + rules.length);

      // done
      done();

    });

  });

  it('Should return no errors as no errors were passed', function(done){

    // create a dummy payload
    var payload = passmarked.createPayload(
      {
        
        url:    'http://example.com',
        console: []

      },
      {},
      '');

    // handle the stream
    pluginFunc(payload, function(err){

      // check for a error
      if(err) assert.fail(err);

      // get the rules
      var rules = payload.getRules();

      // check if we got any rules back ...
      if(rules.length != 0)
        assert.fail('Should not return a error if no errors were present');

      // done
      done();

    });

  });

});
