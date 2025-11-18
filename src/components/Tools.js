import React from "react";
import "./Tools.css";

const skills = [
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },

];

const SkillFlow = () => {
  return (
    <section className="skills-section">
       <div className="tools-header">
         <h2>My Creative Toolkit</h2>
     <p>Tools I use to bring <span className="highlight">ideas</span> to life.</p>
       </div>

      <div className="scroll-wrapper">
        <div className="scroll-track">
          {[...skills, ...skills].map((skill, index) => (
            <div className="skill-item" key={index}>
              <img src={skill.icon} alt={skill.name} className="skill-icon" />
              
            </div>
          ))}
        </div>
      </div>

      <p className="note">Each tool plays a role — together they shape my craft.</p>
    </section>
  );
};

export default SkillFlow;




// import React from "react";
// import "./Tools.css";

// const toolsData = [
//   { name: "React", icon: "/icons/react.svg" },
//   { name: "Node.js", icon: "/icons/nodejs.svg" },
//   { name: "Git", icon: "/icons/git.svg" },
//   { name: "Next.js", icon: "/icons/nextjs.svg" },
//   { name: "Tailwind", icon: "/icons/tailwind.svg" },
//   { name: "TypeScript", icon: "/icons/typescript.svg" },
//   { name: "Figma", icon: "/icons/figma.svg" },
//   { name: "Miro", icon: "/icons/miro.svg" },
// ];

// const Tools = () => {
//   // duplicate icons to make infinite loop effect
//   const repeatedTools = [...toolsData, ...toolsData];

//   return (
//     <section className="tools-section" id="tools">
//       <div className="tools-header">
//         <h2>My Creative Toolkit</h2>
//     <p>Tools I use to bring <span className="highlight">ideas</span> to life.</p>
//       </div>

//       <div className="scroll-container">
//         <div className="scroll-content">
//           {repeatedTools.map((tool, index) => (
//             <div className="tool" key={index}>
//               <img src={tool.icon} alt={tool.name} />
//               <p>{tool.name}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//     <p className="note">Each tool plays a role — together they shape my craft.</p>
//     </section>
//   );
// };

// export default Tools;
