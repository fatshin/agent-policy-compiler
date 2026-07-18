export type Product = {
  number: string;
  name: string;
  eyebrow: string;
  tagline: string;
  description: string;
  accent: string;
  inputLabel: string;
  inputHint: string;
  inputValue: string;
  actionLabel: string;
  status: string;
  statusTone: "good" | "warn" | "bad";
  metrics: Array<{ value: string; label: string }>;
  findings: Array<{
    title: string;
    detail: string;
    badge: string;
    tone: "good" | "warn" | "bad" | "neutral";
  }>;
  method: Array<{ step: string; title: string; detail: string }>;
  proof: string[];
  note: string;
};
