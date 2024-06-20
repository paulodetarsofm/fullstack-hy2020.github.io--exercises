# Exercise 1.2: Course Information, step 2

Refactor the `Content` component so that it does not render any names of parts or their number of exercises by itself. Instead, it only renders three `Part` components of which each renders the name and number of exercises of one part.

```js
const Content = ... {
  return (
    <div>
      <Part .../>
      <Part .../>
      <Part .../>
    </div>
  )
}
```
