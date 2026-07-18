# Agent Policy Compiler — Submission

**Tagline:** Turn policy prose into a decision system you can audit.

**Category:** Developer Tools  
**Codex Session ID:** `019f7306-7262-7371-a03f-6b99df7129bf`

## What it does

Agent Policy Compiler converts written operating rules into explicit `ALLOW`,
`BLOCK`, and `APPROVAL_REQUIRED` decisions. Every restricted result cites its
source, and ambiguous identity cases stop instead of guessing.

## How it was built

Codex designed the policy representation, validator, regression cases, and
browser experience. GPT-5.6 is the planned structured-output compiler for live
policy intake; the local validator remains authoritative.

## Proof

- 7 scenarios: 3 allow, 2 block, 2 approval required
- source citations and a fail-closed ambiguity gate
- automated tests and a deterministic public fixture

## Links

- Live product: https://agent-policy-compiler.fatshin.chatgpt.site
- Source: https://github.com/fatshin/agent-policy-compiler
- Devpost draft: https://devpost.com/software/agent-policy-compiler
- Video: `UPLOAD_TO_YOUTUBE_AND_REPLACE`

## Limits

This MVP is not a production authorization system. A policy owner must approve
any live policy before use.
