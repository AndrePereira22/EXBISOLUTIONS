import React from 'react'
import { CButton,CImage } from '@coreui/react'
import logo from './../../assets/images/logo_transparente.png'

const HeaderLanding = () => {
  return (
    <header
      className="landing-header d-flex justify-content-between align-items-center shadow-sm"
      style={{
        minHeight: '80px',
        padding: '10px 5%',
        position: 'fixed',
        width: '100%',
        background: 'linear-gradient(135deg, #4b88e2ff 0%, #051936ff 100%)',
        top: 0,
        zIndex: 1000,
        borderBottom: 'none',
      }}
    >
      <div className="logo d-flex align-items-center">
                    <CImage
                      rounded
                      fluid
                      src={logo}
                      alt="Equipe Exbi Solutions"
                      className="shadow-lg bg-white p-1 rounded-4"
                      style={{ maxWidth: '180px' }}
                    />
      </div>

      <nav className="nav-links d-flex align-items-center gap-3">
        <a
          href="/"
          style={{
            fontFamily: 'Roboto, sans-serif',
            color: '#f5f5f5',
            fontWeight: '600',
            textDecoration: 'none',
          }}
        >
          Início
        </a>
        <a
          href="#/servicos"
          style={{
            fontFamily: 'Roboto, sans-serif',
            color: '#f5f5f5',
            fontWeight: '600',
            textDecoration: 'none',
          }}
        >
          Serviços
        </a>
        <a
          href="#/sobre-nos"
          style={{
            fontFamily: 'Roboto, sans-serif',
            color: '#f5f5f5',
            fontWeight: '600',
            textDecoration: 'none',
          }}
        >
          Sobre nós
        </a>
        <a
          href="#/clientes"
          style={{
            fontFamily: 'Roboto, sans-serif',
            color: '#f5f5f5',
            fontWeight: '600',
            textDecoration: 'none',
          }}
        >
          Clientes
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
          onMouseEnter={(e) => (e.target.style.backgroundColor = '#0056b3')}
          onMouseLeave={(e) => (e.target.style.backgroundColor = '#007bff')}
        >
          Fale com um especialista
        </CButton>
      </nav>
    </header>
  )
}

export default HeaderLanding
