# To-Do Add Tasks Feature

A lightweight single-page to-do app built with HTML, CSS, and JavaScript.

## Features

- Add a task description
- Prevent empty or whitespace-only submissions
- Show new tasks immediately in the list without reloading the page
- Mark tasks complete with an accessible checkbox and strikethrough description
- Uncheck completed tasks to restore their incomplete state
- Keep completion states independent for tasks with identical descriptions
- Keep the interface simple and browser-only

## Run locally

No build step or server is required. Open `index.html` directly in a modern browser.

For an HTTP preview when Python is installed, run this command from the project root:

```bash
python -m http.server 8000 --bind 127.0.0.1
```

Then open http://127.0.0.1:8000/ in the browser. Directly opening `index.html` is the available fallback when Python is not installed.

Task completion is held in memory for the current page session and is not saved across page reloads.
