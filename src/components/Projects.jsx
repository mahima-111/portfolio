import { projects } from "../utils/projectData";
import { HiLink } from "react-icons/hi2";
import { BsGithub } from "react-icons/bs";
const Projects = () => {
return (
<section id="projects" className="flex justify-center pt-32" >
<div className="w-[80vw] md:w-[85vw] lg:w-[60vw] flex flex-col gap-4 items-center">
    <h1 className="text-4xl lg:text-5xl font-medium mb-8">My Projects</h1>
    <div>
    {projects.map((elem,index)=>{
    const {id,name,description,techStack,github,liveLink,img}=elem;
    return <div key={id} className={(index%2===0)?"bg-blue-950/50 rounded-lg py-8 flex justify-between items-center gap-8 mb-8 border border-white flex-col-reverse md:flex-row":"bg-blue-950/50 rounded-lg py-8 flex flex-col-reverse md:flex-row-reverse justify-between  items-center gap-8 mb-8 border border-white"}>
        <div className={(index%2===0)?"flex flex-col px-6 md:pr-0 md:pl-8 gap-4":"flex flex-col px-6 md:pl-0 md:pr-8 gap-4"}>
            <h2 className="text-2xl lg:text-3xl font-medium">{name}</h2>
            <div className="flex gap-4">
                <a href={liveLink}><HiLink size={25}/></a>
                <a href={github}><BsGithub size={25}/></a>
            </div>
            <p className="text-lg md:text-md lg:text-lg text-gray-400">{description}</p>
            <ul className="flex flex-wrap gap-2">{techStack.map((tech,index)=>{
                return <li key={index} className="rounded-full px-3 py-1 bg-gray-900 ">{tech}</li>
            })}</ul>
        </div>
        <div>
            <img className={(index%2===0?"rounded-lg px-4 md:px-0 md:rounded-l-lg":"px-4 md:px-0 rounded-lg md:rounded-r-lg")} src={img} />
        </div>
    </div>
    })}
    </div>
</div>
</section>
)
}

export default Projects