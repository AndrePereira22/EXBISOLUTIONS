import React, { useState, useEffect } from 'react'
import {
  CButton,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CFormInput,
  CFormTextarea,
} from '@coreui/react'
import { FaWhatsapp } from 'react-icons/fa'
import { useForm, ValidationError } from '@formspree/react'

const FaleComEspecialistaModal = ({ visible, setVisible }) => {
  // useForm do Formspree: retorna [state, handleSubmit]
  const [state, handleSubmit] = useForm('xldarzap')

  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: '',
  })
  // controlamos explicitamente se mostramos o formulário (true) ou a tela de "obrigado" (false)
  const [showForm, setShowForm] = useState(true)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleClose = () => {
    // só fecha — você pediu para não precisar resetar nada ao fechar
    setVisible(false)
  }

  // Quando o modal for aberto, garantir que mostramos o formulário e limpar campos
  useEffect(() => {
    if (visible) {
      setShowForm(true) // força exibir formulário sempre que modal abrir
      setFormData({ nome: '', email: '', mensagem: '' }) // limpa inputs para nova sessão
    }
  }, [visible])

  // Quando Formspree reportar sucesso, ocultamos o formulário e mostramos agradecimento
  useEffect(() => {
    if (state.succeeded) {
      setShowForm(false)
      // opcional: se quiser limpar inputs ao enviar com sucesso, já feito na abertura, mas pode limpar aqui também:
      setFormData({ nome: '', email: '', mensagem: '' })
    }
  }, [state.succeeded])

  return (
    <CModal
      className="text-light"
      visible={visible}
      onClose={handleClose}
      alignment="center"
      size={!showForm && state.succeeded ? 'md' : 'lg'}
      backdrop="static"
    >
      {!showForm && state.succeeded ? (
        <>
          <CModalHeader>
            <CModalTitle>Mensagem enviada!</CModalTitle>
          </CModalHeader>
          <CModalBody className="text-center py-5">
            <h5 className="text-success fw-semibold">Obrigado por entrar em contato 🎉</h5>
            <p>Em breve um de nossos especialistas retornará o contato.</p>
            <CButton color="primary" onClick={handleClose}>
              Fechar
            </CButton>
          </CModalBody>
        </>
      ) : (
        <>
          <CModalHeader
            style={{
              background: 'linear-gradient(135deg, #007bff 0%, #0c397eff 100%)',
              color: 'white',
            }}
          >
            <CModalTitle className="text-light">Fale com um Especialista</CModalTitle>
          </CModalHeader>

          <CModalBody className="p-4">
            <h5 className="text-secondary">
              Estamos prontos para ajudar! Escolha uma das opções abaixo para entrar em contato com
              a nossa equipe.
            </h5>

            {/* Botão WhatsApp */}
            <div className="d-flex justify-content-center mb-4 mt-2">
              <CButton
                className="text-light mt-2"
                color="success"
                size="lg"
                href="https://wa.me/5587988613551?text=Olá!%20Gostaria%20de%20falar%20com%20um%20especialista%20da%20ExBi%20Solutions."
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

            <h6 className="fw-bold mb-3 text-primary">Ou envie uma mensagem:</h6>
            {/* note: handleSubmit é a função do Formspree */}
            <form onSubmit={handleSubmit}>
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
              <ValidationError prefix="Email" field="email" errors={state.errors} />

              <CFormTextarea
                name="mensagem"
                label="Mensagem"
                rows="4"
                value={formData.mensagem}
                onChange={handleChange}
                required
              />
              <ValidationError prefix="Mensagem" field="mensagem" errors={state.errors} />

              <CButton
                color="primary"
                type="submit"
                disabled={state.submitting}
                className="mt-3"
                style={{
                  background: '#007bff',
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
                {state.submitting ? 'Enviando...' : 'Enviar Mensagem'}
              </CButton>
            </form>
          </CModalBody>

          <CModalFooter>
            <CButton color="secondary" onClick={handleClose}>
              Fechar
            </CButton>
          </CModalFooter>
        </>
      )}
    </CModal>
  )
}

export default FaleComEspecialistaModal
