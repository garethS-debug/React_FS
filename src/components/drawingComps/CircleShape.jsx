import { motion } from "motion/react"

export default function CircleShape({ cx, cy, r, stroke, variants, custom, style, onClick, className }) {
    return (
        <motion.circle
            className={className}
            cx={cx}
            cy={cy}
            r={r}
            stroke={stroke}
            variants={variants}
            custom={custom}
            style={style}
            onClick={onClick}
        />
    )
}
