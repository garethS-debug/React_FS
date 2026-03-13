
import { motion } from "motion/react"
import logo from '../../assets/Logo/logo_500px.svg'
import Folder from './Folder'

export default function RepoCard({ repo }) {




  return (
    //console.log(repo.name + " rendered in RepoCard.jsx"),
    
    <li style={cardStyle}>
      <motion.img
        src={logo}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ rotate: 360, opacity: 1, scale: 1 }}
        transition={{
          duration: 0.4,
          scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={imgStyle}
        alt="logo"
      />
      <div style={{ flex: 1 }}>
        <div style={{ fontWeight: 600 }}>{repo?.name}</div>
        <div style={{ fontSize: 12, color: "#555" }}>{repo?.full_name}</div>
        <a href={repo?.html_url} target="_blank" rel="noreferrer" style={{ fontSize: 12 }}>
          View on GitHub
        </a>
      </div>
{/* 
      <div style={{ height: '600px', position: 'relative' }}>
      <Folder
        size={2}
        color="#5227FF"
        className="custom-folder"
        items={["README.md", "index.js", "package.json"]}
        label={repo?.name}
      />

</div> */}
    </li>
  );
}

const cardStyle = {
  display: "flex",
  gap: 12,
  alignItems: "center",
  padding: 12,
  borderRadius: 8,
  border: "1px solid #eee",
  background: "#fff",
  boxSizing: "border-box",
};

const imgStyle = {
  width: 100,
  height: 100,
  objectFit: "cover",
  display: "block",
}