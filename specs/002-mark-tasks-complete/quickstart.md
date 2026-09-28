# Quickstart: Mark Tasks Complete

## Prerequisites

- A modern desktop or mobile browser.
- The project opened directly from `index.html` or served from the project root with a static HTTP server.
- Add Tasks feature available to create test tasks.

## Validation Scenarios

### 1. New tasks start incomplete

1. Add a valid task using the existing form.
2. Inspect its checkbox and description.

Expected outcome: the checkbox is unchecked and the description has no strikethrough.

### 2. Check and uncheck a task

1. Check the task's checkbox.
2. Observe its checkbox and description without reloading.
3. Uncheck the same checkbox.

Expected outcome: checking immediately shows a checked control and strikethrough; unchecking immediately restores the unchecked control and normal description styling.

### 3. Keep task states independent

1. Add at least two tasks with different descriptions and one pair with identical descriptions.
2. Check one task.
3. Check and uncheck one of the identical-description tasks.

Expected outcome: each action changes only the selected task; all other checkboxes and descriptions retain their states.

### 4. Keyboard access

1. Use Tab to move focus to a task checkbox.
2. Press Space to check it, then Space again to uncheck it.

Expected outcome: focus is visible, the checkbox toggles with native keyboard interaction, and only its task presentation changes.

### 5. Add Tasks regression

1. Mark an existing task complete.
2. Add a valid task and confirm it appears immediately.
3. Attempt to add an empty description and a whitespace-only description.
4. Add a description with leading/trailing whitespace and internal spaces; submit the same normalized description again separately.

Expected outcome: the existing task remains complete; the new task starts incomplete; valid descriptions are trimmed at the ends while internal spaces are preserved; both duplicate tasks are added separately; empty and whitespace-only submissions do not change the list.

### 6. Mobile layout

1. Set the viewport to 375 x 667, then 320 x 568.
2. Inspect a task with a long description and its checkbox.

Expected outcome: checkbox and description remain usable, the text can wrap, and no horizontal page overflow is introduced.

## Notes

- Completion is in-memory only and is not expected to survive a page reload.
- Record browser and viewport used when reporting a failure.
- Do not treat a static appearance check as proof of keyboard interaction; execute the keyboard scenario separately.

## Validation Record

**Date**: 2026-09-28

**Method**: Playwright-controlled integrated browser against the locally served application.

**Viewports**: 1280 x 800, 375 x 667, and 320 x 568.

| Scenario | Result | Evidence |
|---|---|---|
| New tasks start incomplete | Passed | Two newly added tasks exposed unchecked checkboxes. |
| Check and uncheck | Passed | Checking immediately applied `task-description--complete` and computed `line-through`; unchecking and repeated toggles restored the unchecked state and normal styling. |
| Independent tasks and identical descriptions | Passed | Two `Plan  class` entries had accessible checkbox names matching their descriptions. Checking the first left the second unchecked and unstruck. |
| Keyboard access | Passed | Tab reached a task checkbox; it matched `:focus-visible` with the browser's `outline: auto`; Space checked and unchecked it while preserving the expected task state. |
| Add Tasks regression | Passed | Valid input trimmed outer whitespace and preserved internal double spaces; identical descriptions created separate entries; empty and whitespace-only submissions were rejected; adding a new task while another was complete left the old task complete and the new task incomplete. |
| No refresh | Passed | `performance.timeOrigin` remained unchanged during the add/toggle flow. |
| Mobile layout | Passed in viewport emulation | At 375 x 667 and 320 x 568, a long description wrapped, checkbox and card remained within the viewport, and document scroll width did not exceed client width. |

These are browser-driven checks using emulated viewport sizes, not tests on physical mobile devices or assistive technology. Completion state remains in memory and is not expected to survive a page reload.

## Final Review

**Reviewed**: `script.js`, `index.html`, `styles.css`, `spec.md`, and `plan.md` against FR-001 through FR-008, SC-001 through SC-005, and the three user-story acceptance sections.

**Result**: No unimplemented in-scope behavior was identified in the reviewed code. Checkbox state is a boolean on each task and updates by stable task ID; new tasks start incomplete; the native checkbox has a task-specific accessible name; check and uncheck update only that description's strikethrough; Add Tasks regression scenarios passed.

**Limits**: Keyboard operation and accessible names were checked in the browser accessibility tree. No physical assistive-technology session or physical mobile-device test was performed. Persistence across reloads is explicitly out of scope.
