module.exports = exports = function(payload, fn) {

  // get the data
  data = payload.getData()

  // sanity check if the console is defined
  if(!data.console) return fn(null);

  // loop all console entries
  for(var i = 0; i < (data.console || []).length; i++) {

    // get a local reference
    var console = data.console[i];

    // check the type we only want to check logs
    if(console.type != 'log') continue;

    // did we get any ?
    payload.addRule({

        message:      'Keep the Javascript console clean',
        type:         'notice',
        key:          'log'

      }, {

        display:      'text',
        file:         console.file,
        message:      console.message

      });

  }

  // done
  fn(null);

};