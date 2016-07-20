module.exports = exports = function(payload, fn) {

  // get the data
  data = payload.getData()

  // sanity check if the console is defined
  if(!data.console) return fn(null);

  // loop all console entries
  for(var i = 0; i < data.console.length; i++) {

    // get a local reference
    var console = null;

    // try to parse
    try {

      // try to parse the JSON
      console = JSON.parse(data.console[i]);

    } catch(err) {}

    // skip non parsed values
    if(!console) continue;

    // check the type we only want to check logs
    if(console.type != 'log') continue;

    // did we get any ?
    payload.addRule({

        message:  'Keep the Javascript console clean',
        type:     'notice',
        key:      'log'

      }, {

        display: 'text',
        header: console.file,
        text: {

          main: console.message,
          tagline: 'Line ' + console.line + ' in ' + console.file

        },
        message: 'Output of "$" on line $',
        identifiers: [ console.message, console.line ]

      });

  }

  // done
  fn(null);

};