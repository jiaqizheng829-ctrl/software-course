# UI Contract: Mark Tasks Complete

## Task Item

- Each task item exposes exactly one native checkbox.
- The checkbox has an accessible name associated with that task's description.
- A newly added task shows an unchecked checkbox and an unstruck description.
- A completed task shows a checked checkbox and the `task-description--complete` class on that task's description only; this class applies strikethrough styling.
- An incomplete task shows an unchecked checkbox and normal description styling.
- The task remains visible and in the same list position when its completion state changes.

## Interaction

- Pointer activation toggles the selected task between incomplete and complete.
- Keyboard users can focus the checkbox and toggle it with Space using native browser behavior.
- Checkbox state, task state, and description styling update immediately without navigation or page refresh.
- State changes target task identity, not description text; identical descriptions are independently toggleable.
- Toggling completion does not interfere with Add Tasks validation, trimming, duplicate handling, input clearing, or immediate task insertion.

## Responsive Behavior

- At viewport widths of 320 px and 375 px, checkbox and description remain visible and usable.
- Long task descriptions may wrap; they must not force horizontal page scrolling.
