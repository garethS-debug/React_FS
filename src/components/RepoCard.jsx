
import { motion } from "motion/react"
import logo from '../../assets/Logo/logo_500px.svg'

export default function RepoCard({ repo }) {

    
  return (
    console.log(repo.name + " rendered in RepoCard.jsx"),
    <motion.img
      src={logo}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ rotate: 360, opacity: 1, scale: 1}}
      transition={{
        duration: 0.4,
        scale: { type: "spring", visualDuration: 0.4, bounce: 0.5},
      
      }}
       whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
    // animate2={{ rotate: 360 }}
    //   transition2={{ duration: 1, ease: "easeInOut", repeat: Infinity, repeatType: "loop" }}
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