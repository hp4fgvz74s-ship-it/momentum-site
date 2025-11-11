// app/layout.tsx
import * as React from "react";

export const metadata = {
  title: "Momentum Trading Systems",
  description: "Automated Trading Bots for cTrader & MetaTrader",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily: "Arial, sans-serif",
          background: "#0a0a0a",
          color: "white",
        }}
      >
        {children}
      </body>
    </html>
  );
}
