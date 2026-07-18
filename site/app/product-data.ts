import type { Product } from "./product-types";

export const product: Product = {
  number: "01",
  name: "Agent Policy Compiler",
  eyebrow: "Policy to executable decisions",
  tagline: "Turn policy prose into a decision system you can audit.",
  description: "Compile one written policy into explicit allow, block, and approval-required outcomes—each linked back to its source.",
  accent: "#ff6b35",
  inputLabel: "Tested policy fixture",
  inputHint: "The same five clauses and seven scenarios are checked by product.py.",
  inputValue: "POL-01: External transmissions containing PII must be blocked.\nPOL-02: Refunds above $500 and production deletion require human approval.\nPOL-03: Support may use lookup_customer and draft_reply.\nPOL-04: Finance may use issue_refund and lookup_customer.\nPOL-05: Admin may use every registered tool.",
  actionLabel: "Reveal verified result",
  status: "COMPILED",
  statusTone: "good",
  metrics: [{ value: "7", label: "scenarios" }, { value: "3", label: "allowed" }, { value: "0", label: "uncited decisions" }],
  findings: [
    { title: "PII email blocked", detail: "S2 is blocked by POL-01 because it sends PII externally.", badge: "BLOCK", tone: "bad" },
    { title: "$900 refund requires approval", detail: "S4 crosses the $500 threshold in POL-02.", badge: "APPROVAL", tone: "warn" },
    { title: "Support refund blocked", detail: "S5 is outside the support role allowlist.", badge: "ROLE GATE", tone: "good" },
  ],
  method: [
    { step: "01", title: "Parse", detail: "Separate permissions, prohibitions, thresholds, and ambiguity clauses." },
    { step: "02", title: "Compile", detail: "Convert every clause into an explicit decision rule with a source citation." },
    { step: "03", title: "Challenge", detail: "Run boundary and ambiguity cases before an agent may use the policy." },
  ],
  proof: ["7-case evaluation", "Source-linked rules", "Fail-closed ambiguity"],
  note: "The public fixture is synthetic. Production policy ingestion would require owner approval and version control.",
};
