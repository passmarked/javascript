module.exports = exports = function(payload, fn) {

  // get the data
  data = payload.getData()

  // sanity check if the console is defined
  if(!data.console) return fn(null);

  // loop all console entries
  for(var i = 0; i < data.console.length; i++) {

    // get a local reference
    var entry = data.console[i];

    // check the type we only want to check logs
    if(entry.type != 'error') continue;

    payload.addRule({

      message:  'Avoid Javascript errors on load',
      type:     'error',
      key:      'error'

    }, {

      display: 'text',
      header: entry.file,
      text: {

        main: entry.message,
        tagline: 'Line ' + entry.line + ' in ' + entry.file

      },
      message: 'Output of "$" on line $',
      identifiers: [ entry.message, entry.line ]

    });

  }

  // done
  fn(null)

};