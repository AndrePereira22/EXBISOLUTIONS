import React from 'react'
import { CContainer, CRow, CCol, CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter
      style={{ backgroundColor: '#061551', borderTop: 'none', borderBottom: 'border-light' }}
      className="text-white pt-5"
    >
      <CContainer>
        <CRow>
          <CCol md={3} className="text-start">
            <h6 className="text-uppercase fw-bold">EXPERT BI SOLUTIONS</h6>
            <p className="text-white-50">
              Sua parceira em inteligência empresarial. Criamos soluções personalizadas de BI que
              conectam dados, processos e pessoas, elevando a performance do seu negócio com
              decisões baseadas em evidências.
            </p>
          </CCol>
          <CCol md={3} className="text-start">
            <h6 className="text-uppercase fw-bold">PRODUTOS</h6>
            <p>
              <a href="#" className="text-white-50 text-decoration-none">
                Termos de Uso
              </a>
            </p>
            <p>
              <a href="#" className="text-white-50 text-decoration-none">
                Políticas de Privacidade
              </a>
            </p>
            <p>
              <a href="#" className="text-white-50 text-decoration-none">
                CNPJ: 10.000.000/0001-00
              </a>
            </p>
            <p>
              <a href="#" className="text-white-50 text-decoration-none">
                2025 - Todos os direitos reservados
              </a>
            </p>
          </CCol>
          <CCol md={3} className="text-start">
            <h6 className="text-uppercase fw-bold">Importante</h6>
            <p>
              <a href="#" className="text-white-50 text-decoration-none">
                FAQ
              </a>
            </p>
            <p>
              <a href="#" className="text-white-50 text-decoration-none">
                Teste Grátis
              </a>
            </p>
            <p>
              <a href="#" className="text-white-50 text-decoration-none">
                Shipping Rates
              </a>
            </p>
            <p>
              <a href="#" className="text-white-50 text-decoration-none">
                Help
              </a>
            </p>
          </CCol>
          <CCol md={3} className="text-start">
            <h6 className="text-uppercase fw-bold">CONTATO</h6>
            <p>
              <a href="#" className="text-white-50 text-decoration-none">
                (87) 9 9623-0023
              </a>
            </p>
            <p>
              <a href="#" className="text-white-50 text-decoration-none">
                contato@exbisolutions.com
              </a>
            </p>
          </CCol>
        </CRow>

        <hr className="border-light" />

        <CRow className="justify-content-between align-items-center pb-3">
          <CCol md={6} className="text-start">
            <span className="text-white-50">EXPERT BI SOLUTIONS © 2022</span>
          </CCol>
          <CCol md={6} className="text-end"></CCol>
        </CRow>
      </CContainer>
    </CFooter>
  )
}

export default React.memo(AppFooter)
