# Part 2 - Exercise Course Information

- [Exercise 2.1: Course Information, step 6](#step-6)

## <a id="step-6"></a> Exercise 2.1: Course Information, step 6

Let's finish the code for rendering course contents from exercises 1.1 - 1.5. Let's change the `App` component like so:

```js
const App = () => {
  const course = {
    id: 1,
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
    ],
  };

  return <Course course={course} />;
};

export default App;
```

Define a component responsible for formatting a single course called `Course`.

The component structure of the application can be, for example, the following:

```
App
  Course
    Header
    Content
      Part
      Part
      ...
```

Hence, the `Course` component contains the components defined in the previous part, which are responsible for rendering the course name and its parts.

The rendered page can, for example, look as follows:

!["Course Information" application](./docs/courseinfo-application.png)

You don't need the sum of the exercises yet.

The application must work **regardless of the number of parts a course has**, so make sure the application works if you add or remove parts of a course.

---

[🏠 Summary](../../README.md)
