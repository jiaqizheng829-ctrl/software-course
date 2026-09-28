# Data Model: Add Tasks Feature

## Entity: Task

| Field | Type | Description | Validation |
|-------|------|-------------|------------|
| id | string | Unique identifier for each task | Must be generated on creation |
| description | string | User-entered task text | Must be trimmed; cannot be empty or whitespace-only |
| createdAt | string | Creation timestamp in ISO format | Set automatically when the task is added |

## In-Memory Data Structure

```javascript
const tasks = [
  {
    id: "task-1",
    description: "Buy groceries",
    createdAt: "2026-09-23T10:00:00.000Z"
  }
];
```

## Validation Rules

- A submitted value must be converted to a trimmed string before validation.
- If `trimmedValue.length === 0`, the task is rejected.
- A valid task is appended to the array only after validation succeeds.
- The description should be displayed exactly as entered after trimming leading and trailing whitespace.

## State Transitions

1. Empty form state
   - Input value is empty.
   - Add button can be pressed, but validation blocks submission.

2. Valid submission
   - Input is trimmed and checked.
   - New task object is created and appended to `tasks`.
   - The list re-renders immediately.
   - Input is cleared.

3. Invalid submission
   - Input is not accepted.
   - No task is added.
   - The task list remains unchanged.

## Relationships

- A task belongs to the current in-browser task list.
- The task list is the collection of all currently visible tasks in the UI.
- There are no user, database, or backend relationships in this v1 implementation.
