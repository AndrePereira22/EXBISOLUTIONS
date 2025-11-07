import React from 'react'
import { CContainer, CCard, CCardBody, CCardHeader, CRow, CCol, CButton } from '@coreui/react'
import { LifeBuoy, MessageCircle, Mail, ArrowLeft } from 'lucide-react'

const Help = () => {
  return (
                <div className=" min-vh-100 d-flex flex-column justify-content-center" style={{
        background: 'linear-gradient(135deg, #4b88e2ff 0%, #051936ff 100%)',
        color: 'white',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={12} lg={10}>
            <CCard
              style={{
                backgroundColor: '#fdfcffff',
                color: '#e2e8f0',
                border: '1px solid #334155',
                borderRadius: '16px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
              }}
            >
              <CCardHeader
                style={{
                  backgroundColor: '#777c86ff',
                  color: '#fff',
                  borderTopLeftRadius: '16px',
                  borderTopRightRadius: '16px',
                  textAlign: 'center',
                  fontSize: '1.2rem',
                  fontWeight: '600',
                }}
              >
                <LifeBuoy size={22} className="me-2 mb-1" />
                Central de Ajuda
              </CCardHeader>
                      <CRow className="justify-content-center text-center mt-2">
          <CCol md={10}>
            <p
              style={{
                color: '#fdfeffff',
                fontSize: '1.05rem',
                lineHeight: '1.6',
              }}
            >
              Encontre respostas, suporte técnico e envie sugestões para melhorar sua experiência
              com a <strong style={{ color: '#60a5fa' }}>Expert BI Solutions</strong>.
            </p>
          </CCol>
        </CRow>

              <CCardBody className="p-4">
                <section className="mb-4 text-start">
                  <h6
                    style={{
                      color: '#182cdfff',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                    }}
                  >
                    <MessageCircle size={22} />
                    Suporte Técnico
                  </h6>
                  <p style={{ color: '#e2e8f0', lineHeight: '1.6' }}>
                    Está enfrentando algum problema técnico com nossos sistemas? Fale com nossa
                    equipe de suporte pelo e-mail <strong>suporte@exbisolutions.com</strong> ou pelo
                    WhatsApp indicado no rodapé do site. Estamos prontos para ajudar!
                  </p>
                </section>

                <section className="mb-4 text-start">
                  <h6
                    style={{
                      color: '#182cdfff',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                    }}
                  >
                    <Mail size={22} />
                    Dúvidas Frequentes
                  </h6>
                  <p style={{ color: '#e2e8f0', lineHeight: '1.6' }}>
                    Antes de abrir um chamado, confira nossa seção de{' '}
                    <a
                      href="*/faq"
                      style={{
                        color: '#60a5fa',
                        textDecoration: 'none',
                        fontWeight: '500',
                      }}
                    >
                      Perguntas Frequentes (FAQ)
                    </a>{' '}
                    — talvez a resposta que você procura já esteja lá!
                  </p>
                </section>

                <section className="mb-4 text-start">
                  <h6
                    style={{
                      color: '#182cdfff',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                    }}
                  >
                    <Mail size={22} />
                    Sugestões e Feedback
                  </h6>
                  <p style={{ color: '#e2e8f0', lineHeight: '1.6' }}>
                    Sua opinião é essencial para evoluirmos. Envie sugestões para{' '}
                    <strong>feedback@exbisolutions.com</strong> e ajude-nos a aprimorar nossos
                    produtos e serviços.
                  </p>
                </section>

                <div className="text-center mt-4">
                  <CButton
                    color="primary"
                    href="/"
                    style={{
                      borderRadius: '8px',
                      padding: '10px 20px',
                      fontWeight: '600',
                    }}
                  >
                    <ArrowLeft size={16} className="me-2" />
                    Voltar
                  </CButton>
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
