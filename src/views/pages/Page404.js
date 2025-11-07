import React from 'react'
import { CButton, CCol, CContainer, CRow, CCard, CCardBody } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilWarning } from '@coreui/icons'
import { useNavigate } from 'react-router-dom'

const Page404 = () => {
  const navigate = useNavigate()

  const handleBackHome = () => {
    navigate('/')
  }

  return (
    <div
      className="d-flex align-items-center justify-content-center min-vh-100 bg-light"
      style={{ textAlign: 'center' }}
    >
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8} lg={6}>
            <CCard className="shadow-sm border-0 rounded-4 p-4">
              <CCardBody>
                <CIcon icon={cilWarning} size="4xl" className="text-warning mb-3" />
                <h1 className="display-3 fw-bold text-dark">404</h1>
                <h4 className="text-secondary mb-3">Página não encontrada</h4>
                <p className="text-muted mb-4">
                  Oops! Parece que o caminho que você tentou acessar não existe ou foi movido.
                </p>
                <CButton
                  color="primary"
                  variant="outline"
                  className="px-4 py-2 rounded-pill"
                  onClick={handleBackHome}
                >
                  Voltar
                </CButton>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Page404
