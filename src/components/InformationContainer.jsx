import { AiFillEnvironment, AiFillPhone, AiOutlineMail } from 'react-icons/ai'

import '../styles/components/informationcontainer.sass'

const InformationContainer = () => {
    return (
      <section id="information">
        <div className="info-card">
          <AiFillPhone id="phone-icon" />
          <div>
            <h3>Telefone</h3>
            <p>(19)98945-1212</p>
          </div>
        </div>
        <div className="info-card">
          <AiOutlineMail id="email-icon" />
          <div>
            <h3>E-mail</h3>
            <p>rafamilanimarangoni@gmail.com</p>
          </div>
        </div>
        <div className="info-card">
          <AiFillEnvironment id="pin-icon" />
          <div>
            <h3>Localização</h3>
            <p>Americana-SP</p>
          </div>
        </div>
      </section>
    );
  };

export default InformationContainer