import React from 'react'
import { CButton } from '@coreui/react'
import PropTypes from 'prop-types'

const FaleComButton = ({ onOpenFaleComModal, label = 'Fale com um especialista' }) => {
  const baseStyle = {
    backgroundColor: '#00E5FF',
    color: '#000000ff',
    fontWeight: '600',
    padding: '12px 22px',
    borderRadius: '12px',
    border: 'none',
    fontSize: 'clamp(0.8rem, 2vw, 1rem)',
    cursor: 'pointer',
    transition: '0.3s ease',
    fontFamily: 'Roboto, sans-serif',
    whiteSpace: 'nowrap',
  }

  return (
    <CButton
      className="falecom-btn"
      style={baseStyle}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#00b8ccff')}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#00E5FF')}
      onClick={onOpenFaleComModal}
    >
      {label}
    </CButton>
  )
}

FaleComButton.propTypes = {
  onOpenFaleComModal: PropTypes.func.isRequired,
  label: PropTypes.string, // ✅ nova prop para o texto
}

export default FaleComButton

//Fale com um especialista
