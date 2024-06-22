# Part 1 - Exercise Anecdotes

- [Exercise 1.12: Anecdotes, step 1](#step-1)
- [Exercise 1.13: Anecdotes, step 2](#step-2)
- [Exercise 1.14: Anecdotes, step 3](#step-3)

## <a id="step-1"></a> Exercise 1.12: Anecdotes, step 1

The world of software engineering is filled with anecdotes that distill timeless truths from our field into short one-liners.

Expand the following application by adding a button that can be clicked to display a random anecdote from the field of software engineering:

```js
import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);

  return <div>{anecdotes[selected]}</div>;
};

export default App;
```

Content of the file main.jsx is the same as in previous exercises.

Your finished application could look something like this:

![Final application](./docs/anecdotes-final-application.png)

## <a id="step-2"></a> Exercise 1.13: Anecdotes, step 2

Expand your application so that you can vote for the displayed anecdote.

![Voting system](./docs/anecdotes-voting-system.png)

**NB** store the votes of each anecdote into an array or object in the component's state. Remember that the correct way of updating state stored in complex data structures like objects and arrays is to make a copy of the state.

You can create a copy of an object like this:

```js
const points = { 0: 1, 1: 3, 2: 4, 3: 2 };

const copy = { ...points };
// increment the property 2 value by one
copy[2] += 1;
```

OR a copy of an array like this:

```js
const points = [1, 4, 6, 3];

const copy = [...points];
// increment the value in position 2 by one
copy[2] += 1;
```

Using an array might be the simpler choice in this case.

## <a id="step-3"></a> Exercise 1.14: Anecdotes, step 3

Now implement the final version of the application that displays the anecdote with the largest number of votes:

![Application with most voted anecdote](./docs/anecdotes-with-most-voted.png)

If multiple anecdotes are tied for first place it is sufficient to just show one of them.
