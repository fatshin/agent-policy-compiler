import type { Product } from "./product-types";

export const product: Product = {
  number: "00",
  name: "Build Week Product",
  eyebrow: "Independent decision tool",
  tagline: "A focused product with an auditable result.",
  description:
    "This placeholder is replaced by product-owned evidence in each independent worktree.",
  accent: "#ff6b35",
  inputLabel: "Example input",
  inputHint: "A deterministic fixture is included for judge review.",
  inputValue: "Product-specific input",
  actionLabel: "Run analysis",
  status: "READY",
  statusTone: "good",
  metrics: [{ value: "1", label: "auditable result" }],
  findings: [
    {
      title: "Product-owned finding",
      detail: "Each worktree replaces this placeholder with its own result.",
      badge: "PROOF",
      tone: "good",
    },
  ],
  method: [
    {
      step: "01",
      title: "Inspect",
      detail: "Read a bounded, visible input.",
    },
    {
      step: "02",
      title: "Evaluate",
      detail: "Apply a deterministic product-specific rule.",
    },
    {
      step: "03",
      title: "Explain",
      detail: "Show evidence and the next human action.",
    },
  ],
  proof: ["Independent worktree", "Deterministic fixture", "Human-visible evidence"],
  note: "Demo data is visibly identified and no private data is transmitted.",
};
