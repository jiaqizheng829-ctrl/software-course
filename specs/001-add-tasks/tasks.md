# Tasks: Add Tasks

**Input**: Design documents from `/specs/001-add-tasks/`

**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Bootstrap the static SPA structure for the Add Tasks feature

- [x] T001 Create the initial front-end structure in index.html, styles.css, and script.js
- [x] T002 [P] Create the task input form, Add button, and task list markup in index.html
- [x] T003 [P] Add base page styling, spacing, and form layout in styles.css

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Shared logic and validation needed before user-story work

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T004 Create the in-memory task state model and initial task array in script.js
- [x] T005 [P] Add a shared `trimInput` and validation helper in script.js
- [x] T006 [P] Implement the DOM rendering function that re-renders the list from task state in script.js
- [x] T007 Add a clear-input/reset flow after a successful task submission in script.js

**Checkpoint**: Foundation ready - user story implementation can now begin

---

## Phase 3: User Story 1 - Add a task from the to-do form (Priority: P1) 🎯 MVP

**Goal**: Allow a user to enter a valid task description and immediately see it in the visible list without refreshing the page.

**Independent Test**: Enter a non-empty task, click Add, and confirm the new task appears in the current list without a page reload.

### Implementation for User Story 1

- [x] T008 [US1] Add the click handler for the Add button and bind it to the form submission flow in script.js
- [x] T009 [US1] Implement the task creation flow that trims input and creates a new task object in script.js
- [x] T010 [US1] Append the valid task to the in-memory array and call the render function in script.js
- [x] T011 [US1] Clear the input field and keep the UI focused after a successful add in script.js
- [x] T012 [P] [US1] Ensure the list item renders the exact task text and appears immediately in the DOM in script.js
- [x] T013 [P] [US1] Add empty-state and list-item markup support in index.html and script.js

### Validation for User Story 1

- [x] T014 [P] [US1] Create a browser validation checklist for a successful add in quickstart.md
- [x] T015 [P] [US1] Verify the happy path in the browser: valid task appears instantly without refresh

---

## Phase 4: User Story 2 - Prevent invalid task submissions (Priority: P1)

**Goal**: Block empty or whitespace-only task submissions and leave the task list unchanged.

**Independent Test**: Attempt to add blank or whitespace-only input and confirm the task is rejected, no item is created, and the list stays unchanged.

### Implementation for User Story 2

- [x] T016 [US2] Reject empty strings and whitespace-only values before task creation in script.js
- [x] T017 [US2] Prevent invalid submissions from mutating the in-memory task array in script.js
- [x] T018 [US2] Keep the current task list unchanged and maintain the current page state after blocked input in script.js
- [x] T019 [P] [US2] Add inline validation feedback or a user-facing invalid-state message in index.html and script.js

### Validation for User Story 2

- [x] T020 [P] [US2] Create a validation task covering blank input and whitespace-only input in quickstart.md
- [x] T021 [P] [US2] Verify in the browser that no invalid task is added and no page refresh occurs

---

## Phase 5: User Story 3 - Confirm task visibility after creation (Priority: P2)

**Goal**: Ensure the user can verify that each valid task appears immediately and visibly in the task list without reloading the page.

**Independent Test**: Add a valid task and confirm the UI visibly updates on the current page, with the new item shown in the task list immediately.

### Implementation for User Story 3

- [x] T022 [US3] Ensure the task list is re-rendered immediately after task insertion in script.js
- [x] T023 [US3] Confirm the newly added item is displayed in the same page session and not hidden behind a refresh in script.js
- [x] T024 [P] [US3] Add or refine the list item styling for immediate visual confirmation in styles.css

### Validation for User Story 3

- [x] T025 [P] [US3] Add a browser scenario in quickstart.md covering immediate UI visibility after a valid submit
- [x] T026 [P] [US3] Verify in the browser that the new task appears without reloading the page

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Final verification, usability, documentation, and risk reduction

- [x] T027 [P] Review the current implementation against spec.md, plan.md, and quickstart.md for full acceptance coverage
- [x] T028 [P] Check keyboard interaction and form focus behavior for the Add button in index.html and script.js
- [x] T029 [P] Review whitespace edge cases and duplicate-click behavior in script.js
- [x] T030 [P] Update README.md with a simple feature description and usage instructions for the Add Tasks feature
- [x] T031 [P] Final UI pass for clarity, spacing, and usability in styles.css

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Story 1 (Phase 3)**: Depends on Foundational completion
- **User Story 2 (Phase 4)**: Depends on Foundational completion and is independently testable
- **User Story 3 (Phase 5)**: Depends on User Story 1 completion and validates immediate visibility
- **Polish (Final Phase)**: Depends on all user stories and validation tasks being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after foundational setup and is the core MVP.
- **User Story 2 (P1)**: Can be implemented after foundation and validates invalid submission handling.
- **User Story 3 (P2)**: Can be implemented after the valid-add flow works and confirms visibility behavior.

### Within Each User Story

- Validation logic before state mutation
- State mutation before DOM re-render
- Story verification before moving to the next priority

## Parallel Opportunities

- T002 and T003 can run in parallel because they affect separate files.
- T005 and T006 can run in parallel after the state model exists.
- T014 and T015 can run in parallel during the happy-path validation step.
- T020 and T021 can run in parallel during invalid-input validation.
- T025 and T026 can run in parallel during immediate-visibility validation.
- T027 and T028 can run in parallel during final polish reviews.
- T030 and T031 can run in parallel during the documentation and UI polish pass.

---

## Parallel Example: User Story 1

```bash
# Parallel work for the happy path
Task: "Add the click handler for the Add button in script.js"
Task: "Append the valid task to the in-memory array and call the render function in script.js"
Task: "Ensure the input field clears after a valid submission in script.js"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational
3. Complete Phase 3: User Story 1
4. Validate that valid tasks appear immediately without a page refresh
5. Stop and confirm the task list changes in the same page state

### Incremental Delivery

1. Setup the static front-end structure
2. Add the validation and render logic
3. Implement the valid-add flow
4. Add invalid-input rejection and immediate visibility checks
5. Finish with documentation and polish review

### Parallel Team Strategy

With multiple developers:

1. Developer A handles HTML and CSS structure
2. Developer B handles JavaScript validation and rendering
3. Developer C validates browser behavior and documentation updates

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps tasks to the specific user story for traceability
- Each user story should be independently completable and testable
- Verify the feature works without reloading the page
- Ensure empty and whitespace-only input is blocked before mutation
- Ensure valid tasks appear immediately in the visible task list after submission
- Documentation and manual validation tasks are included to match the feature requirement set

## Phase 7: Convergence

**Purpose**: Close the remaining evidence gap identified by the convergence review

- [x] T032 Run an observed representative-user SC-001 check from first keystroke to visible task and record elapsed time against the unchanged five-second criterion (SC-001; partial)
