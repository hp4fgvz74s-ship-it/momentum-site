// app/page.tsx
export default function Home() {
  return (
    <main
      style={{
        maxWidth: 960,
        margin: "0 auto",
        padding: "32px 20px",
        lineHeight: 1.6,
        fontSize: 16,
      }}
    >
      {/* Hero */}
      <section style={{ textAlign: "center", marginTop: 24, marginBottom: 28 }}>
        <h1 style={{ fontSize: 34, margin: "0 0 8px" }}>
          Momentum Trading Systems
        </h1>
        <p style={{ opacity: 0.85, margin: 0 }}>
          Automated trading for XAUUSD (4H) — momentum + filters, SL×ATR / TP×ATR,
          session & trend logic.
        </p>
        <div
          style={{
            marginTop: 18,
            display: "flex",
            gap: 12,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href="mailto:Momentumtradingsystems@outlook.com?subject=Momentum%20Bot%20Info"
            style={{
              background: "#22c55e",
              color: "black",
              padding: "10px 16px",
              borderRadius: 8,
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            Contact / Request demo
          </a>
          <a
            href="mailto:Momentumtradingsystems@outlook.com?subject=Momentum%20Bot%20-%2070%25%20early%20bird"
            style={{
              background: "#eab308",
              color: "black",
              padding: "10px 16px",
              borderRadius: 8,
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            70% Early-bird (first 10)
          </a>
        </div>
      </section>

      {/* Highlights */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: 16,
          marginBottom: 28,
        }}
      >
        {[
          {
            t: "Core logic",
            d: "EMA50/EMA200 trend, RSI gates, ATR-based SL/TP, cooldown + session filter.",
          },
          {
            t: "Entry modes",
            d: "Original / LooserRSI / Pullback-or-Breakout voor meer entries op 4H.",
          },
          {
            t: "Risk controls",
            d: "Fixed lots binnen jouw min/max, SL/TP in ATR-pips; sessie 06:00–23:00 UTC.",
          },
          {
            t: "Predictive Freeze",
            d: "Automatische pauze na zware bearish regimes op XAUUSD.",
          },
        ].map((x) => (
          <div
            key={x.t}
            style={{
              border: "1px solid #262626",
              borderRadius: 12,
              padding: 16,
              background: "#121212",
            }}
          >
            <h3 style={{ margin: "0 0 6px", fontSize: 18 }}>{x.t}</h3>
            <p style={{ margin: 0, opacity: 0.85 }}>{x.d}</p>
          </div>
        ))}
      </section>

      {/* Proof / backtest note */}
      <section
        style={{
          border: "1px solid #262626",
          borderRadius: 12,
          padding: 16,
          background: "#121212",
          marginBottom: 28,
        }}
      >
        <h2 style={{ margin: "0 0 8px" }}>Backtests (summary)</h2>
        <p style={{ margin: 0, opacity: 0.85 }}>
          Example run (Jan 1 → Nov 10): SL×ATR 1 / TP×ATR 4, fixed lot 0.5, start
          balance 10,000. Request screenshots & full logs by email.
        </p>
      </section>

      {/* Footer */}
      <footer style={{ opacity: 0.7, fontSize: 14, textAlign: "center" }}>
        © {new Date().getFullYear()} Momentum Trading Systems —{" "}
        <a
          href="mailto:Momentumtradingsystems@outlook.com"
          style={{ color: "#60a5fa" }}
        >
          Momentumtradingsystems@outlook.com
        </a>
      </footer>
    </main>
  );
}
