// import { motion } from "motion/react"
// import logo from '../../assets/Logo/logo_500px.svg'

// export default function EnterAnimation() {
//   return (
//     <motion.img
//       src={logo}
//       initial={{ opacity: 0, scale: 0 }}
//       animate={{ opacity: 1, scale: 1 }}
//       transition={{
//         duration: 0.4,
//         scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
//       }}
//       style={imgStyle}
//       alt="logo"
//     />
//   )
// }

// const imgStyle = {
//   width: 100,
//   height: 100,
//   borderRadius: "50%",
//   objectFit: "cover",
//   display: "block",
// }
import { motion } from "motion/react"
import logo from '../../assets/Logo/logo_500px.svg'

export default function EnterAnimation() {
  return (
    <motion.img
      src={logo}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.4,
        scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
      }}
      style={imgStyle}
      alt="logo"
    />
  )
}

const imgStyle = {
  width: 100,
  height: 100,
  objectFit: "cover",
  display: "block",
}