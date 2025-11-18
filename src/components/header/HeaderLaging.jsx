import React, { useState } from 'react'
import { CButton, CImage } from '@coreui/react'
import PropTypes from 'prop-types'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from './../../assets/images/logo_transparente.png'
import FaleComButton from '../../components/buttons/FaleComButton'

const HeaderLanding = ({ onOpenFaleComModal = () => {} }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const linkStyle = {
    fontFamily: 'Roboto, sans-serif',
    color: '#f5f5f5',
    fontWeight: '600',
    textDecoration: 'none',
  }

  return (
    <header
      className="landing-header d-flex justify-content-between align-items-center shadow-sm px-3"
      style={{
        minHeight: '70px',
        position: 'fixed',
        width: '100%',
        background: 'linear-gradient(135deg, #4b88e2 0%, #051936 100%)',
        top: 0,
        zIndex: 1000,
        borderBottom: 'none',
      }}
    >
      {/* LOGO */}
      <div
        className="logo-box d-flex align-items-center justify-content-center shadow-sm"
        style={{
          //backgroundColor: '#EAEAEA',
          borderRadius: '0 6px 6px 0',
          padding: '5px 10px',
          height: '80px',
          minWidth: '200px',
        }}
      >
        <CImage
          fluid
          src={logo}
          alt="Expert BI Solutions"
          style={{
            maxHeight: '60px',
            objectFit: 'contain',
          }}
        />
      </div>

      {/* BOTÃO HAMBÚRGUER (visível apenas em telas pequenas) */}
      <div
        className="d-lg-none"
        onClick={() => setMenuOpen(!menuOpen)}
        style={{ cursor: 'pointer', color: '#fff', fontSize: '1.5rem' }}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* LINKS DE NAVEGAÇÃO */}
      <nav
        className={`nav-links d-flex align-items-center gap-3 me-4 ${
          menuOpen ? 'mobile-menu-open' : 'mobile-menu-closed'
        }`}
      >
        <a href="/" style={linkStyle}>
          Início
        </a>
        <a href="#/servicos" style={linkStyle}>
          Serviços
        </a>
        <a href="#/clientes" style={linkStyle}>
          Clientes
        </a>
        <a href="#/sobre-nos" style={linkStyle}>
          Sobre nós
        </a>
        <FaleComButton onOpenFaleComModal={onOpenFaleComModal} label="Fale com um especialista" />
      </nav>

      {/* ESTILOS RESPONSIVOS */}
      <style jsx>{`
        @media (max-width: 992px) {
          .nav-links {
            position: absolute;
            top: 80px;
            right: 0;
            width: 100%;
            flex-direction: column;
            align-items: center;
            background: linear-gradient(135deg, #4b88e2 0%, #051936 100%);
            transition: all 0.3s ease;
            padding: 20px 0;
          }
          .mobile-menu-closed {
            display: none;
            opacity: 0;
          }
          .mobile-menu-open {
            display: flex;
            opacity: 1;
          }
        }
      `}</style>
    </header>
  )
}

HeaderLanding.propTypes = {
  onOpenFaleComModal: PropTypes.func,
}

export default HeaderLanding
