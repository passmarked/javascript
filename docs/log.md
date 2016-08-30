Leaving debugging code in production is generally a bad idea. Also: the `console` object might not always be available (especially in older browsers).

```
// BAD:
if (err) {
  console.log('This should\'t happen!');
}
```

# How do I fix this ?

* Manually remove `console.log` statements
* Use JSLing/JSHint/ESLint (or Passmarked.com!) to notify you of missed `console.log` statements.
* Use your build tools to remove `console.log` statements from production code.

# Resources

* [Ways to remove those pesky console.log statements](http://elijahmanor.com/grunt-away-those-pesky-console-log-statements/)
