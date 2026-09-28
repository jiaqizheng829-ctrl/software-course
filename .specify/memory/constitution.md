<!--
Sync Impact Report
Version change: uninitialized -> 1.0.0
Modified principles:
- PRINCIPLE_1_NAME -> I. Specification Before Implementation
- PRINCIPLE_2_NAME -> II. Incremental Development
- PRINCIPLE_3_NAME -> III. Input Validation and Clear Code
- PRINCIPLE_4_NAME -> IV. Decisions and Meaningful Git History
- PRINCIPLE_5_NAME -> V. Responsible AI Use
Added sections:
- SECTION_2_NAME -> Project Constraints
- SECTION_3_NAME -> Development Workflow and Quality Gates
Removed sections: None
Follow-up TODOs:
- Ratification date confirmed as 2026-09-28; this constitution was recorded after initial
	feature development and does not claim prior adoption.
-->

# To-Do Project Constitution

## Core Principles

### I. Specification Before Implementation
Every feature MUST have a written specification before implementation begins. The
specification MUST state the user need, scope, and acceptance criteria. Ambiguities that
could change behavior or scope MUST be resolved in the specification before coding. This
keeps implementation tied to an agreed outcome and reduces avoidable rework.

### II. Incremental Development
Changes MUST be delivered in small, reviewable increments. Each increment MUST preserve
existing working behavior and be checked against its relevant acceptance criteria before
the next increment begins. Large changes MUST be divided into independently verifiable
steps so failures can be localized and progress remains clear.

### III. Input Validation and Clear Code
User-provided input MUST be validated before it changes application state. Invalid input
MUST be rejected with behavior consistent with the specification. Code MUST use meaningful
names, focused functions, and straightforward control flow; unnecessary dependencies and
abstractions MUST NOT be introduced. These rules keep browser behavior predictable and
make the code understandable to the student maintaining it.

### IV. Decisions and Meaningful Git History
Important technical or product decisions MUST be recorded in the relevant project
documentation with their context and rationale. Each Git commit MUST represent a coherent,
scoped change, and its message MUST describe the change rather than use a generic label.
This preserves the reasoning behind the project and makes its history useful for review.

### V. Responsible AI Use
AI tools MAY be used for learning, planning, and implementation. Before submitting AI-
assisted work, the student MUST inspect and verify it and MUST be able to explain its
behavior and important tradeoffs. The student remains responsible for the correctness,
quality, and consequences of all submitted work; AI output is not a substitute for
understanding or validation.

## Project Constraints

The current application is a browser-only single-page app built with HTML, CSS, and
JavaScript. It MUST NOT add a backend, database, or persistent storage unless a revised
specification explicitly expands the project scope. New dependencies or architectural
changes MUST have a documented need and be consistent with the approved specification.

Existing application behavior and approved feature specifications MUST be preserved by
default. A change that intentionally alters either MUST identify the affected behavior and
update the relevant specification before implementation.

## Development Workflow and Quality Gates

1. Write or revise the feature specification and acceptance criteria before implementation.
2. Break approved work into small tasks with clear outcomes and dependencies when planning
	is needed.
3. Implement one increment at a time and keep changes limited to the approved scope.
4. Verify changed behavior against its acceptance criteria, including relevant invalid-input
	cases. Use browser checks or automated tests appropriate to the change.
5. Record important decisions and meaningful implementation or verification outcomes in
	project documentation. A task MUST NOT be reported complete without evidence that its
	expected behavior was implemented or checked.

## Governance

This constitution was recorded after the initial feature development. It governs work from
its adoption onward and does not assert that earlier work followed these rules. Any
retrospective assessment of existing work MUST distinguish observed evidence from
assumptions.

Amendments MUST include a rationale, an updated amendment date, and a Sync Impact Report.
Version numbers follow semantic versioning: MAJOR for incompatible governance changes,
MINOR for new principles or materially expanded requirements, and PATCH for clarifications
that do not change obligations. Reviews MUST check proposed work against this constitution
and its specification, and MUST report unverified requirements as unverified rather than
marking them complete.

**Version**: 1.0.0 | **Ratified**: 2026-09-28 | **Last Amended**: 2026-09-28
