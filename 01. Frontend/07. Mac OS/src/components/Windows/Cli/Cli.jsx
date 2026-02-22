import React from "react";
import Terminal from "react-console-emulator";
import "./Cli.scss";
import MacWindow from "../MacWindow/MacWindow";

const Cli = ({ windowName, setWindowState, activeWindow, setActiveWindow }) => {
    const commands = {
        about: {
            description: "About me",
            usage: "about",
            fn: () =>
                `Hi, I'm Pravin Mandal 👋
A 3rd-year AI & Data Science student with a strong focus on
Data Structures & Algorithms and problem solving.

I enjoy breaking problems down and writing clean, optimized code.`,
        },

        skills: {
            description: "List technical skills",
            usage: "skills",
            fn: () =>
                `Programming:
  - C++ (DSA, STL)
  - JavaScript

Frontend:
  - HTML, CSS (Responsive Design)
  - JavaScript (DOM Manipulation)
  - React (Component-based UI)

CS Fundamentals:
  - Data Structures & Algorithms
  - OOP Basics
  - Operating Systems (Basics)

Tools:
  - Git, GitHub, VS Code`,
        },

        dsa: {
            description: "DSA & problem-solving stats",
            usage: "dsa",
            fn: () =>
                `Solved 250+ DSA problems on LeetCode & GFG.

Key Topics:
  - Arrays, Stacks, Queues
  - Linked Lists, Heaps
  - Trees, Graphs
  - Recursion & Basics of DP

Primary Language: C++`,
        },

        projects: {
            description: "View projects",
            usage: "projects",
            fn: () =>
                `Projects:
1. DVSY – React Frontend Website
   - Component-based UI using React

2. Virtual Piano
   - HTML, CSS, JS
   - DOM events & audio handling

3. Responsive Landing Pages
   - Multiple UI-focused web pages

All projects are deployed on GitHub Pages / Vercel.`,
        },

        achievements: {
            description: "Competitions & achievements",
            usage: "achievements",
            fn: () =>
                `Achievements:
- 1st Place – Debugging Competition (College Level)
- 2nd Place – Coding (DSA) Competition
- Smart India Hackathon (Internal Selection)
  - 2024 & 2025`,
        },

        contact: {
            description: "Contact information",
            usage: "contact",
            fn: () =>
                `Email: pravinmandalp45@gmail.com
GitHub: github.com/PravinMandal
Location: India`,
        },

        github: {
            description: "Open GitHub profile",
            usage: "github",
            fn: () => {
                window.open("https://github.com/PravinMandal", "_blank");
                return "Opening GitHub profile...";
            },
        },

        echo: {
            description: "Echo a passed string",
            usage: "echo <text>",
            fn: (...args) => args.join(" "),
        },
    };

    const welcomeMessage = `
╔══════════════════════════════════════════╗
║     Pravin Mandal • Portfolio CLI        ║
╚══════════════════════════════════════════╝

Welcome 👋
Explore my profile using terminal commands.

Try:
  about        → Who I am
  skills       → Technical skills
  dsa          → Problem-solving stats
  projects     → Things I've built
  achievements → Competitions & hackathons
  contact      → Get in touch

Type 'help' to see all commands.
Happy exploring 🚀
`;

    return (
        <MacWindow windowName={windowName} setWindowState={setWindowState} activeWindow={activeWindow} setActiveWindow={setActiveWindow} x={700} y={60}>
            <div className="cli-window">
                <Terminal
                    commands={commands}
                    welcomeMessage={welcomeMessage}
                    promptLabel={"pravin@portfolio:~$"}
                    promptLabelStyle={{ color: "#4ade80" }}
                />
            </div>
        </MacWindow>
    );
};

export default Cli;
