import React from 'react'
import { CContainer, CRow, CCol, CCard, CCardBody, CImage } from '@coreui/react'
import BackHomeButton from '../../components/BackHomeButton'

const Clientes = () => {
  const clientes = [
    {
      nome: 'Clínica Consulte',
      descricao:
        'Soluções completas de agendamento e automação de serviços.Desenvolvemos aplicações web inteligentes e dashboards gerenciais que consolidam métricas de desempenho — NPS, volume de atendimentos, chamados e procedimentos realizados — para apoiar decisões baseadas em dados.',
      logo: 'https://www.clinicaconsulte.com.br/lp/wp-content/uploads/2023/07/Logotipo-Consulte-Verde-e-Azul2-300x100.jpg',
    },
  ]

  return (
    <div
      style={{
        background: 'linear-gradient(135deg, #4b88e2ff 0%, #051936ff 100%)',
        color: 'white',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <CContainer className="py-5">
        {/* Cabeçalho */}
        <CRow className="justify-content-center mb-5 text-center">
          <CCol md="8">
            <h2 className="fw-bold mb-3 display-5 text-warning">Nossos Clientes</h2>
            <p style={{ color: '#D0DAEE' }} className="text-light fs-5">
              Temos orgulho em atender empresas que confiam em nossas soluções para otimizar
              processos, automatizar tarefas e alcançar resultados excepcionais.
            </p>
          </CCol>
        </CRow>

        {/* Cartões de clientes */}
        <CRow className="justify-content-center">
          {clientes.map((cliente, index) => (
            <CCol key={index} md="6" lg="3" className="mb-4 d-flex">
              <CCard
                className="border-0 shadow-lg flex-fill text-center p-3 rounded-4"
                style={{
                  backgroundColor: '#ffffffff',
                  backdropFilter: 'blur(8px)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)'
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.3)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)'
                }}
              >
                <CCardBody>
                  <CImage
                    src={cliente.logo}
                    alt={cliente.nome}
                    className="mb-3"
                    style={{
                      background: 'grey',
                      maxWidth: '85%',
                      maxHeight: '50%',
                      height: 'auto',
                      width: 'auto',
                      filter: 'drop-shadow(0 2px 4px rgba(17, 60, 201, 0.3))',
                      borderRadius: '3%', // deixa circular
                      objectFit: 'cover', // mantém proporção e preenche o container
                    }}
                  />

                  <h5 className="fw-bold text-info">{cliente.nome}</h5>
                  <p className="text-secondary text-start">{cliente.descricao}</p>
                </CCardBody>
              </CCard>
            </CCol>
          ))}
        </CRow>
        <BackHomeButton />
      </CContainer>
    </div>
  )
}

export default Clientes
