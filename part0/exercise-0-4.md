# 0.4: New note diagram

diagram depicting the situation where the user creates a new note on the page https://studies.cs.helsinki.fi/exampleapp/notes by writing something into the text field and clicking the _Save_ button.

```mermaid
sequenceDiagram
    participant User
    participant Browser
    participant Server

    User->>Browser: Writes a note and clicks "Save" button
    Browser->>Server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate Server
    Server-->>Browser: Status code: 302 Found
    deactivate Server
    Browser-->>User: Note is saved and the user is redirected

    Note left of Browser: The redirect URL is defined in Response Header Location
```

---

- [🏠 Summary](../README.md)
- [➡️ Exercise 0.5](./exercise-0-5.md)
