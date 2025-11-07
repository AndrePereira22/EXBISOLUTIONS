import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CModal, CModalHeader, CModalTitle, CModalBody, CModalFooter, CButton } from '@coreui/react'

const ExplorarModal = ({ visible, setVisible }) => {
  const [ramo, setRamo] = useState('')
  const [categoria, setCategoria] = useState('')
  const navigate = useNavigate()

  const categoriasPorRamo = {
    saude: ['Clínica', 'Farmácia', 'Hospital', 'Laboratório'],
    comercio: ['Loja física', 'E-commerce', 'Supermercado', 'Shopping'],
    industria: ['Fabricação', 'Distribuição', 'Manufatura'],
    servicos: ['Consultoria', 'Beleza e estética', 'Transporte', 'Contabilidade'],
    tecnologia: ['Software', 'Hardware', 'Startups', 'Suporte técnico'],
    educacao: ['Escola', 'Universidade', 'Cursos livres', 'Treinamentos corporativos'],
  }

  const handleConfirm = () => {
    if (!ramo) {
      alert('Selecione o ramo da empresa!')
      return
    }
    if (categoriasPorRamo[ramo]?.length > 0 && !categoria) {
      alert('Selecione uma categoria!')
      return
    }

    setVisible(false)
    navigate('/solucoes', { state: { ramo, categoria } })
  }

  return (
    <CModal
      alignment="center"
      visible={visible}
      onClose={() => setVisible(false)}
      size="lg"
      backdrop="static"
      className="explorar-modal"
    >
      <CModalHeader
        className="border-0 pb-0 bg-gradient"
        style={{
          background: 'linear-gradient(135deg, #4b88e2, #051936)',
          color: 'white',
          borderTopLeftRadius: '10px',
          borderTopRightRadius: '10px',
        }}
      >
        <CModalTitle
          style={{ fontWeight: 700, fontFamily: 'Inter, sans-serif', fontSize: '1.5rem' }}
        >
          Descubra soluções personalizadas
        </CModalTitle>
      </CModalHeader>

      <CModalBody
        className="pt-4 px-4"
        style={{ fontFamily: 'Poppins, sans-serif', color: '#333' }}
      >
        <p style={{ fontSize: '1rem', color: '#555' }}>
          Escolha o tipo de negócio e explore automações e métricas personalizadas.
        </p>

        {/* Campo Ramo */}
        <div className="mb-4 mt-3">
          <label className="form-label fw-semibold" style={{ color: '#222' }}>
            Tipo de negócio
          </label>
          <select
            className="form-select"
            value={ramo}
            onChange={(e) => {
              setRamo(e.target.value)
              setCategoria('')
            }}
            style={{
              borderRadius: '8px',
              borderColor: '#ccc',
              transition: 'all 0.3s ease',
            }}
            onFocus={(e) => (e.target.style.borderColor = '#4a63e7')}
            onBlur={(e) => (e.target.style.borderColor = '#ccc')}
          >
            <option value="">Selecione...</option>
            <option value="comercio">Comércio</option>
            <option value="industria">Indústria</option>
            <option value="servicos">Serviços</option>
            <option value="saude">Saúde</option>
            <option value="tecnologia">Tecnologia</option>
            <option value="educacao">Educação</option>
          </select>
        </div>

        {/* Campo Categoria */}
        {ramo && categoriasPorRamo[ramo] && (
          <div className="mb-4">
            <label className="form-label fw-semibold" style={{ color: '#222' }}>
              Categoria
            </label>
            <select
              className="form-select"
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
              style={{
                borderRadius: '8px',
                borderColor: '#ccc',
                transition: 'all 0.3s ease',
              }}
              onFocus={(e) => (e.target.style.borderColor = '#4a63e7')}
              onBlur={(e) => (e.target.style.borderColor = '#ccc')}
            >
              <option value="">Selecione...</option>
              {categoriasPorRamo[ramo].map((cat, index) => (
                <option key={index} value={cat.toLowerCase()}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
        )}
      </CModalBody>

      <CModalFooter
        className="border-0 d-flex justify-content-between px-4 pb-4"
        style={{
          backgroundColor: '#f8f9fc',
          borderBottomLeftRadius: '10px',
          borderBottomRightRadius: '10px',
        }}
      >
        <CButton
          color="secondary"
          variant="ghost"
          onClick={() => setVisible(false)}
          style={{
            borderRadius: '8px',
            fontWeight: 600,
            color: '#555',
            backgroundColor: 'white',
            border: '1px solid #ddd',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = '#f1f3f5')}
          onMouseLeave={(e) => (e.target.style.backgroundColor = 'white')}
        >
          Cancelar
        </CButton>

        <CButton
          color="primary"
          onClick={handleConfirm}
          style={{
            background: 'linear-gradient(135deg, #4b88e2, #051936)',
            border: 'none',
            borderRadius: '8px',
            fontWeight: 600,
            padding: '0.6rem 1.6rem',
            boxShadow: '0 3px 10px rgba(0,0,0,0.15)',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => (e.target.style.transform = 'translateY(-3px)')}
          onMouseLeave={(e) => (e.target.style.transform = 'translateY(0)')}
        >
          Ver recomendações
        </CButton>
      </CModalFooter>
    </CModal>
  )
}

export default ExplorarModal
