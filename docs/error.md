Unhandled Javascript on the page could cause unexpected behaviour from various clients visiting the sites on different devices.

```
// BAD:
throw new Error('This is a uncaught error');
```

Unhandled Javascript could indiciate something much worse such as a warning from services like Stripe or Braintree, and as such must always be addressed as quickly as possible.

# How do I fix this ?

Check the provided errors that were found for the individual causes and fix the coding issue.

# Resources

* [Ways to remove those pesky console.log statements](http://elijahmanor.com/grunt-away-those-pesky-console-log-statements/)