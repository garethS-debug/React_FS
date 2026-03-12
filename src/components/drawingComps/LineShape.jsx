import { motion } from "motion/react"

export default function LineShape({ x1, y1, x2, y2, stroke, variants, custom, style, onClick }) {
    return (
        <motion.line
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke={stroke}
            variants={variants}
            custom={custom}
            style={style}
            onClick={onClick}
        />
    )
}
