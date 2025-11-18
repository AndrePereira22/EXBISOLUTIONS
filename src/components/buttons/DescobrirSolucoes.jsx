import React from 'react'
import { CButton } from '@coreui/react'
import PropTypes from 'prop-types'

const BtnDescobrirSolucoes = ({ label = 'Fale com um especialista', onClick }) => {
  const baseStyle = {
    borderRadius: '6px',
    fontWeight: 600,
    padding: '10px 30px',
    marginBottom: '3rem',
    backgroundColor: '#00E5FF',
    width: 'auto',
    border: 'none',
    color: '#000000ff',
    fontSize: 'clamp(0.9rem, 2vw, 1rem)',
    cursor: 'pointer',
    transition: '0.3s ease',
  }

  return (
    <CButton
      className="falecom-btn"
      style={baseStyle}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#00b8ccff')}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#00E5FF')}
      onClick={onClick} // ✅ dispara a função recebida
    >
      {label}
    </CButton>
  )
}

BtnDescobrirSolucoes.propTypes = {
  onClick: PropTypes.func.isRequired, // ✅ corrigido
  label: PropTypes.string,
}

export default BtnDescobrirSolucoes
