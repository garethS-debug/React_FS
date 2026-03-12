import React, { useState, useEffect } from "react";
import RepoCard from "../components/RepoCard";

export default function GetGitHubRepos() {
   const [repos, setRepos] = useState([]);
 const username = 'garethS-debug'
     const url = `https://api.github.com/users/${username}/repos`;
    
 fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("GitHub user not found");
        }
        return response.json();
      })
      .then((data) => {
        setRepos(data);

      })
      .catch((error) => {
        console.error("Error:", error.message);
      });

    const items = [];
    for (let i = 0; i < repos.length; i++) {
        items.push(<RepoCard key={repos[i].id} repo={repos[i]} />);
    }

    return (
  <ul
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: 16,
      padding: 0,
      margin: "0 auto",
      listStyle: "none",
      width: "100%",
      maxWidth: 960,            // constrain and center the grid
      boxSizing: "border-box",
      justifyItems: "stretch",
    }}
  >
    {items}
  </ul>
);
  } 

  export const renderRepos = (repos) => {
        const items = [];
        for (let i = 0; i < repos.length; i++) 
        {
        items.push(<RepoCard key={repos[i].id} repo={repos[i]} />);
        }
        return <ul>{items}</ul>;
   }

  


