import React from 'react'
import { Link } from 'react-router-dom'
import { CContainer, CCard, CCardBody, CCardHeader, CRow, CCol } from '@coreui/react'
import { LifeBuoy, MessageCircle, Mail } from 'lucide-react'
import BackHomeButton from '../../components/BackHomeButton'

const Help = () => {
  const cardStyle = {
    backgroundColor: '#f9fafb',
    borderRadius: '16px',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
    border: 'none',
    fontFamily: "'Inter', sans-serif",
  }

  const pageStyle = {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #4b88e2, #051936)',
    padding: '2rem 0',
    color: 'white',
    fontFamily: "'Inter', sans-serif",
  }

  const introStyle = {
    color: '#334155',
    fontSize: '1.1rem',
    lineHeight: 1.8,
    marginBottom: '2rem',
    fontWeight: 400,
  }

  const highlightText = {
    color: '#3b82f6',
    fontWeight: 600,
  }

  const sectionStyle = {
    backgroundColor: '#f1f5f9',
    borderRadius: '12px',
    padding: '1.25rem 1.5rem',
    marginBottom: '1rem',
    transition: 'all 0.3s ease',
    cursor: 'default',
    fontFamily: "'Inter', sans-serif",
  }

  const sectionTitleStyle = {
    color: '#1e293b',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontWeight: 700,
    marginBottom: '0.75rem',
    fontSize: '1.1rem',
  }

  const sectionTextStyle = {
    color: '#334155',
    lineHeight: 1.75,
    fontSize: '0.98rem',
    fontWeight: 400,
  }

  const linkStyle = {
    color: '#3b82f6',
    textDecoration: 'none',
    fontWeight: 500,
  }

  return (
    <div style={pageStyle}>
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={12} lg={10}>
            <CCard style={cardStyle}>
              <CCardHeader className="card-Header-Style">
                <LifeBuoy size={28} className="me-2 mb-1" />
                Central de Ajuda
              </CCardHeader>

              <CRow className="justify-content-center text-center mt-3">
                <CCol md={10}>
                  <p style={introStyle}>
                    Encontre respostas, suporte técnico e envie sugestões para melhorar sua
                    experiência com a <strong style={highlightText}>Expert BI Solutions</strong>.
                  </p>
                </CCol>
              </CRow>

              <CCardBody className="p-4">
                <section style={sectionStyle}>
                  <h6 style={sectionTitleStyle}>
                    <MessageCircle size={22} />
                    Suporte Técnico
                  </h6>
                  <p style={sectionTextStyle}>
                    Está enfrentando algum problema técnico com nossos sistemas? Fale com nossa
                    equipe de suporte pelo e-mail <strong>suporte@exbisolutions.com</strong> ou pelo
                    WhatsApp indicado no rodapé do site. Estamos prontos para ajudar!
                  </p>
                </section>

                <section style={sectionStyle}>
                  <h6 style={sectionTitleStyle}>
                    <Mail size={22} />
                    Dúvidas Frequentes
                  </h6>
                  <p style={sectionTextStyle}>
                    Antes de abrir um chamado, confira nossa seção de{' '}
                    <Link to="/faq" style={linkStyle}>
                      Perguntas Frequentes (FAQ)
                    </Link>{' '}
                    — talvez a resposta que você procura já esteja lá!
                  </p>
                </section>

                <section style={sectionStyle}>
                  <h6 style={sectionTitleStyle}>
                    <Mail size={22} />
                    Sugestões e Feedback
                  </h6>
                  <p style={sectionTextStyle}>
                    Sua opinião é essencial para evoluirmos. Envie sugestões para{' '}
                    <strong>feedback@exbisolutions.com</strong> e ajude-nos a aprimorar nossos
                    produtos e serviços.
                  </p>
                </section>

                <div className="text-center mt-4">
                  <BackHomeButton />
                </div>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Help
