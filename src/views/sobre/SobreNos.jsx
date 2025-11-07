import React from 'react'
import { CContainer, CRow, CCol, CCard, CCardBody, CImage } from '@coreui/react'
import BackHomeButton from '../../components/BackHomeButton'

const Sobre = () => {
  const cards = [
    {
      titulo: 'Quem Somos',
      descricao:
        'A Exbi Solutions é especialista em Business Intelligence e relatórios gerenciais, oferecendo também soluções web e automação de processos que impulsionam a eficiência e a tomada de decisão nas empresas.',
      imagem: 'https://cdn-icons-png.flaticon.com/512/3135/3135712.png',
    },
    {
      titulo: 'Nossa Visão',
      descricao:
        'Ser referência nacional em soluções tecnológicas inovadoras para gestão empresarial.',
      imagem: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
    },
    {
      titulo: 'Nossa Missão',
      descricao:
        'Desenvolver sistemas eficientes e acessíveis que simplifiquem o dia a dia das empresas.',
      imagem: 'https://cdn-icons-png.flaticon.com/512/3135/3135685.png',
    },
    {
      titulo: 'Nossos Valores',
      descricao: 'Inovação, transparência, compromisso e foco na satisfação dos clientes.',
      imagem: 'https://cdn-icons-png.flaticon.com/512/3135/3135773.png',
    },
  ]

  return (
    <div
      style={{
        background: 'linear-gradient(135deg, #4b88e2ff 0%, #051936ff 100%)',
        color: '#333',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <CContainer className="py-5">
        {/* Cabeçalho */}
        <CRow className="justify-content-center mb-5 text-center">
          <CCol md="8">
            <h2 className="fw-bold mb-3 display-5 text-warning">Sobre a Exbi Solutions</h2>
            <p className="fs-4 text-light">
              Oferecemos soluções tecnológicas modernas que ajudam empresas a crescer com
              eficiência, inovação e segurança.
            </p>
          </CCol>
        </CRow>

        {/* Cartões */}
        <CRow className="justify-content-center">
          {cards.map((item, index) => (
            <CCol key={index} md="6" lg="3" className="mb-4 d-flex">
              <CCard
                className="border-0 shadow-lg flex-fill text-center p-3 rounded-4"
                style={{
                  backgroundColor: '#f9f9f9',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)'
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.15)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 4px 10px rgba(0,0,0,0.05)'
                }}
              >
                <CCardBody>
                  <CImage
                    src={item.imagem}
                    alt={item.titulo}
                    width={80}
                    height={80}
                    className="mb-3"
                    style={{
                      filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))',
                    }}
                  />
                  <h5 className="fw-bold text-info">{item.titulo}</h5>
                  <p className="text-secondary small">{item.descricao}</p>
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

export default Sobre
