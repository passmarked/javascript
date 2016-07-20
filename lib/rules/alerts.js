module.exports = exports = function(payload, fn) {

  // get the data
  data = payload.getData()

  // sanity check for alerts
  if(!data.alerts) return fn(null);

  // loop the alerts
  for(var i = 0; i < data.alerts.length; i++) {

    // get the alert
    var alert = data.alerts[i];

    // try to parse
    try {

      // try to parse the JSON
      alert = JSON.parse(data.alerts[i]);

    } catch(err) {}

    // add the rule
    payload.addRule({

      message:  'No alerts(), prompts(), confirms() allowed',
      type:     'error',
      key:      'alert'

    }, {

      display: 'text',
      text: {

        main: console.message,
        tagline: 'Prompt that appeared when loading page'

      },
      header: 'Encountered while loading the page',
      message: 'Alert/Prompt with the message "$"',
      identifiers: [ alert.message ]

    });

  }

  // done
  fn(null);

};