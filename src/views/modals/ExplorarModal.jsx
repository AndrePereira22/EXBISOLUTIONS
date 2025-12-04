import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CModal, CModalHeader, CModalTitle, CModalBody, CModalFooter, CButton } from '@coreui/react'
import DadosPorRamo from '../../components/CategoriasPorRamo'

const ExplorarModal = ({ visible, setVisible }) => {
  const [ramo, setRamo] = useState('')
  const [categoria, setCategoria] = useState('')
  const [subcategoria, setSubcategoria] = useState('')
  const navigate = useNavigate()

  const { categoriasPorRamo } = DadosPorRamo

  const handleConfirm = () => {
    if (!ramo) return alert('Selecione o tipo de negócio!')
    if (Object.keys(categoriasPorRamo[ramo] || {}).length > 0 && !categoria)
      return alert('Selecione uma categoria!')
    if (categoriasPorRamo[ramo]?.[categoria]?.length > 0 && !subcategoria)
      return alert('Selecione uma subcategoria!')

    setVisible(false)
    navigate('/solucoes', { state: { ramo, categoria, subcategoria } })
  }

  return (
    <CModal
      alignment="center"
      visible={visible}
      onClose={() => setVisible(false)}
      size="lg"
      backdrop="static"
    >
      <CModalHeader
        className="border-0 pb-0 text-white"
        style={{
          background: 'linear-gradient(135deg, #4b88e2, #051936)',
          color: 'white',
          borderTopLeftRadius: '10px',
          borderTopRightRadius: '10px',
          display: 'flex',
          alignItems: 'center', // 👈 Alinha verticalmente
        }}
      >
        <CModalTitle
          className="text-white mb-2"
          style={{
            fontWeight: 700,
            fontFamily: 'Inter, sans-serif',
            fontSize: '1.5rem',
            color: 'white',
          }}
        >
          Descubra soluções personalizadas
        </CModalTitle>
      </CModalHeader>

      <CModalBody
        className="pt-4 px-4"
        style={{ fontFamily: 'Poppins, sans-serif', color: '#333' }}
      >
        <p style={{ fontSize: '1rem', color: '#555' }}>
          Escolha o tipo de negócio e explore automações e métricas sob medida para a sua empresa.
        </p>

        {/* Ramo */}
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
              setSubcategoria('')
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
            {Object.keys(categoriasPorRamo).map((ramoKey) => (
              <option key={ramoKey} value={ramoKey}>
                {ramoKey.charAt(0).toUpperCase() + ramoKey.slice(1).replace(/([A-Z])/g, ' $1')}
              </option>
            ))}
          </select>
        </div>

        {/* Categoria */}
        {ramo && categoriasPorRamo[ramo] && (
          <div className="mb-4">
            <label className="form-label fw-semibold" style={{ color: '#222' }}>
              Categoria
            </label>
            <select
              className="form-select"
              value={categoria}
              onChange={(e) => {
                setCategoria(e.target.value)
                setSubcategoria('')
              }}
              style={{
                borderRadius: '8px',
                borderColor: '#ccc',
                transition: 'all 0.3s ease',
              }}
            >
              <option value="">Selecione...</option>
              {Object.keys(categoriasPorRamo[ramo]).map((cat, index) => (
                <option key={index} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Subcategoria */}
        {categoria && categoriasPorRamo[ramo]?.[categoria] && (
          <div className="mb-4">
            <label className="form-label fw-semibold" style={{ color: '#222' }}>
              Subcategoria
            </label>
            <select
              className="form-select"
              value={subcategoria}
              onChange={(e) => setSubcategoria(e.target.value)}
              style={{
                borderRadius: '8px',
                borderColor: '#ccc',
                transition: 'all 0.3s ease',
              }}
            >
              <option value="">Selecione...</option>
              {categoriasPorRamo[ramo][categoria].map((sub, index) => (
                <option key={index} value={sub.toLowerCase()}>
                  {sub}
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
          }}
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
        >
          Ver recomendações
        </CButton>
      </CModalFooter>
    </CModal>
  )
}

export default ExplorarModal
