import React from 'react'
import { CContainer, CRow, CCol, CFooter, CLink } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilPhone, cilEnvelopeClosed, cilGlobeAlt } from '@coreui/icons'
import ScrollToTopButton from '../ScrollToTopButton'

const AppFooter = () => {
  return (
    <CFooter
      style={{
        background: 'linear-gradient(135deg, #1c5dbeff 0%, #051936ff 100%)',
        borderTop: 'none',
      }}
      className="text-white pt-5"
    >
      <CContainer>
        <CRow>
          {/* Coluna 1 - Inovações */}
          <CCol md={3} className="text-start mb-4">
            <h6 className="text-uppercase fw-bold mb-3">DASHBOARDS</h6>

            <p className="mb-2">
              <CLink
                target="_blank"
                rel="noopener noreferrer"
                href="https://app.powerbi.com/view?r=eyJrIjoiNDA2NDEyZmYtMDg4YS00MDRlLWE5YTMtMjZjOTk0OTM5OGU2IiwidCI6ImM0MmViYmY5LTI0ZjQtNDU3MS1iNGE3LTA0NjJkNmM5YmM3ZSJ9"
                className="text-white-50 text-decoration-none"
              >
                Vendas & Receitas
              </CLink>
            </p>
            <p className="mb-2">
              <CLink
                target="_blank"
                rel="noopener noreferrer"
                href="https://app.powerbi.com/view?r=eyJrIjoiNDA2NDEyZmYtMDg4YS00MDRlLWE5YTMtMjZjOTk0OTM5OGU2IiwidCI6ImM0MmViYmY5LTI0ZjQtNDU3MS1iNGE3LTA0NjJkNmM5YmM3ZSJ9"
                className="text-white-50 text-decoration-none"
              >
                Operações & Produtividade
              </CLink>
            </p>
            <p className="mb-2">
              <CLink
                target="_blank"
                rel="noopener noreferrer"
                href="https://app.powerbi.com/view?r=eyJrIjoiNDA2NDEyZmYtMDg4YS00MDRlLWE5YTMtMjZjOTk0OTM5OGU2IiwidCI6ImM0MmViYmY5LTI0ZjQtNDU3MS1iNGE3LTA0NjJkNmM5YmM3ZSJ9"
                className="text-white-50 text-decoration-none"
              >
                Performance Digital & Marketing
              </CLink>
            </p>
            <p className="mb-2">
              <CLink
                target="_blank"
                rel="noopener noreferrer"
                href="https://app.powerbi.com/view?r=eyJrIjoiNDA2NDEyZmYtMDg4YS00MDRlLWE5YTMtMjZjOTk0OTM5OGU2IiwidCI6ImM0MmViYmY5LTI0ZjQtNDU3MS1iNGE3LTA0NjJkNmM5YmM3ZSJ9"
                className="text-white-50 text-decoration-none"
              >
                Avaliações & Satisfação do Cliente
              </CLink>
            </p>
          </CCol>

          {/* Coluna 2 - Informações legais */}
          <CCol md={3} className="text-start mb-4">
            <h6 className="text-uppercase fw-bold mb-3">INFORMAÇÕES LEGAIS</h6>
            <p className="mb-2">
              <CLink href="#/terms" className="text-white-50 text-decoration-none">
                Termos de Uso
              </CLink>
            </p>
            <p className="mb-2">
              <CLink href="#/privacy" className="text-white-50 text-decoration-none">
                Políticas de Privacidade
              </CLink>
            </p>
            <p className="text-white-50 mb-0">CNPJ: 45.476.234/0001-48</p>
          </CCol>

          {/* Coluna 3 - Recursos */}
          <CCol md={3} className="text-start mb-4">
            <h6 className="text-uppercase fw-bold mb-3">RECURSOS</h6>
            <p className="mb-2">
              <CLink href="#/faq" className="text-white-50 text-decoration-none">
                FAQ
              </CLink>
            </p>
            <p className="mb-2">
              <CLink href="#/cases-sucesso" className="text-white-50 text-decoration-none">
                Cases de Sucesso
              </CLink>
            </p>
            <p className="mb-0">
              <CLink href="#/help" className="text-white-50 text-decoration-none">
                Help
              </CLink>
            </p>
          </CCol>

          {/* Coluna 4 - Contato */}
          <CCol md={3} className="text-start mb-4">
            <h6 className="text-uppercase fw-bold mb-3">CONTATO</h6>
            <div className="d-flex align-items-center mb-3">
              <div
                style={{
                  backgroundColor: 'rgba(0, 255, 120, 0.1)',
                  borderRadius: '50%',
                  padding: '8px',
                  marginRight: '10px',
                }}
              >
                <CIcon icon={cilPhone} style={{ fontSize: '1.6rem' }} className="text-success" />
              </div>
              <CLink
                href="https://wa.me/5587996230023?text=Olá!%20Gostaria%20de%20falar%20com%20um%20especialista%20da%20ExBi%20Solutions."
                target="_blank"
                rel="noopener noreferrer"
                className="text-success fw-semibold text-decoration-none"
              >
                (87) 9 9623-0023
              </CLink>
            </div>

            <div className="d-flex align-items-center mb-3">
              <div
                style={{
                  backgroundColor: 'rgba(0, 255, 120, 0.1)',
                  borderRadius: '50%',
                  padding: '8px',
                  marginRight: '10px',
                }}
              >
                <CIcon
                  icon={cilEnvelopeClosed}
                  style={{ fontSize: '1.6rem' }}
                  className="text-success"
                />
              </div>
              <CLink
                href="mailto:contato@exbisolutions.com"
                className="text-success fw-semibold text-decoration-none"
              >
                contato@exbisolutions.com
              </CLink>
            </div>

            <div className="d-flex align-items-center">
              <div
                style={{
                  backgroundColor: 'rgba(0, 255, 120, 0.1)',
                  borderRadius: '50%',
                  padding: '8px',
                  marginRight: '10px',
                }}
              >
                <CIcon icon={cilGlobeAlt} style={{ fontSize: '1.6rem' }} className="text-success" />
              </div>
              <CLink
                href="https://www.facebook.com/profile.php?id=61583525792824"
                target="_blank"
                rel="noopener noreferrer"
                className="text-success fw-semibold text-decoration-none"
              >
                https://www.facebook.com
              </CLink>
            </div>
          </CCol>
        </CRow>

        <hr className="border-light" />

        <CRow className="justify-content-between align-items-center pb-3">
          <CCol md={6} className="text-start">
            <small className="text-white-50">
              © <strong className="text-white-50">EXPERT BI SOLUTIONS </strong>{' '}
              {new Date().getFullYear()}. Todos os direitos reservados.
            </small>
          </CCol>
          <CCol md={6} className="text-end">
            <ScrollToTopButton />
          </CCol>
        </CRow>
      </CContainer>
    </CFooter>
  )
}

export default React.memo(AppFooter)
