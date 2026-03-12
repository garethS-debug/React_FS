import { motion } from "motion/react"

export default function RectShape({ x, y, width, height, rx, stroke, variants, custom, style, onClick }) {
    return (
        <motion.rect
            x={x}
            y={y}
            width={width}
            height={height}
            rx={rx}
            stroke={stroke}
            variants={variants}
            custom={custom}
            style={style}
            onClick={onClick}
        />
    )
}
