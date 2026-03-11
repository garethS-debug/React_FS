"use client"

import * as motion from "motion/react-client"
import { useEffect, useState } from "react"
import socialItems from "../data/socialItems"


export default function Social() {
    const [order, setOrder] = useState(socialItems)

    useEffect(() => {
        const timeout = setTimeout(() => setOrder(shuffle(order)), 9000)
        return () => clearTimeout(timeout)
    }, [order])

    return (
        <ul style={container}>
            {order.map((it) => (
                <motion.li
                    key={it.id}
                    layout
                    transition={spring}
                    style={{ ...item, backgroundColor: it.color }}
                >
                    <a href={it.href} target="_blank" rel="noopener noreferrer" style={{ display: 'block' }}>
                        <img
                            src={it.icon}
                            alt={it.id}
                            style={{ width: "60%", height: "60%", objectFit: "contain" }}
                        />
                    </a>
                </motion.li>
            ))}
        </ul>
    )
}

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
    minWidth: 50,
    flex: "0 0 auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10px",
}

