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

    return <ul>{items}</ul>;
  } 

  export const renderRepos = (repos) => {
        const items = [];
        for (let i = 0; i < repos.length; i++) 
        {
        items.push(<RepoCard key={repos[i].id} repo={repos[i]} />);
        }
        return <ul>{items}</ul>;
   }

  


