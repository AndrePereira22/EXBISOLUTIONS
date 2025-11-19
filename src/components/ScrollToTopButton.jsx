// ScrollToTopButton.jsx
import React, { useEffect, useState } from 'react'
import UpIcon from '../assets/images/icone_white.png' // altere o caminho conforme sua estrutura

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false)

  // Mostra o botão apenas quando a rolagem passa de certo ponto
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    }
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const style = {
    position: 'fixed',
    right: '40px',
    bottom: '20px',
    backgroundColor: '#0d6efd',
    color: '#fff',
    border: 'none',
    borderRadius: '50%',
    width: '60px',
    height: '60px',
    display: visible ? 'flex' : 'none',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
    cursor: 'pointer',
    transition: 'transform 0.2s ease, opacity 0.3s ease',
    zIndex: 9999,
  }

  const handleMouseEnter = (e) => (e.currentTarget.style.transform = 'scale(1.1)')
  const handleMouseLeave = (e) => (e.currentTarget.style.transform = 'scale(1)')

  return (
    <button
      onClick={scrollToTop}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={style}
      title="Voltar ao topo"
    >
      <img src={UpIcon} alt="Voltar ao topo" style={{ width: '26px', height: '26px' }} />
    </button>
  )
}

export default ScrollToTopButton
