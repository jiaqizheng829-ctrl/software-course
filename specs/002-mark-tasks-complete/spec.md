# Feature Specification: Mark Tasks Complete

**Feature Branch**: `002-mark-tasks-complete`

**Created**: 2026-09-28

**Status**: Implemented - acceptance behavior is supported by browser validation recorded in [quickstart.md](quickstart.md); physical mobile-device and assistive-technology testing were not performed.

**Input**: User description: "Add task-specific completion checkboxes. Tasks start incomplete; checking marks a task complete and strikes through its description; unchecking restores the incomplete state. Changes appear immediately, toggling one task does not affect others, and existing Add Tasks behavior is preserved. No backend, database, or persistence is required."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Mark a task complete (Priority: P1)

A user sees an incomplete task and checks its checkbox. The selected task is marked complete and its description is shown with a strikethrough, while all other tasks remain unchanged.

**Why this priority**: Completing a task is the primary purpose of this feature.

**Independent Test**: With at least two tasks visible, check one task and verify that only its completion state and description presentation change.

**Acceptance Scenarios**:

1. **Given** a task is incomplete, **When** the user checks its checkbox, **Then** that task becomes complete and its description is shown with a strikethrough.
2. **Given** multiple tasks are visible, including tasks with identical descriptions, **When** the user checks one task, **Then** every other task remains in its previous state.
3. **Given** a valid task is newly added, **When** it appears in the list, **Then** its checkbox starts unchecked and its description is not struck through.

---

### User Story 2 - Restore a task to incomplete (Priority: P1)

A user can undo completion by unchecking a completed task. The task returns to its incomplete visual state without changing other tasks.

**Why this priority**: Users need to correct an accidental completion or resume work on a task.

**Independent Test**: Check a task, then uncheck it, and verify that its description returns to normal while other tasks retain their states.

**Acceptance Scenarios**:

1. **Given** a task is complete, **When** the user unchecks its checkbox, **Then** it becomes incomplete and its description is no longer struck through.
2. **Given** another task has a different completion state, **When** the user unchecks the selected task, **Then** the other task remains unchanged.
3. **Given** the user checks and unchecks a task repeatedly, **When** each action completes, **Then** the checkbox and description presentation match the task's latest state.

---

### User Story 3 - Keep task actions independent (Priority: P1)

A user can manage completion state while continuing to add tasks. Completing one task does not interfere with another task or with the existing task-creation flow.

**Why this priority**: Completion must work alongside the existing Add Tasks feature without changing its behavior.

**Independent Test**: Complete an existing task, add another valid task, and verify that the completed task stays complete and the new task starts incomplete.

**Acceptance Scenarios**:

1. **Given** one task is complete, **When** the user adds a valid task, **Then** the existing task remains complete and the new task appears incomplete.
2. **Given** the user submits empty or whitespace-only task content, **When** the Add action is attempted, **Then** no task is created and existing completion states remain unchanged.
3. **Given** two separate tasks have the same description, **When** the user changes one task's checkbox, **Then** only that task changes state.

---

### Edge Cases

- Tasks with identical descriptions must remain independently toggleable.
- A task added after another task is complete starts incomplete and does not alter existing completion states.
- Repeated checking and unchecking leaves each task in the state indicated by its latest checkbox value.
- Completion changes apply to the current page session; preserving state after a page reload is not required.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The system MUST provide a checkbox for each task in the task list.
- **FR-002**: Every task MUST start in the incomplete state, including tasks created through the existing Add Tasks flow.
- **FR-003**: Checking a task's checkbox MUST mark only that task complete and show its description with a strikethrough.
- **FR-004**: Unchecking a completed task MUST restore only that task to the incomplete state and remove the strikethrough from its description.
- **FR-005**: Checkbox, completion-state, and description-presentation changes MUST appear immediately without a page refresh.
- **FR-006**: Toggling one task MUST NOT change any other task's completion state, including another task with an identical description.
- **FR-007**: The feature MUST preserve existing Add Tasks behavior: valid descriptions are added immediately, leading and trailing whitespace is removed while internal whitespace is preserved, empty and whitespace-only descriptions are rejected, identical descriptions remain separate tasks, and the application imposes no description-length limit.
- **FR-008**: Marking a task complete MUST NOT remove it from the task list.

### Key Entities *(include if feature involves data)*

- **Task**: A task description with an independent completion state of incomplete or complete.
- **Task List**: The tasks visible in the current application session, each of which can be completed independently.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: 100% of valid newly added tasks appear with an unchecked checkbox and no strikethrough.
- **SC-002**: 100% of checked tasks show a strikethrough immediately, without requiring a page refresh.
- **SC-003**: 100% of unchecked completed tasks return to the incomplete visual state immediately, without requiring a page refresh.
- **SC-004**: In tests with multiple tasks, including identical descriptions, toggling one task changes exactly one task's completion state.
- **SC-005**: Existing Add Tasks acceptance behavior remains unchanged when completion controls are used, including valid immediate addition and rejection of empty or whitespace-only descriptions.

## Assumptions

- Task descriptions and completion state are available during the current page session.
- Each task is independently identifiable even when descriptions are identical.
- Completed tasks remain visible in the task list.
- Completion state does not need to persist across page reloads or browser sessions.

## Out of Scope

- Editing, deleting, sorting, filtering, or prioritizing tasks.
- Saving tasks or completion state across page reloads or browser sessions.
- User accounts, authentication, or synchronization between devices.
- A backend, database, or other persistent storage.
