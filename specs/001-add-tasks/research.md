# Research: Add Tasks Feature

## Decision

Use a browser-only, single-page approach with an in-memory JavaScript array as the source of truth for the task list. The UI will render tasks from that array after each valid submission.

## Rationale

- The feature requirements explicitly exclude a backend and database.
- A simple in-memory array is sufficient to satisfy the requirement that tasks appear immediately without refresh.
- Rendering from state keeps the behavior predictable and easy to test in a browser-only SPA.
- Validation can occur entirely in the client before the task is inserted into the list.

## Alternatives Considered

1. Local storage-backed tasks
   - Pros: tasks persist across refreshes.
   - Cons: exceeds the current scope and is not required by the feature specification.

2. Framework-based SPA (React/Vue)
   - Pros: component-based rendering patterns.
   - Cons: adds setup, tooling, and complexity that are unnecessary for a minimal HTML/CSS/JS app.

3. Server-rendered page submission
   - Pros: familiar for traditional web apps.
   - Cons: violates the no-backend requirement and introduces a full page refresh pattern.

## Resolved Unknowns

- No backend API or persistence layer is needed for v1.
- The task list is expected to live only in the browser session for the lifetime of the page.
- Validation is focused on empty and whitespace-only task text; no advanced business rules are required in this iteration.
- The UI should update immediately on valid submissions without reloading the page.
