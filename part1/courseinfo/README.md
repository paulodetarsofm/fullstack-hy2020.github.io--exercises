# Exercise 1.1: Course Information, step 1

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
