// BackHomeButton.jsx
import React from 'react'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import HomeIcon from '../assets/images/icone_white.png' // altere o caminho conforme sua estrutura

const BackHomeButton = ({ position = 'bottom' }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/') // redireciona para a página inicial
  }

  const style = {
    position: 'fixed',
    right: '20px',
    [position]: '20px', // pode ser 'top' ou 'bottom'
    backgroundColor: '#0d6efd',
    color: '#fff',
    border: 'none',
    borderRadius: '50%',
    width: '60px',
    height: '60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
    cursor: 'pointer',
    transition: 'transform 0.2s ease',
    zIndex: 9999,
  }

  const handleMouseEnter = (e) => (e.currentTarget.style.transform = 'scale(1.1)')
  const handleMouseLeave = (e) => (e.currentTarget.style.transform = 'scale(1)')

  return (
    <button
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={style}
      title="Voltar para a página inicial"
    >
      <img src={HomeIcon} alt="Home" style={{ width: '28px', height: '28px' }} />
    </button>
  )
}

BackHomeButton.propTypes = {
  position: PropTypes.oneOf(['top', 'bottom']),
}

export default BackHomeButton
