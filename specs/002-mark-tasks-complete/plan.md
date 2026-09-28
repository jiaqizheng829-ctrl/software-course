# Implementation Plan: Mark Tasks Complete

**Branch**: `002-mark-tasks-complete` | **Date**: 2026-09-28 | **Spec**: [spec.md](spec.md)

**Input**: Feature specification from `/specs/002-mark-tasks-complete/spec.md`

## Summary

Add an accessible checkbox to each task so users can mark that task complete or incomplete,
with an immediate strikethrough update. Add a boolean `completed` state to each task,
initially `false`, and target state changes by the existing stable task ID. Preserve the
existing Add Tasks flow with no new dependencies, persistence, backend, or unrelated refactor.

## Technical Context

**Language/Version**: HTML5, CSS3, JavaScript (ES6+)

**Primary Dependencies**: Browser runtime only; no new dependencies

**Storage**: In-memory task array for the current page session; no persistence

**Testing**: Manual browser checks for check, uncheck, task independence, keyboard access,
mobile layout, and Add Tasks regression; see [quickstart.md](quickstart.md)

**Target Platform**: Modern desktop and mobile browsers

**Project Type**: Browser-only single-page application

**Performance Goals**: Checkbox state and description styling update in the same interaction,
without navigation or page reload

**Constraints**: Preserve Add Tasks behavior; no backend, database, persistence, or new
dependency; use an accessible native checkbox; isolate task state by stable ID

**Scale/Scope**: Completion state for tasks in the current in-memory list only

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

**Before design**

- The approved specification precedes implementation; this plan does not authorize coding.
- The design preserves the current HTML/CSS/JavaScript SPA and adds no backend, database,
  persistent storage, or dependency.
- Existing task creation and validation behavior remains unchanged.
- Each checkbox is natively keyboard-operable and has an accessible name associated with
  its task description.

**After design**

- Completion changes target one task by stable ID, not by description text, so duplicate
  descriptions remain independent.
- Checking and unchecking update the checkbox and strikethrough immediately without refresh.
- Validation scenarios cover check, uncheck, independence, keyboard access, mobile layout,
  and Add Tasks regression.

No constitution violations or unresolved design clarifications were identified.

## Project Structure

### Documentation (this feature)

```text
specs/002-mark-tasks-complete/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
│   └── ui-contract.md
└── tasks.md              # Generated implementation tasks; all are checked
```

### Source Code (repository root)

```text
index.html
styles.css
script.js
```

**Structure Decision**: Extend only the existing root-level static app files during
implementation. Do not introduce a framework, backend, storage layer, or source directories.

## Design Overview

### Task State and Rendering

- Every task object receives `completed: false` at creation. The existing application keeps
  tasks in memory only; all creation paths must initialize the boolean explicitly.
- Render one native checkbox per task and associate its accessible label with that task's
  description.
- Use `task-description--complete` on the description element only while its task is
  complete; define this class's strikethrough presentation in `styles.css`.
- On checkbox change, locate the task by its stable ID, assign the checkbox's checked value
  to that task's `completed` field, and immediately reflect the new state in the checkbox
  and description styling without a page reload.
- Apply strikethrough only to the completed task description. Unchecking restores normal
  presentation; completion does not remove or reorder a task.
- Duplicate descriptions remain independently toggleable because state updates use IDs, not
  description strings.
- Valid tasks added through the existing form start incomplete. Existing trimming, validation,
  no-length-limit, duplicate-allowed, and immediate-add behavior remains unchanged.

### Accessibility and Responsive Behavior

- Use a native checkbox with an accessible name associated with its task description.
- Preserve keyboard focus order and Space-key toggling; pointer interaction is not required.
- Keep checkbox, description, and controls usable at 320 px and 375 px viewport widths.
  Long text may wrap without causing horizontal overflow.

## Phase 0 and Phase 1 Outputs

- [research.md](research.md)
- [data-model.md](data-model.md)
- [quickstart.md](quickstart.md)
- [contracts/ui-contract.md](contracts/ui-contract.md)

## Completion Report

- Implementation is complete for the scoped feature in `script.js` and `styles.css`.
- Browser validation results and limitations are recorded in [quickstart.md](quickstart.md).
- All implementation tasks are checked in [tasks.md](tasks.md).
- No unresolved specification clarifications or constitution gate failures remain.
- Physical mobile-device and assistive-technology sessions were not performed.

## Complexity Tracking

No constitution violations require justification.
