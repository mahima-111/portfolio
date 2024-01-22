import {skills} from "../utils/skillData"; 
const Skills = () => {
return (
<section id="skills" className="flex justify-center pt-24">
<div className="flex flex-col gap-4 items-center w-[80vw] lg:w-[60vw]">
    <h1 className="text-4xl lg:text-5xl font-medium mb-8">My Skills</h1>
    <div className="flex flex-wrap justify-center gap-5 bg-blue-950/50 border border-white rounded-lg py-6 px-4">
    {skills.map(({id,name,icon})=>{
        return <div key={id} className="flex items-center text-xl lg:text-2xl font-light px-4 py-2 gap-2 border border-sky-300 rounded-md">
            <span>{icon}</span>
            <h4>{name}</h4>
        </div>
    })}
    </div>
</div>
</section>
)
}

export default Skills