import React from 'react'
import { useNavigate } from 'react-router-dom'
import { CButton } from '@coreui/react'
import logo from './../../assets/images/logo_transparente.png'

const HeaderLanding = ({ buttonText = 'Saber mais', buttonUrl = '/login' }) => {
  const navigate = useNavigate()

  const handleNavigation = () => {
    navigate(buttonUrl)
  }

  return (
    <header
      className="landing-header d-flex justify-content-between align-items-center shadow-sm"
      style={{
        minHeight: '80px',
        padding: '10px 5%',
        position: 'fixed',
        width: '100%',
        backgroundColor: '#061551',
        top: 0,
        zIndex: 1000,
        borderBottom: 'none',
      }}
    >
      <div className="logo d-flex align-items-center">
        <img
          src={logo}
          alt="Logo Icon"
          className="logo-icon me-2"
          style={{ maxHeight: '50px', width: 'auto' }}
        />
      </div>

      <nav className="nav-links d-flex align-items-center gap-3">
        <a href="#features" style={{ color: '#f5f5f5', fontWeight: '600', textDecoration: 'none' }}>
          Início
        </a>
        <a href="#features" style={{ color: '#f5f5f5', fontWeight: '600', textDecoration: 'none' }}>
          Serviços
        </a>
        <a href="#features" style={{ color: '#f5f5f5', fontWeight: '600', textDecoration: 'none' }}>
          Sobre nós
        </a>
        <a href="#features" style={{ color: '#f5f5f5', fontWeight: '600', textDecoration: 'none' }}>
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
