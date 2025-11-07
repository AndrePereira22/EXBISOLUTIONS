import React from 'react'
import { CContainer, CRow, CCol, CCard, CCardBody, CImage, CButton } from '@coreui/react'
import { ArrowLeft } from 'lucide-react'

const Clientes = () => {
  const clientes = [
    {
      nome: 'Clínica Vida+',
      descricao: 'Soluções integradas de agendamento e prontuário eletrônico.',
      logo: 'https://cdn-icons-png.flaticon.com/512/2967/2967109.png',
    },
    {
      nome: 'Farmácia Popular',
      descricao: 'Automatização de processos e integração com estoque e vendas.',
      logo: 'https://cdn-icons-png.flaticon.com/512/2965/2965567.png',
    },
    {
      nome: 'Hospital Esperança',
      descricao: 'Sistema completo de gestão hospitalar com dashboards analíticos.',
      logo: 'https://cdn-icons-png.flaticon.com/512/2965/2965564.png',
    },
    {
      nome: 'Clínica Consulte',
      descricao: 'Automação de serviços. Desonvolvimento de dashboards gerenciais.',
      logo: 'https://raw.githubusercontent.com/AnalistasCSJ/arquivos_consulte_static_capitao/refs/heads/main/images/logo.webp',
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
              <h2 className="fw-bold mb-3 display-5 text-light">
              Nossos Clientes
            </h2>
            <p className="text-light fs-5">
              Temos orgulho em atender empresas que confiam em nossas soluções para otimizar processos,
              automatizar tarefas e alcançar resultados excepcionais.
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
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
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
    maxWidth: '100%',      // nunca ultrapassa o tamanho do container
    maxHeight: '20%',
    height: 'auto',        // mantém a proporção original
    width: 'auto',        // largura base (ajusta se quiser menor/maior)
    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
  }}
/>

                  <h5 className="fw-bold text-white">{cliente.nome}</h5>
                  <p className="text-light small">{cliente.descricao}</p>
                </CCardBody>
              </CCard>
            </CCol>
          ))}
        </CRow>
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
      </CContainer>
    </div>
  )
}

export default Clientes
