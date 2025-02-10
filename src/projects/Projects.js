import React, { Component } from "react";
//import ProjectsMenu from "./ProjectsMenu";
import InfiniteMenu from '../Components/InfiniteMenu/InfiniteMenu'
import projectOne from "../assets/billboard-2.png";
import projectTwo from "../assets/gold-bond2.png";
import projectThree from "../assets/retro-ups2.png";
import projectFour from "../assets/G-web-design.png";
import projectFive from "../assets/claro-ui2.png";
import projectSix from "../assets/chat-mockup2.png";


const items = [
  {
    image: projectOne,
    link: 'https://portfolio-gabriel-chavez-projects.netlify.app/project5.html',
    title: 'Ashoka NGO',
    description: "Led a marketing campaign to boost community engagement."   
  },
  {
    image: projectTwo,
    link: 'https://portfolio-gabriel-chavez-projects.netlify.app/project2.html',
    title: 'Gold Bond',
    description: 'Spearheaded the rebranding of Molson Canadian and Gold Bond?'
  },
  {
    image: projectThree,
    link: 'https://portfolio-gabriel-chavez-projects.netlify.app/project3.html',
    title: 'Retro Style UPS',
    description: 'Designed a retro-inspired web interface for United Parcel Service'
  },
  {
    image: projectFour,
    link: 'https://portfolio-gabriel-chavez-projects.netlify.app/project1.html',
    title: 'Glassware',
    description: 'Designed a canadian store selling handcrafted glassware by local artisans'
  },
  {
    image: projectFive,
    link: 'https://portfolio-gabriel-chavez-projects.netlify.app/project4.html',
    title: 'Claro App',
    description: 'Designed the user interface for a mobile application using Figma'
  },
  {
    image: projectSix,
    link: 'https://portfolio-gabriel-chavez-projects.netlify.app/project6.html',
    title: 'Instant Chat App',
    description: 'Developed a dynamic website using HTML, SASS, Vue.js, Express, and Node.js'
  }
];

export default class Projects extends Component {
  render() {
    return (
      <>
        <div class="image-menu" style={{ height: '100%', width: '100%' }}>
          <InfiniteMenu items={items}/>
        </div>
      </>
    );
  }
}


