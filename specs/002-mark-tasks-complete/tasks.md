# Tasks: Mark Tasks Complete

**Input**: Design documents from `/specs/002-mark-tasks-complete/`

**Prerequisites**: `plan.md`, `spec.md`, `research.md`, `data-model.md`, `contracts/ui-contract.md`, and `quickstart.md`

**Testing**: Browser validation is explicitly requested. The project has no automated test harness, so validation tasks use the scenarios in `quickstart.md` and must be run in a browser.

**Organization**: Tasks are grouped by user story so each increment can be implemented and validated independently.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel because the task has no dependency on another incomplete task and edits a separate file.
- **[Story]**: User story covered by the task; setup, foundational, and polish tasks have no story label.
- Every task names the exact project-relative file path it changes or validates.

## Phase 1: Setup

**Purpose**: Prepare browser validation steps before changing the application.

- [x] T001 Add the new-task default-state and check/uncheck browser scenarios to `specs/002-mark-tasks-complete/quickstart.md`
- [x] T002 Add identical-description, keyboard-access, mobile-layout, and Add Tasks regression scenarios to `specs/002-mark-tasks-complete/quickstart.md`

---

## Phase 2: Foundational

**Purpose**: Add the shared per-task completion state required by all user stories.

- [x] T003 Add a required `completed: false` field when creating task objects in `script.js`

**Checkpoint**: Every task created by the existing Add Tasks flow has an independent incomplete state before checkbox interactions are added.

---

## Phase 3: User Story 1 - Mark a task complete (Priority: P1) 🎯 MVP

**Goal**: A user can check one task and immediately see that task marked complete.

**Independent Test**: Add two tasks, check one checkbox, and confirm only the selected task is checked and its description is struck through without reloading.

### Implementation for User Story 1

- [x] T004 [US1] Render one native checkbox with a task-specific accessible label for each task in `script.js`
- [x] T005 [US1] Handle checkbox changes by locating the task with its stable ID and updating only that task in `script.js`
- [x] T006 [P] [US1] Style the completed task description with strikethrough using the documented completion class in `styles.css`

### Validation for User Story 1

- [x] T007 [US1] Run the new-task default, check, immediate-update, no-refresh, and identical-description independence scenarios in `specs/002-mark-tasks-complete/quickstart.md`

**Checkpoint**: Checking a task updates only its own checkbox, state, and description presentation.

---

## Phase 4: User Story 2 - Restore a task to incomplete (Priority: P1)

**Goal**: A user can uncheck a completed task and restore its normal presentation.

**Independent Test**: Check and then uncheck one task; verify its latest checkbox value and styling agree and all other tasks retain their states.

### Implementation for User Story 2

- [x] T008 [US2] Use the checkbox's current checked value to support both completion and restoration for only the matching task ID in `script.js`

### Validation for User Story 2

- [x] T009 [US2] Run the uncheck, repeated-toggle, and other-task-unchanged scenarios in `specs/002-mark-tasks-complete/quickstart.md`

**Checkpoint**: Checking and unchecking are reversible and immediately reflected without a refresh.

---

## Phase 5: User Story 3 - Keep task actions independent (Priority: P1)

**Goal**: Completion controls coexist with the existing Add Tasks workflow.

**Independent Test**: Complete one task, add a valid task, and verify the completed task stays complete while the new task starts incomplete; invalid submissions remain blocked.

### Implementation for User Story 3

- [x] T010 [US3] Preserve task-specific completion values when integrating checkbox rendering with the existing task creation and rendering flow in `script.js`

### Validation for User Story 3

- [x] T011 [US3] Run valid-add, empty-input, whitespace-only, trimming, duplicate-description, and existing-state-preservation regression scenarios in `specs/002-mark-tasks-complete/quickstart.md`

**Checkpoint**: Existing Add Tasks behavior remains intact and each new task starts incomplete.

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Verify accessibility and responsive behavior, update project documentation, and review acceptance coverage.

- [x] T012 Verify Tab focus, accessible task-specific checkbox names, and Space-key toggling using `specs/002-mark-tasks-complete/quickstart.md`
- [x] T013 [P] Ensure checkbox and long task descriptions fit without horizontal overflow at 320 px and 375 px in `styles.css`
- [x] T014 Verify the mobile-layout scenarios at 320 x 568 and 375 x 667 using `specs/002-mark-tasks-complete/quickstart.md`
- [x] T015 [P] Update the feature summary and completion behavior in `README.md`
- [x] T016 Run every scenario in `specs/002-mark-tasks-complete/quickstart.md` and record browser, viewport, and results in `specs/002-mark-tasks-complete/quickstart.md`
- [x] T017 Review `script.js`, `index.html`, `styles.css`, `specs/002-mark-tasks-complete/spec.md`, and `specs/002-mark-tasks-complete/plan.md` against all requirements and acceptance criteria; record any remaining gaps in `specs/002-mark-tasks-complete/quickstart.md`

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No implementation dependencies; prepare validation scenarios first.
- **Foundational (Phase 2)**: Depends on Setup; task creation must initialize completion state before checkbox behavior is implemented.
- **User Story 1 (Phase 3)**: Depends on Foundational; delivers the primary check action.
- **User Story 2 (Phase 4)**: Depends on User Story 1; verifies and completes the reversible unchecked state.
- **User Story 3 (Phase 5)**: Depends on Foundational and the task rendering flow; protects Add Tasks integration.
- **Polish (Phase 6)**: Depends on all three user stories.

### User Story Dependencies

- **User Story 1 (P1)**: Starts after the foundational task state; this is the MVP.
- **User Story 2 (P1)**: Builds on the checkbox interaction from User Story 1.
- **User Story 3 (P1)**: Integrates with the existing Add Tasks flow after shared task state and rendering are defined.

### Parallel Opportunities

- T001 and T002 edit the same quickstart file and should be performed sequentially.
- T006 can be done in parallel with JavaScript work after the completion CSS class is agreed in `contracts/ui-contract.md`.
- Once shared task state and the interaction contract are settled, mobile CSS work can proceed independently from README documentation.
- Browser validation tasks depend on their corresponding implementation tasks and must not be marked complete before execution.

---

## Parallel Example: User Story 1

```text
Task: T005 Handle task checkbox state by stable ID in script.js
Task: T006 Add completed-description strikethrough styling in styles.css
```

These can proceed in parallel once T004 defines the rendered checkbox and completion class contract.

---

## Implementation Strategy

### MVP First (User Story 1)

1. Complete Setup and Foundational tasks.
2. Implement User Story 1 checkbox rendering, stable-ID state update, and strikethrough.
3. Run the User Story 1 browser scenarios independently.
4. Continue to User Stories 2 and 3 only after the MVP check succeeds.

### Incremental Delivery

1. Prepare browser scenarios and initialize each task as incomplete.
2. Deliver and validate checking a task.
3. Deliver and validate unchecking and task independence.
4. Verify Add Tasks regression and mobile/keyboard usability.
5. Update documentation and run the complete browser checklist.
