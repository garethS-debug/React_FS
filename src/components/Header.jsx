import React from "react"
import EnterAnimation from "./logo"

export default function Header() {
  return (
    <header style={{ display: "flex", alignItems: "center", gap: 12, padding: 12 }}>
      <EnterAnimation />
      <div>
        <h1 style={{ margin: 0, fontSize: 20 }}>React FS</h1>
      </div>
    </header>
  )
}
