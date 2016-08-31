Alerts, Prompts and Confirmations are widely considered to be obtrusive as UI elements and should be replaced by more user friendly UI prompts. They are also generally used for debugging, and as such, should definitely not be used kept in production code. Modern browsers also give the user the option of blocking these prompts.

Note: This rule was triggered because an alert or prompt was shown while the page was loading; this is really bad because it pauses script execution and blocks page loading.

# How do I fix this ?

Remove all `alert('message')`, `prompt('message', 'default')` and `confirm('question')` calls, and replace these with custom (or library sourced) modal UI components.

# Resources

* [StackOverflow - Disabled Chrome Alert Boxes](http://stackoverflow.com/questions/19640361/re-enabling-window-alert-in-chrome)
* [MDN - Window.prompt](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt)
* [Twitter Bootstrap Alerts](http://getbootstrap.com/javascript/#alerts)
