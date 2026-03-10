"use client"

import * as motion from "motion/react-client"
import { useEffect, useState } from "react"

export default function Social() {
    const [order, setOrder] = useState(initialOrder)

    useEffect(() => {
        const timeout = setTimeout(() => setOrder(shuffle(order)), 4000)
        return () => clearTimeout(timeout)
    }, [order])

    return (
        <ul style={container}>
            {order.map((backgroundColor) => (
                <motion.li
                    key={backgroundColor}
                    layout
                    transition={spring}
                    style={{ ...item, backgroundColor }}
                />
            ))}
        </ul>
    )
}

const initialOrder = [
    "#ff0088",
    "#dd00ee",
    "#9911ff",
    "#0d63f8",
]

/**
 * ==============   Utils   ================
 */
function shuffle(array) {
    return [...array].sort(() => Math.random() - 0.5)
}

/**
 * ==============   Styles   ================
 */

const spring = {
type: "spring",
damping: 10,
stiffness: 0.2,
mass: 1.5,
speed: 0.5,
bounce: 0.5,
}

const container = {
  listStyle: "none",
  padding: 0,
  margin: 0,
  position: "relative",
  display: "flex",
  flexDirection: "row",
  flexWrap: "nowrap",
  gap: 30,
  width: "100%",       // span available width
  overflowX: "auto",   // allow horizontal scrolling if needed
  justifyContent: "flex-start",
  alignItems: "center",
}

const item = {
    width: 50,
    height: 50,
    borderRadius: "10px",
}
