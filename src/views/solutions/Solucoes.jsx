import React from 'react'
import { useLocation } from 'react-router-dom'
import { CCard, CCardBody, CCardHeader, CRow, CCol, CCardFooter, CButton } from '@coreui/react'
import { Activity, TrendingUp } from 'lucide-react'
import BackHomeButton from '../../components/BackHomeButton'
import DadosPorRamo from '../../components/CategoriasPorRamo'

const normalize = (str) =>
  str
    ?.toString()
    .trim()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // remove acentos
    .toLowerCase()
    .replace(/\s+/g, '') // remove espaços
    .replace(/-/g, '') // remove hifens

const Solucoes = ({ onOpenFaleComModal = () => {} }) => {
  const location = useLocation()
  const { ramo, categoria } = location.state || {}
  const { solucoesPorRamo } = DadosPorRamo

  const dados = ramo ? solucoesPorRamo[normalize(ramo)] : null

  return (
    <div
      className=" min-vh-100 d-flex flex-column justify-content-center"
      style={{
        background: 'linear-gradient(135deg, #4b88e2ff 0%, #051936ff 100%)',
        color: 'white',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <CCard
        className="justify-content-center mb-5"
        style={{ borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}
      >
        <CCardHeader
          className="fw-bold d-flex align-items-center"
          style={{
            background: 'linear-gradient(135deg, #4b88e2, #264675ff)',
            color: 'white',
            fontSize: '1.25rem',
            borderTopLeftRadius: '12px',
            borderTopRightRadius: '12px',
            padding: '1rem 1.5rem',
          }}
        >
          {dados ? (
            <>
              {dados.icone}
              <span className="text-white" style={{ marginLeft: '15px' }}>
                Soluções para {dados.titulo} {categoria && `(${categoria})`}
              </span>
            </>
          ) : (
            'Soluções para sua empresa'
          )}
        </CCardHeader>

        <CCardBody style={{ padding: '1.5rem' }}>
          {dados ? (
            <>
              <p style={{ fontSize: '1rem', color: '#555' }}>
                Descubra as principais métricas e automações que podem impulsionar a performance da
                sua empresa.
              </p>

              <CRow className="mt-4">
                <CCol md={6}>
                  <h5 style={{ fontWeight: 700, color: '#051936', marginBottom: '1rem' }}>
                    <Activity size={20} color="#4b88e2" style={{ marginRight: '6px' }} />
                    Métricas principais
                  </h5>
                  <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
                    {dados.metricas.map((m, i) => (
                      <li
                        key={i}
                        style={{
                          background: '#f3f6fc',
                          padding: '8px 12px',
                          borderRadius: '6px',
                          marginBottom: '8px',
                        }}
                      >
                        • {m}
                      </li>
                    ))}
                  </ul>
                </CCol>

                <CCol md={6}>
                  <h5 style={{ fontWeight: 700, color: '#051936', marginBottom: '1rem' }}>
                    <TrendingUp size={20} color="#4b88e2" style={{ marginRight: '6px' }} />
                    Soluções sugeridas
                  </h5>
                  <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
                    {dados.solucoes.map((s, i) => (
                      <li
                        key={i}
                        style={{
                          background: '#eef3ff',
                          padding: '8px 12px',
                          borderRadius: '6px',
                          marginBottom: '8px',
                        }}
                      >
                        • {s}
                      </li>
                    ))}
                  </ul>
                </CCol>
              </CRow>
            </>
          ) : (
            <p style={{ color: '#777' }}>
              Nenhum dado recebido. Retorne e selecione um tipo de empresa e categoria.
            </p>
          )}
        </CCardBody>
        <CCardFooter className="d-flex justify-content-center align-items-center mb-3">
          <CButton
            href="https://wa.me/5587988613551?text=Olá!%20Gostaria%20de%20falar%20com%20um%20especialista%20da%20ExBi%20Solutions."
            target="_blank"
            style={{
              backgroundColor: '#007bff',
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
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#0056b3')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#007bff')}
            onClick={onOpenFaleComModal}
          >
            Fale com um especialista
          </CButton>
        </CCardFooter>
      </CCard>
      <BackHomeButton />
    </div>
  )
}

export default Solucoes
