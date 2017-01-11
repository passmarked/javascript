module.exports = exports = function(payload, fn) {

  // get the data
  data = payload.getData()

  // sanity check if the console is defined
  if(!data.console) return fn(null);

  // loop all console entries
  for(var i = 0; i < (data.console || []).length; i++) {

    // get a local reference
    var consoleEntry = data.console[i];

    // check the type we only want to check logs
    if(consoleEntry.type != 'log') continue;

    // did we get any ?
    payload.addRule({

        message:      'Keep the Javascript console clean',
        type:         'notice',
        key:          'log'

      }, {

        display:      'text',
        file:         consoleEntry.file,
        message:      consoleEntry.message

      });

  }

  // done
  fn(null);

};