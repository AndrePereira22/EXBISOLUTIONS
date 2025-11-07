import React, { useState } from 'react'
import {
  CButton,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CForm,
  CFormInput,
  CFormTextarea,
} from '@coreui/react'
import { FaWhatsapp } from 'react-icons/fa'

const FaleComEspecialistaModal = ({ visible, setVisible }) => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form enviado:', formData)
    setVisible(false)
  }

  return (
    <>
      {/* Modal principal */}
      <CModal
        className="text-light"
        visible={visible}
        onClose={() => setVisible(false)}
        alignment="center"
        size="lg"
        backdrop="static"
      >
        <CModalHeader
          style={{
            background: '#007bff', // Azul info
            color: 'white',
          }}
        >
          <CModalTitle className="text-light">Fale com um Especialista</CModalTitle>
        </CModalHeader>

        <CModalBody className="p-4">
          <h4 className="text-secondary">
            Estamos prontos para ajudar! Escolha uma das opções abaixo para entrar em contato com a
            nossa equipe.
          </h4>

          {/* Botão WhatsApp */}
          <div className="d-flex justify-content-center mb-4">
            <CButton
              className="text-light"
              color="success"
              size="lg"
              href="https://wa.me/5587996230023?text=Olá!%20Gostaria%20de%20falar%20com%20um%20especialista%20da%20ExBi%20Solutions."
              target="_blank"
              style={{
                borderRadius: '50px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                fontWeight: '600',
              }}
            >
              <FaWhatsapp size={22} /> Falar pelo WhatsApp
            </CButton>
          </div>

          <hr />

          {/* Formulário rápido */}
          <h6 className="fw-bold mb-3 text-primary">Ou envie uma mensagem:</h6>
          <CForm onSubmit={handleSubmit}>
            <CFormInput
              type="text"
              name="nome"
              label="Nome"
              value={formData.nome}
              onChange={handleChange}
              required
              className="mb-3"
            />
            <CFormInput
              type="email"
              name="email"
              label="E-mail"
              value={formData.email}
              onChange={handleChange}
              required
              className="mb-3"
            />
            <CFormTextarea
              name="mensagem"
              label="Mensagem"
              rows="4"
              value={formData.mensagem}
              onChange={handleChange}
              required
            />
            <CButton
              color="primary"
              type="submit"
              className="mt-3"
              style={{
                background: 'linear-gradient(135deg, #007bff 0%, #051936ff 100%)',
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
            >
              Enviar Mensagem
            </CButton>
          </CForm>
        </CModalBody>

        <CModalFooter>
          <CButton color="secondary" onClick={() => setVisible(false)}>
            Fechar
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  )
}

export default FaleComEspecialistaModal
