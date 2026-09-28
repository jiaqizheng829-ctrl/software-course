# Data Model: Mark Tasks Complete

## Entity: Task

| Field | Type | Required | Rules |
|---|---|---:|---|
| `id` | Unique string | Yes | Existing stable identity; distinct even when descriptions are identical. |
| `description` | String | Yes | Existing Add Tasks value after leading/trailing whitespace is removed; internal whitespace is preserved. |
| `createdAt` | Timestamp string | Yes | Existing creation metadata; unchanged by completion toggles. |
| `completed` | Boolean | Yes | Defaults to `false`; `true` means complete and `false` means incomplete. |

## Relationships

- A task list contains zero or more task objects.
- Each task owns its completion value; no completion state is shared by description text.

## State Transitions

| Current state | User action | Next state | Visible result |
|---|---|---|---|
| Incomplete (`false`) | Check task checkbox | Complete (`true`) | Checkbox checked; that task's description struck through. |
| Complete (`true`) | Uncheck task checkbox | Incomplete (`false`) | Checkbox unchecked; that task's description shown normally. |

Repeated toggles apply the same transitions. Other task objects remain unchanged.

## Creation and Validation

- A task created by Add Tasks initializes with `completed: false`.
- Completion changes do not alter `id`, `description`, or `createdAt`.
- Existing Add Tasks validation remains unchanged: empty and whitespace-only descriptions are rejected; outer whitespace is trimmed; internal whitespace is preserved; duplicate descriptions are allowed; no application-defined maximum description length is imposed.
- Tasks and completion state are held in memory for the current page session only. Persistence is out of scope.
