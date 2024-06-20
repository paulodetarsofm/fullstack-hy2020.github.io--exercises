# Part 1 - Exercise Course Information

- [Exercise 1.1: Course Information, step 1](#step-1)
- [Exercise 1.2: Course Information, step 2](#step-2)
- [Exercise 1.3: Course Information, step 3](#step-3)
- [Exercise 1.4: Course Information, step 4](#step-4)

## <a id="step-1"></a> Exercise 1.1: Course Information, step 1

Use Vite to initialize a new application. Modify `main.jsx` to match the following:

```js
import ReactDOM from "react-dom/client";

import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
```

and `App.jsx` to match the following:

```js
const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <h1>{course}</h1>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  );
};

export default App;
```

and remove the extra files App.css and index.css, also remove the directory assets.

Refactor the code creating three new components: `Header`, `Content`, and `Total`. All data still resides in the `App` component, which passes the necessary data to each component using props.

`Header` takes care of rendering the name of the course, `Content` renders the parts and their number of exercises and `Total` renders the total number of exercises.

Define the new components in the file `App.jsx`.

## <a id="step-2"></a> Exercise 1.2: Course Information, step 2

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

## <a id="step-3"></a> Exercise 1.3: Course Information, step 3

Modify the variable definitions of the `App` component as follows and also refactor the application so that it still works:

```js
const App = () => {
  const course = "Half Stack application development";
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10,
  };
  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  };
  const part3 = {
    name: "State of a component",
    exercises: 14,
  };

  return <div>...</div>;
};
```

## <a id="step-4"></a> Exercise 1.4: Course Information, step 4

Place the objects into an array. Modify the variable definitions of `App` into the following form and modify the other parts of the application accordingly:

```js
const App = () => {
  const course = "Half Stack application development";
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ];

  return <div>...</div>;
};
```

**NB** at this point _you can assume that there are always three items_, so there is no need to go through the arrays using loops.

However, do not pass different objects as separate props from the `App` component to the components Content and Total. Instead, pass them directly as an array:

```js
const App = () => {
  // const definitions

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};
```
