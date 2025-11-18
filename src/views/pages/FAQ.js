import React from 'react'
import {
  CContainer,
  CCard,
  CCardBody,
  CCardHeader,
  CRow,
  CCol,
  CButton,
  CAccordion,
  CAccordionItem,
  CAccordionHeader,
  CAccordionBody,
} from '@coreui/react'
import BackHomeButton from '../../components/BackHomeButton'
import { HelpCircle } from 'lucide-react'

const FAQ = () => {
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
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={10} lg={8}>
            <CCard
              className="shadow-sm border-0 rounded-4"
              style={{
                backgroundColor: '#ffffffff',
              }}
            >
              <CCardHeader className="card-Header-Style">
                <HelpCircle size={28} className="me-2 mb-1" />
                Perguntas Frequentes (FAQ)
              </CCardHeader>
              <CCardBody className="p-4 text-body">
                <p className="text-dark mb-4 text-start">
                  Reunimos aqui as principais dúvidas sobre nossos serviços, processos e
                  funcionamento. Caso ainda tenha alguma pergunta, entre em contato com nossa equipe
                  pelo e-mail <strong className="text-info">contato@exbisolutions.com</strong>.
                </p>

                <CAccordion alwaysOpen>
                  <CAccordionItem itemKey={1}>
                    <CAccordionHeader className="faq-header">
                      O que é a Expert BI Solutions e qual é o foco da empresa?
                    </CAccordionHeader>
                    <CAccordionBody>
                      A <strong>Expert BI Solutions</strong> é uma consultoria especializada em
                      <em> Business Intelligence (BI)</em>, automação de dados e transformação
                      digital. Nosso objetivo é ajudar empresas a compreenderem melhor seus dados e
                      tomarem decisões estratégicas com base em informações precisas e confiáveis.
                    </CAccordionBody>
                  </CAccordionItem>

                  <CAccordionItem itemKey={2}>
                    <CAccordionHeader>
                      Como funciona o processo de contratação dos serviços?
                    </CAccordionHeader>
                    <CAccordionBody>
                      O processo é simples: após o primeiro contato, realizamos uma reunião de
                      diagnóstico gratuita para entender o cenário da sua empresa. Em seguida,
                      apresentamos uma proposta personalizada com base nas necessidades e metas do
                      seu negócio.
                    </CAccordionBody>
                  </CAccordionItem>

                  <CAccordionItem itemKey={3}>
                    <CAccordionHeader>
                      Quais benefícios o Business Intelligence pode trazer para minha empresa?
                    </CAccordionHeader>
                    <CAccordionBody>
                      O BI transforma grandes volumes de dados em informações estratégicas,
                      possibilitando análises de desempenho, identificação de oportunidades, redução
                      de custos, previsões mais precisas e uma gestão mais assertiva e orientada por
                      dados.
                    </CAccordionBody>
                  </CAccordionItem>

                  <CAccordionItem itemKey={4}>
                    <CAccordionHeader>
                      Quais ferramentas e tecnologias vocês utilizam?
                    </CAccordionHeader>
                    <CAccordionBody>
                      Trabalhamos com as principais soluções de mercado, como{' '}
                      <strong>Power BI, Pentaho, Looker Studio</strong> e implementações sob medida
                      com <strong>Python, SQL e APIs personalizadas</strong>. Isso nos permite criar
                      painéis e automações totalmente adaptadas à realidade de cada cliente.
                    </CAccordionBody>
                  </CAccordionItem>

                  <CAccordionItem itemKey={5}>
                    <CAccordionHeader>
                      Como a Expert BI Solutions garante a segurança dos dados?
                    </CAccordionHeader>
                    <CAccordionBody>
                      A segurança da informação é um pilar essencial da nossa atuação. Todos os
                      dados tratados são protegidos por protocolos de criptografia, controles de
                      acesso e conformidade com a{' '}
                      <strong>LGPD (Lei Geral de Proteção de Dados)</strong>. Nossos servidores e
                      processos seguem as melhores práticas de segurança digital.
                    </CAccordionBody>
                  </CAccordionItem>

                  <CAccordionItem itemKey={6}>
                    <CAccordionHeader>
                      Posso solicitar uma demonstração das soluções antes da contratação?
                    </CAccordionHeader>
                    <CAccordionBody>
                      Sim! Oferecemos uma <strong>Demonstração Gratuita</strong> onde apresentamos
                      um exemplo prático de dashboards e automações aplicadas ao seu segmento. É uma
                      ótima oportunidade para visualizar o potencial que o BI pode trazer ao seu
                      negócio.
                    </CAccordionBody>
                  </CAccordionItem>
                </CAccordion>

                <p className="mt-5 text-center text-info small">
                  Última atualização: Novembro de 2025
                </p>
                <BackHomeButton />
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default FAQ
