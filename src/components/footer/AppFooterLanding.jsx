import React from 'react'
import { CContainer, CRow, CCol, CFooter, CLink, CButton } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilPhone, cilEnvelopeClosed, cilGlobeAlt } from '@coreui/icons'

const AppFooter = () => {
  return (
    <CFooter style={{ 
       background: 'linear-gradient(135deg, #1c5dbeff 0%, #051936ff 100%)',
      
    borderTop: 'none' }} className="text-white pt-5">
      <CContainer>
        <CRow>
          {/* Coluna 1 - Descrição */}
          <CCol md={3} className="text-start mb-4">
            <h6 className="text-uppercase fw-bold">EXPERT BI SOLUTIONS</h6>
            <p className="text-white-50 mt-3">
              Sua parceira em inteligência empresarial. Criamos soluções personalizadas de BI que
              conectam dados, processos e pessoas, elevando a performance do seu negócio com
              decisões baseadas em evidências.
            </p>
          </CCol>

          {/* Coluna 2 - Páginas */}
          <CCol md={3} className="text-start mb-4">
            <h6 className="text-uppercase fw-bold">INFORMAÇÕES LEGAIS</h6>
            <p className="mt-3">
              <CLink href="#/terms" className="text-white-50 text-decoration-none">
                Termos de Uso
              </CLink>
            </p>
            <p>
              <CLink href="#/privacy" className="text-white-50 text-decoration-none">
                Políticas de Privacidade
              </CLink>
            </p>
            <p className="text-white-50 mb-0">CNPJ: 45.476.234/0001-48</p>
          </CCol>

          {/* Coluna 3 - Recursos */}
          <CCol md={3} className="text-start mb-4">
            <h6 className="text-uppercase fw-bold">RECURSOS</h6>
            <p className="mt-3">
              <CLink href="#/faq" className="text-white-50 text-decoration-none">
                FAQ
              </CLink>
            </p>
            <p>
              <CLink href="#/cases-sucesso" className="text-white-50 text-decoration-none">
                Cases de Sucesso
              </CLink>
            </p>
            <p>
              <CLink href="#/help" className="text-white-50 text-decoration-none">
                Help
              </CLink>
            </p>
          </CCol>

          {/* Coluna 4 - Contato */}
          <CCol md={3} className="text-start mb-4">
            <h6 className="text-uppercase fw-bold">CONTATO</h6>
            <div className="d-flex align-items-center text-white-50 mb-2">
              <CIcon icon={cilPhone} className="me-2" />
              <span className="text-info mt-2">(87) 9 9623-0023</span>
            </div>
            <div className="d-flex align-items-center text-white-50 mb-2">
              <CIcon icon={cilEnvelopeClosed} className="me-2" />
              <span className="text-info">contato@exbisolutions.com</span>
            </div>
            <div className="d-flex align-items-center text-white-50">
              <CIcon icon={cilGlobeAlt} className="me-2" />
              <span className="text-info">www.exbisolutions.com</span>
            </div>
          </CCol>
        </CRow>

        <hr className="border-light" />

        <CRow className="justify-content-between align-items-center pb-3">
          <CCol md={6} className="text-start">
            <small className="text-white-50">
              © {new Date().getFullYear()} EXPERT BI SOLUTIONS. Todos os direitos reservados.
            </small>
          </CCol>
          <CCol md={6} className="text-end">
            <CButton
              style={{ color: 'white' }}
              size="sm"
              variant="outline"
              className="text-dark rounded-pill"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Voltar ao topo ↑
            </CButton>
          </CCol>
        </CRow>
      </CContainer>
    </CFooter>
  )
}

export default React.memo(AppFooter)
