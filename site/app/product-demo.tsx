"use client";

import { useState } from "react";
import type { Product } from "./product-types";

export function ProductDemo({ product }: { product: Product }) {
  const [hasRun, setHasRun] = useState(false);

  return (
    <main style={{ "--accent": product.accent } as React.CSSProperties}>
      <nav className="nav">
        <a className="brand" href="#top" aria-label={`${product.name} home`}>
          <span className="brand-mark">{product.number}</span>
          <span>{product.name}</span>
        </a>
        <div className="nav-links">
          <a href="#demo">Demo</a>
          <a href="#method">Method</a>
          <span className="build-week">OpenAI Build Week</span>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">{product.eyebrow}</p>
          <h1>{product.tagline}</h1>
          <p className="lede">{product.description}</p>
          <div className="hero-actions">
            <a className="primary-button" href="#demo">
              Try the fixture <span aria-hidden="true">↘</span>
            </a>
            <span className="fixture-label">No sign-in · deterministic demo</span>
          </div>
        </div>
        <div className="signal-card" aria-label="Product proof">
          <span className="signal-number">{product.number}</span>
          <div className="signal-rule" />
          <p>One product.</p>
          <p>One decision.</p>
          <p>Visible evidence.</p>
        </div>
      </section>

      <section className="demo-section" id="demo">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Interactive proof</p>
            <h2>Run the included case.</h2>
          </div>
          <p>{product.inputHint}</p>
        </div>

        <div className="demo-grid">
          <div className="input-panel">
            <label htmlFor="fixture">{product.inputLabel}</label>
            <textarea id="fixture" value={product.inputValue} readOnly />
            <button
              className="run-button"
              type="button"
              onClick={() => setHasRun(true)}
            >
              {hasRun ? "Run again" : product.actionLabel}
              <span aria-hidden="true">→</span>
            </button>
          </div>

          <div
            className={`result-panel ${hasRun ? "is-visible" : ""}`}
            aria-live="polite"
          >
            {!hasRun ? (
              <div className="waiting">
                <span>01</span>
                <h3>Result is ready to reproduce.</h3>
                <p>Run the fixture to reveal the decision and its evidence.</p>
              </div>
            ) : (
              <>
                <div className="result-topline">
                  <span>Analysis complete</span>
                  <strong className={`status ${product.statusTone}`}>
                    {product.status}
                  </strong>
                </div>
                <div className="metrics">
                  {product.metrics.map((metric) => (
                    <div className="metric" key={metric.label}>
                      <strong>{metric.value}</strong>
                      <span>{metric.label}</span>
                    </div>
                  ))}
                </div>
                <div className="findings">
                  {product.findings.map((finding) => (
                    <article className="finding" key={finding.title}>
                      <span className={`badge ${finding.tone}`}>
                        {finding.badge}
                      </span>
                      <div>
                        <h3>{finding.title}</h3>
                        <p>{finding.detail}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="method-section" id="method">
        <div className="section-heading">
          <div>
            <p className="eyebrow">How it works</p>
            <h2>Small surface. Clear chain of proof.</h2>
          </div>
        </div>
        <div className="method-grid">
          {product.method.map((item) => (
            <article className="method-card" key={item.step}>
              <span>{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="proof-strip">
        {product.proof.map((item) => (
          <span key={item}>✓ {item}</span>
        ))}
      </section>

      <footer>
        <div>
          <strong>{product.name}</strong>
          <p>{product.note}</p>
        </div>
        <span>Built with Codex and GPT-5.6 · 2026</span>
      </footer>
    </main>
  );
}
