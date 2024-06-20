# 0.5: Single page app diagram

Diagram depicting the situation where the user goes to the single-page app version of the notes app at https://studies.cs.helsinki.fi/exampleapp/spa.

```mermaid
sequenceDiagram
    participant Browser
    participant Server

    Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/spa

    activate Server
    Server-->>Browser: HTML document - `text/html`
    deactivate Server

    Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/main.css

    activate Server
    Server-->>Browser: CSS file - `text/css`
    deactivate Server

    Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js

    activate Server
    Server-->>Browser: JS file - `application/javascript`
    deactivate Server

    Note over Browser: The browser executes the JS code that fetches the JSON from the server via AJAX

    Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/data.json

    activate Server
    Server-->>Browser: JSON file - `application/json`
    deactivate Server

    Note over Browser: The browser executes the callback function that renders the notes
```

---

[🏠 Summary](../README.md)
