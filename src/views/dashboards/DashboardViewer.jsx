// src/components/DashboardViewer.jsx
import React from 'react'
import { CCard, CCardBody, CRow, CCol } from '@coreui/react'
import BackHomeButton from '../../components/BackHomeButton'

const DashboardViewer = ({ url }) => {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #2c2f30ff 0%, #1d4272ff 100%)',
        paddingTop: '40px',
        paddingBottom: '40px',
      }}
      className="d-flex justify-content-center px-3"
    >
      <CCol xs={12} lg={10} xl={9}>
        <CCard className="shadow-lg border-0 rounded-3">
          <CCardBody className="p-0">
            <div
              style={{
                position: 'relative',
                width: '100%',
                paddingBottom: '60%',
                height: 0,
                overflow: 'hidden',
                borderRadius: '0.5rem',
              }}
            >
              <iframe
                title="Dashboard Power BI"
                src={url}
                frameBorder="0"
                allowFullScreen
                sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  border: 'none',
                }}
              ></iframe>
            </div>
          </CCardBody>
        </CCard>
        <BackHomeButton />
      </CCol>
    </div>
  )
}

export default DashboardViewer
