- [Exercise 1.1: Course Information, step 1](#step-1)
- [Exercise 1.2: Course Information, step 2](#step-2)
- [Exercise 1.3: Course Information, step 3](#step-3)

# <a id="step-1"></a> Exercise 1.1: Course Information, step 1

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

# <a id="step-2"></a> Exercise 1.2: Course Information, step 2

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

# <a id="step-3"></a> Exercise 1.3: Course Information, step 3

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
