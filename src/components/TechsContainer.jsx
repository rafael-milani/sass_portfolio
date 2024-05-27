import { DiCss3, DiGit, DiHtml5, DiJava, DiJsBadge, DiReact } from 'react-icons/di';
import '../styles/components/techscontainer.sass'

const techs = [
    { id: "html", name: "HTML5", description: "", icon: <DiHtml5 /> },
    { id: "css", name: "CSS3", description: "", icon: <DiCss3 /> },
    { id: "js", name: "JavaScript", description: "", icon: <DiJsBadge /> },
    { id: "react", name: "React", description: "", icon: <DiReact /> },
    { id: "git", name: "Git", description: "", icon: <DiGit /> },
    { id: "java", name: "Java", description: "", icon: <DiJava /> },

];

const TechsContainer = ()=>{
    return (
        <section className="techs-container">
            <h2>Tecnologias</h2>
            <div className="techs-grid">
                {techs.map((tech) => (
                    <div className="tech-card" id={tech.id} key={tech.id}>
                        {tech.icon}
                        <div className='tech-info'>
                            <h3>{tech.name}</h3>
                            <p>{techs.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default TechsContainer