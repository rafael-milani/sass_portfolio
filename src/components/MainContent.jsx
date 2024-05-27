import AboutContainer from './AboutContainer'
import TechsContainer from './TechsContainer'
import ProjectsContainer from './ProjectsContainer'

import '../styles/components/maincontent.sass'

const MainContent = ()=>{
    return (
        <main id='main-content'>
            <AboutContainer/>
            <TechsContainer/>
            <ProjectsContainer/>
        </main>
    )
}

export default MainContent