import React from 'react'
import { CContainer, CRow, CCol, CCard, CCardBody, CCardTitle, CCardText } from '@coreui/react'
import { Database, BarChart3, Code, Plug, MessageSquare } from 'lucide-react'
import BackHomeButton from '../../components/BackHomeButton'

const Servicos = () => {
  const servicos = [
    {
      icon: <Database size={45} className="text-dark mb-3" />,
      titulo: 'Tratamento de Dados',
      descricao:
        'Organizamos, limpamos e estruturamos seus dados para que se tornem uma base sólida e confiável, facilitando a tomada de decisões e melhorando seus resultados.',
    },
    {
      icon: <BarChart3 size={45} className="text-dark mb-3" />,
      titulo: 'Dashboards e Relatórios Automatizados',
      descricao:
        'Criamos dashboards e relatórios que se atualizam automaticamente, oferecendo uma visão clara e em tempo real do desempenho da sua empresa.',
    },
    {
      icon: <Code size={45} className="text-dark mb-3" />,
      titulo: 'Desenvolvimento Web',
      descricao:
        'Desenvolvemos sites e sistemas personalizados, com foco em performance, design moderno e funcionalidades sob medida para o seu negócio.',
    },
    {
      icon: <Plug size={45} className="text-dark mb-3" />,
      titulo: 'Integrações e APIs',
      descricao:
        'Implantamos e integramos APIs que conectam sistemas e automatizam processos, garantindo mais agilidade e eficiência no seu dia a dia.',
    },
    {
      icon: <MessageSquare size={36} className="text-dark mb-3" />,
      titulo: 'Automação de Mensagens',
      descricao:
        'Utilizamos o WhatsApp para automatizar o envio de confirmações, lembretes e campanhas, fortalecendo o relacionamento com seus clientes.',
    },
  ]

  return (
    <div
      className="min-vh-100 d-flex flex-column justify-content-center"
      style={{
        background: 'linear-gradient(135deg, #4b88e2ff 0%, #051936ff 100%)',
        color: 'white',
      }}
    >
      <CContainer className="py-5">
        <CRow className="justify-content-center mb-5">
          <CCol md={8} className="text-center">
            <h1 className="fw-bold mb-3 text-warning">Nossos Serviços</h1>
            <h5 className="text-white">
              Oferecemos soluções completas que unem tecnologia, automação e inteligência de dados
              para transformar a forma como sua empresa trabalha e cresce.
            </h5>
          </CCol>
        </CRow>

        <CRow className="g-4 justify-content-center">
          {servicos.map((servico, index) => (
            <CCol key={index} md={4} sm={6}>
              <CCard
                className="h-100 border-0 shadow-sm text-center p-3 transition-card"
                style={{
                  backgroundColor: '#f0f3f0ff',
                  borderRadius: '1rem',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)'
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.15)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 4px 10px rgba(0,0,0,0.08)'
                }}
              >
                <CCardBody>
                  {servico.icon}
                  <CCardTitle className="fw-bold mb-2 text-info">{servico.titulo}</CCardTitle>
                  <CCardText className="fw-bold mb-2 text-secondary">{servico.descricao}</CCardText>
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

export default Servicos
