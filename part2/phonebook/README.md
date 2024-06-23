# Part 2 - Exercise Phonebook

- [Exercise 2.6: Phonebook, step 1](#step-1)
- [Exercise 2.7: Phonebook, step 2](#step-2)
- [Exercise 2.8: Phonebook, step 3](#step-3)

## <a id="step-1"></a> Exercise 2.6: Phonebook, step 1

Let's create a simple phonebook. **_In this part, we will only be adding names to the phonebook._**

Let us start by implementing the addition of a person to the phonebook.

You can use the code below as a starting point for the `App` component of your application:

```js
import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      ...
    </div>
  );
};

export default App;
```

The `newName` state is meant for controlling the form input element.

After finishing this exercise your application should look something like this:

!["Phonebook" application](./docs/phonebook-application.png)

Note the use of the React developer tools extension in the picture above!

**NB:**

- you can use the person's name as a value of the key property
- remember to prevent the default action of submitting HTML forms!

## <a id="step-2"></a> Exercise 2.7: Phonebook, step 2

Prevent the user from being able to add names that already exist in the phonebook. JavaScript arrays have numerous suitable methods for accomplishing this task. Keep in mind how object equality works in Javascript.

Issue a warning with the alert command when such an action is attempted:

![Phonebook alert](./docs/phonebook-alert.png)

**Hint:** when you are forming strings that contain values from variables, it is recommended to use a template string:

```js
`${newName} is already added to phonebook`;
```

## <a id="step-3"></a> Exercise 2.8: Phonebook, step 3

Expand your application by allowing users to add phone numbers to the phone book. You will need to add a second _input_ element to the form (along with its own event handler):

```js
<form>
  <div>
    name: <input />
  </div>
  <div>
    number: <input />
  </div>
  <div>
    <button type="submit">add</button>
  </div>
</form>
```

At this point, the application could look something like this. The image also displays the application's state with the help of React developer tools:

![Phonebook with phone numbers](./docs/phonebook-with-phone-numbers.png)

---

[🏠 Summary](../../README.md)
