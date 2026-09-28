# UI Contract: Add Tasks

## Overview

This feature exposes a browser-only user interface with no API contract because there is no backend. The contract is defined by DOM elements, user events, and visual state changes.

## Components

### Task Input Form

- Input field for task description
- Add button for submission
- Optional inline validation message area

### Task List

- Container that renders each task as a list item
- Each item displays the text of the task description
- New items appear at the end of the list in insertion order

## Events

### Submit Task

**Trigger**: user clicks Add or presses Enter in the input field.

**Input**: trimmed string from the task input.

**Behavior**:
- If input is empty after trimming, reject submission.
- If valid, create a new task object and append it to the in-memory list.
- Re-render the task list immediately.
- Clear the input field.

### Validation State

**Trigger**: invalid empty or whitespace-only submission.

**Behavior**:
- Prevent insertion into the task list.
- Do not refresh the page.
- Keep the current list unchanged.

## UI Guarantees

- The list updates without a page refresh.
- The visible text matches the trimmed user input.
- No invalid task is rendered.
- The app remains usable after a valid submission.
