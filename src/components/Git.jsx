import React, { useState, useEffect } from "react";

export default function GetGitHubRepos() {
 
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
        // renderRepos(data);
        // renderRepos2(data);
        // renderRepos3(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error.message);
      });
  } 



