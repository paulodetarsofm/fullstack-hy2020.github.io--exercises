# 0.6: New note in Single page app diagram

Diagram depicting the situation where the user creates a new note using the single-page version of the app.

```mermaid
sequenceDiagram
    participant User
    participant Browser
    participant Server

    User->>Browser: Writes a note and clicks "Save" button

    Note over Browser: The browser updates the UI with the new note created

    Note over Browser: The browser sends a request via AJAX

    Browser->>Server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa

    activate Server
    Server-->>Browser: Status code: 201 Created
    deactivate Server

    Note over Browser: The browser executes the callback function that displays a message in the console
```

---

[🏠 Summary](../README.md)
