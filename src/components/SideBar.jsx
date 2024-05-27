import Avatar from '../img/img-1.1.png'
import SocialNetworks from './SocialNetworks';
import InformationContainer from './InformationContainer';

import curriculo from '../img/Curriculo_Rafael_2024.pdf';

import '../styles/components/sidebar.sass'

const SideBar = () => {

    return (
    //aside = trabalhar com barras laterais fora do conteudo principal do site
     <aside id="sidebar">  
        <img src={Avatar} alt="Rafael Milani" />
        <p className="title">Desenvolvedor</p>
        <SocialNetworks/>
        <InformationContainer/>
        <a href={curriculo} download className='btn'>Download Curriculo</a>
    </aside>
    )
}

export default SideBar;