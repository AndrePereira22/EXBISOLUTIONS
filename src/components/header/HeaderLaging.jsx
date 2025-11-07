import React from 'react'
import { CButton, CImage } from '@coreui/react'
import PropTypes from 'prop-types'
import logo from './../../assets/images/logo_transparente.png'

const HeaderLanding = ({ onOpenFaleComModal = () => {} }) => {
  const linkStyle = {
    fontFamily: 'Roboto, sans-serif',
    color: '#f5f5f5',
    fontWeight: '600',
    textDecoration: 'none',
  }

  return (
    <header
      className="landing-header d-flex justify-content-between align-items-center shadow-sm"
      style={{
        minHeight: '60px',
        position: 'fixed',
        width: '100%',
        background: 'linear-gradient(135deg, #4b88e2 0%, #051936 100%)',
        top: 0,
        zIndex: 1000,
        borderBottom: 'none',
        padding: 0, // remove o padding para encostar na borda
      }}
    >
      {/* LOGO DENTRO DO RETÂNGULO BRANCO, ENCAIXADO NA BORDA ESQUERDA */}
      <div
        className="logo-box d-flex align-items-center justify-content-center shadow-sm"
        style={{
          backgroundColor: '#fff',
          borderRadius: '0 6px 6px 0', // arredondar só o lado direito
          padding: '5px 10px',
          height: '80px',
          minWidth: '240px', // ajuste conforme o tamanho da logo
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

      {/* LINKS DE NAVEGAÇÃO */}
      <nav className="nav-links d-flex align-items-center gap-3 me-5">
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

        <CButton
          style={{
            backgroundColor: '#007bff',
            color: '#fff',
            fontWeight: '600',
            padding: '12px 22px',
            borderRadius: '12px',
            border: 'none',
            fontSize: '1rem',
            cursor: 'pointer',
            transition: '0.3s ease',
            fontFamily: 'Roboto, sans-serif',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#0056b3')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#007bff')}
          onClick={onOpenFaleComModal}
        >
          Fale com um especialista teste
        </CButton>
      </nav>
    </header>
  )
}

HeaderLanding.propTypes = {
  onOpenFaleComModal: PropTypes.func,
}

export default HeaderLanding
