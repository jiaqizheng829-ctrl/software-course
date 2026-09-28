# Quickstart: Add Tasks Feature

## Prerequisites

- Modern web browser (Chrome, Edge, Firefox, or Safari)
- Project files loaded locally in the browser or served by a lightweight local static server

## Validation Scenarios

### 1. Add a valid task

1. Open the application in a browser.
2. Type a non-empty task description in the input field.
3. Click the Add button.
4. Confirm that the new task appears immediately in the list without reloading the page.

Expected outcome: the task is visible in the task list and the input is cleared.

### 2. Reject an empty task

1. Leave the task field empty.
2. Click the Add button.
3. Confirm that no task is created.

Expected outcome: the list remains unchanged and the invalid input is blocked.

### 3. Reject whitespace-only input

1. Enter only spaces or tabs in the field.
2. Click the Add button.
3. Confirm that no task is added.

Expected outcome: the input is treated as empty and not appended to the list.

### 4. Verify immediate UI update

1. Add a valid task.
2. Observe the list without reloading the page.

Expected outcome: the task appears instantly in the same page session.

### 5. Normalize whitespace and allow repeated descriptions

1. Enter `  Prepare  weekly plan  ` and submit it.
2. Confirm the displayed task is `Prepare  weekly plan`.
3. Submit `Prepare  weekly plan` again as a separate submission.

Expected outcome: outer whitespace is removed, the internal double space remains, and two identical task items are visible.

### 6. Accept a long description

1. Type a description longer than 200 characters.
2. Submit it and compare the full displayed value with the input.

Expected outcome: the description is not capped or truncated by the application.

### 7. Check a rapid repeat click

1. Enter a valid description and double-click Add.
2. Confirm how many items are added and whether the input is cleared.

Expected outcome: each valid submission is handled independently; an empty submission after the first successful add is rejected.

### 8. Check phone layout

1. Set the browser viewport to 375 x 667 and then 320 x 568.
2. Confirm the card and controls remain within the viewport and no horizontal scrolling appears.

Expected outcome: the input and Add button remain usable without horizontal overflow.

### 9. Measure SC-001 from first key to visible task

1. Start timing on the first task-description keystroke.
2. Stop timing when the new task is visible in the list.
3. Record typing duration separately from submit-to-visible application response time.

Expected outcome: total elapsed time remains under the unchanged five-second criterion. A synthetic browser input is a controlled sample, not representative-user validation.

## Notes

- This feature is intentionally front-end only.
- No database or backend is required for validation.
- The UI is the primary contract for proving the behavior works.
