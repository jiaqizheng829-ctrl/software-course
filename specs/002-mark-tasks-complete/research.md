# Research: Mark Tasks Complete

## Decision 1: Keep completion state on each in-memory task

**Decision**: Add a boolean `completed` property to each task. New tasks initialize it to `false`; checking and unchecking set it to `true` and `false` respectively.

**Rationale**: Completion is a property of an individual task, and the existing application already keeps task objects in an in-memory array. The feature requires no state beyond the current page session.

**Alternatives considered**: Keep completed IDs in a separate collection; rejected because it duplicates task identity/state bookkeeping without adding value for this small application. Persist state to browser storage; rejected because persistence is explicitly out of scope.

## Decision 2: Use the existing stable task ID as the update key

**Decision**: Checkbox changes identify the task by its existing unique ID, never by its description or list position.

**Rationale**: Separate tasks may have identical descriptions. Stable IDs ensure changing one task cannot change another, including when the descriptions match.

**Alternatives considered**: Match on description text; rejected because duplicate descriptions are allowed. Match by rendered list position; rejected because positions can change when the list is re-rendered.

## Decision 3: Use a native, task-labeled checkbox

**Decision**: Render a standard HTML checkbox for each task and associate its accessible label with the task description. Use its checked value as the desired completion state and reflect changes immediately in the UI.

**Rationale**: Native checkboxes provide browser keyboard interaction and accessibility semantics with minimal custom code. A task-specific label makes the control understandable to assistive technology users.

**Alternatives considered**: A custom clickable icon or styled non-semantic element; rejected because it would require recreating keyboard and accessibility behavior.

## Decision 4: Keep presentation scoped to the completed task

**Decision**: Apply strikethrough to the description only while that task is complete; remove it when unchecked. Keep completed tasks visible and in their existing order.

**Rationale**: This matches the specification and avoids introducing deletion, filtering, or list-order behavior.

**Alternatives considered**: Hide or move completed tasks; rejected because these behaviors are not requested.

## Decision 5: Preserve existing Add Tasks behavior and layout constraints

**Decision**: Initialize newly added tasks as incomplete while retaining existing trimming, validation, duplicate allowance, no application-defined length limit, and immediate in-page insertion. Validate the checkbox and long descriptions at 320 px and 375 px viewport widths.

**Rationale**: The new feature must coexist with the existing workflow and the current responsive layout.

**Alternatives considered**: Rework the form or task model broadly; rejected as unnecessary scope and regression risk.

## Open Questions

None. The specification defines completion state, accessibility expectation, identity behavior, persistence scope, and Add Tasks compatibility.
