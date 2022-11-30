import React from 'react'

export const Footer = () => {
  return (
    <div className='container'>
        <footer className="pt-4 pb-4 text-muted text-center d-print-none">
            <div className="container">
            <div className="my-3">
                <div className="h4">Hendra Ucok Luntungan</div>
                <div className="footer-nav">
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
            <div className="text-small">
                <div className="mb-1">Final Project</div>
                <div>Front-End Web Developer - A</div>
            </div>
            </div>
        </footer>
    </div>
  )
}
