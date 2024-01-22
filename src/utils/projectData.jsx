import kanbanBoard from "../assets/kanban-board.png";
import imagify from "../assets/imagifyHub.png";
import foodie from "../assets/foodie.png";
import travel from "../assets/travelBuddy.png";
export const projects=[
    {
        id:1,
        name:"FlowCanvas",
        description:"A dynamic Kanban board application created by integrating the react-beautiful-dnd library thus enabling a seamless drag-and-drop feature.",
        techStack:["react","tailwind css","react-beautiful-dnd"],
        github:"https://github.com/mahima-111/FlowCanvas",
        liveLink:"https://kanban-board-mahima-111.vercel.app/",
        img: kanbanBoard,
    },
    {
        id:2,
        name:"ImagifyHub",
        description:"A dynamic image website that harnesses the power of the Unsplash API to curate extensive photo collections.",
        techStack:["react","tailwind css","api","axios"],
        github:"https://github.com/mahima-111/ImagifyHub",
        liveLink:"https://imagify-hub.vercel.app/",
        img: imagify,
    },
    {
        id:3,
        name:"Foodie",
        description:"A React-based Food Ordering App that seamlessly connects users to real-time restaurant data through Swiggy's Live API.",
        techStack:["react","redux","tailwind css","react-router-dom","swiggy-live-api"],
        github:"https://github.com/mahima-111/Foodie",
        liveLink:"https://foodie-mahima-111.vercel.app/",
        img: foodie,
    },
    {
        id:4,
        name:"TravelBuddy",
        description:"A responsive travel landing page created using React.",
        techStack:["react","tailwind css","react-router-hash-link"],
        github:"https://github.com/mahima-111/TravelBuddy",
        liveLink:"https://travel-buddy-mahima111.vercel.app/",
        img: travel,
    },
]