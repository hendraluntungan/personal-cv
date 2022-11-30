import React from 'react';
import Zoom from 'react-reveal/Zoom';


const Navigation = () => {
  return (

    <Zoom>
    <div className='container'>
        <header className="d-print-none navbar-light">
            <div className="container text-center text-lg-left">
            <div className="py-3 clearfix">
                <h1 className="site-title mb-0">MY CV</h1>
                <div className="site-nav">
                <nav role="navigation">
                    <ul className="nav justify-content-center">
                    <li className="nav-item"><a className="nav-link" href="https://wa.me/6285240892099" title="Whatsapp"><i className="fab fa-whatsapp" /><span className="menu-title sr-only">Whatsapp</span></a>
                    </li>
                    <li className="nav-item"><a className="nav-link" href="https://m.facebook.com/hendra.luntungan.35?eav=AfZEAsJuCiaqfwebKzoqTL31Ssh4YSVoXF4YJkVI03v1vbplJBet6BvEpjizzQ1OB6Y&paipv=0" title="Facebook"><i className="fab fa-facebook" /><span className="menu-title sr-only">Facebook</span></a>
                    </li>
                    <li className="nav-item"><a className="nav-link" href="https://www.instagram.com/luntunganuh/" title="Instagram"><i className="fab fa-instagram" /><span className="menu-title sr-only">Instagram</span></a>
                    </li>
                    <li className="nav-item"><a className="nav-link" href="https://github.com/hendraluntungan" title="Github"><i className="fab fa-github" /><span className="menu-title sr-only">Github</span></a>
                    </li>
                    </ul>
                </nav>
                </div>
            </div>
            </div>
        </header>
    </div>
    </Zoom>


  );
}

export default Navigation;