import React from 'react'
import { CRow, CCol, CCard, CCardBody, CCardTitle, CCardText, CCardHeader } from '@coreui/react'
import BackHomeButton from '../../components/BackHomeButton'
import { Award } from 'lucide-react'

const CasesSucesso = () => {
  return (
    <div
      className="min-vh-100 d-flex flex-column justify-content-center align-items-center"
      style={{
        background: 'linear-gradient(135deg, #4b88e2ff 0%, #051936ff 100%)',
        color: 'white',
        padding: '2rem 0',
      }}
    >
      <CRow className="justify-content-center w-100">
        <CCol xs={12} md={10} lg={8}>
          <CCard
            className="shadow-lg"
            style={{ borderRadius: '16px', overflow: 'hidden', border: 'none' }}
          >
            <CCardHeader className="card-Header-Style">
              <Award size={28} className="me-2 mb-1" />
              Cases de Sucesso
            </CCardHeader>

            <CCardBody style={{ backgroundColor: '#ffffff' }}>
              {/* Descrição */}
              <CRow className="justify-content-center text-center mb-5 mt-4">
                <CCol md={10}>
                  <p
                    style={{
                      color: '#4b5563',
                      fontSize: '1.05rem',
                      lineHeight: '1.6',
                    }}
                  >
                    Conheça histórias reais de empresas que transformaram seus resultados com a{' '}
                    <strong style={{ color: '#60a5fa' }}>Expert BI Solutions</strong>, utilizando
                    dados e automação como pilares estratégicos para o crescimento.
                  </p>
                </CCol>
              </CRow>

              {/* Cards internos */}
              <CRow className="g-4 justify-content-center">
                {/** Clínica Consulte */}
                <CCol xs={12} md={6} lg={4}>
                  <CCard
                    style={{
                      backgroundColor: '#93cbe5ff',
                      color: '#e2e8f0',
                      borderRadius: '16px',
                      height: '100%',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    }}
                    className="shadow-lg"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-6px)'
                      e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.3)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)'
                    }}
                  >
                    <CCardBody>
                      <CCardTitle
                        style={{
                          color: '#93c5fd',
                          fontWeight: '700',
                          fontSize: '1.2rem',
                        }}
                      >
                        🏥 Clínica Consulte
                      </CCardTitle>
                      <CCardText
                        style={{ color: '#e2e8f0', fontSize: '0.95rem', lineHeight: '1.6' }}
                      >
                        Desenvolvemos <strong>dashboards inteligentes</strong> para acompanhar NPS,
                        volume de chamados e indicadores de desempenho. Automatizamos o envio de{' '}
                        <strong>mensagens de marketing</strong> e{' '}
                        <strong>confirmações de agendas</strong>, além de resolver integrações de{' '}
                        <strong>APIs</strong> e criar soluções web personalizadas — resultando em
                        eficiência e maior engajamento dos pacientes.
                      </CCardText>
                    </CCardBody>
                  </CCard>
                </CCol>

                {/** Indústria Alfa */}
                <CCol xs={12} md={6} lg={4}>
                  <CCard
                    style={{
                      backgroundColor: '#b5c1f0',
                      color: '#e2e8f0',
                      borderRadius: '16px',
                      height: '100%',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    }}
                    className="shadow-lg"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-6px)'
                      e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.3)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)'
                    }}
                  >
                    <CCardBody>
                      <CCardTitle
                        style={{
                          color: '#93c5fd',
                          fontWeight: '700',
                          fontSize: '1.2rem',
                        }}
                      >
                        🏭 Indústria Alfa
                      </CCardTitle>
                      <CCardText
                        style={{ color: '#e2e8f0', fontSize: '0.95rem', lineHeight: '1.6' }}
                      >
                        Criamos um sistema de <strong>monitoramento de produção</strong> em tempo
                        real, integrando dados do chão de fábrica com relatórios financeiros. O
                        tempo de análise caiu em <strong>35%</strong> e as decisões estratégicas se
                        tornaram mais assertivas e ágeis.
                      </CCardText>
                    </CCardBody>
                  </CCard>
                </CCol>

                {/** Grupo Orion */}
                <CCol xs={12} md={6} lg={4}>
                  <CCard
                    style={{
                      backgroundColor: '#bbb5f0ff',
                      color: '#e2e8f0',
                      borderRadius: '16px',
                      height: '100%',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    }}
                    className="shadow-lg"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-6px)'
                      e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.3)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)'
                    }}
                  >
                    <CCardBody>
                      <CCardTitle
                        style={{
                          color: '#93c5fd',
                          fontWeight: '700',
                          fontSize: '1.2rem',
                        }}
                      >
                        💼 Grupo Orion
                      </CCardTitle>
                      <CCardText
                        style={{ color: '#e2e8f0', fontSize: '0.95rem', lineHeight: '1.6' }}
                      >
                        Desenvolvemos um <strong>painel de performance financeira</strong> integrado
                        a múltiplas fontes de dados. O sistema passou a prever receitas, automatizar
                        controle de custos e gerar alertas de performance, elevando a eficiência em{' '}
                        <strong>22%</strong>.
                      </CCardText>
                    </CCardBody>
                  </CCard>
                </CCol>
              </CRow>

              <div className="text-center mt-4">
                <BackHomeButton />
              </div>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </div>
  )
}

export default CasesSucesso
