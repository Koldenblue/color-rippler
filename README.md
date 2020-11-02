# Color Rippler
![image](https://img.shields.io/badge/license-MIT%20License-green)

## Table of Contents

1. <a href="#description">Description</a>
2. <a href="#installation">Installation</a>
3. <a href="#usage">Usage</a>
4. <a href="#contributions">Contributions</a>
5. <a href="#questions">Issues and Questions</a>
![image](https://user-images.githubusercontent.com/64618290/96037483-c0b5a380-0e1a-11eb-97e3-447315ca7d56.png)

![image](https://user-images.githubusercontent.com/64618290/97913383-0d4a1b80-1d03-11eb-80f1-18866d74bcf3.png)
<hr><h3 id='description'>Description</h3>
Click on the grid in the webpage to cause ripples of color! This project takes advantage of the React framework to efficiently render and re-render a large grid of components. The main app consists of a grid of colored boxes. Clicking on any box will cause color changes to ripple outwards. Work in progress. Future updates including routing to an option page, in which options such as grid size, initial color, and ripple styles will be able to be selected. The target max grid size is a 50 x 50 grid - that's 2500 squares! In other words, that is more than 2500 components contained in the DOM, or thousands of HTML elements. This is a situation where the advantage of React over a traditional JavaScript framework is clear - React is designed to re-render individual components on an as-needed basis, rather than having to rerender the entire HTML document upon DOM changes.

This project is being worked on - an options page is currently being implemented. Future direction is planned for users to be able to store generated color grids in a database.

<h3 id='installation'>Installation</h3>
Check out the deployed website at https://color-rippler.herokuapp.com/! Alternatively, the project source code may be downloaded and cloned from GitHub. With Node.js installed, the command 'npm install' in the program directory in the terminal can be then used to install required packages. Finally, the command 'npm start' will host the program locally.

<h3 id='usage'>Usage</h3>
Click for colors, yay! A goal of this project will be to have the interactive colored background exportable as a React component, so that it can easily be integrated into a React webpage. 

<h3 id='contributions'>Contributions</h3>
Email the author or contact the author through GitHub.

<h3 id='questions'>Issues and Questions</h3>
Issues and questions can be emailed to 'kmillergit' at the domain 'outlook.com'. The author's GitHub profile may be found at https://github.com/Koldenblue.<p><sub><sup>This readme was generated with the help of the readme generator program at https://github.com/Koldenblue/readme-generator.</sup></sub></p>
