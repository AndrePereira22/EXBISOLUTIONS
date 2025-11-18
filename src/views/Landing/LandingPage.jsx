import React, { useState } from 'react'
import { CContainer, CRow, CCol, CCard, CCardBody, CBadge, CCardTitle } from '@coreui/react'
import { FaBolt, FaExpand, FaLink, FaTachometerAlt, FaSyncAlt, FaUsers } from 'react-icons/fa'
import { HeaderLanding } from '../../components/header/index'
import { AppFooterLanding } from '../../components/footer/index'
import ExplorarModal from '../modals/ExplorarModal'
import FaleComEspecialistaModal from '../modals/FaleComEspecialistaModal'
import BtnDescobrirSolucoes from '../../components/buttons/DescobrirSolucoes'
import * as Images from '../../components/image'



import { motion } from 'framer-motion'

const LandingPage = () => {
  const [visible, setVisible] = useState(false)
  const [showFaleComModal, setShowFaleComModal] = useState(false)

  return (
    <CCard className="landing-wrapper" style={{ overflowX: 'hidden', border: 'none' }}>
      <HeaderLanding onOpenFaleComModal={() => setShowFaleComModal(true)} />

      {/* ===== HERO SECTION ===== */}
      <section
        className="hero-section"
        style={{
          backgroundColor: '#EAEAEA', // '#fff',
          color: '#000',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          padding: '120px 0',
        }}
      >
        <CContainer fluid>
          <CRow
            className="align-items-center"
            style={{
              margin: '0 auto',
              maxWidth: '90%',
              flexWrap: 'nowrap',
            }}
          >
            {/* BLOCO DE TEXTO */}
            <CCol
              style={{
                flex: '0 0 35%',
                maxWidth: '35%',
              }}
            >
              <h1 className="texto-primario" style={{ lineHeight: '1.2', marginBottom: '1.5rem' }}>
                A forma mais esperta <br />
                de controlar seus dados.
              </h1>

              <p
                style={{
                  fontSize: '1.25rem',
                  marginBottom: '2rem',
                  color: '#333',
                }}
              >
                Transformamos informações em decisões estratégicas
                <br />
                para o crescimento da sua empresa.
              </p>

              <BtnDescobrirSolucoes
                label="Descubra soluções para sua empresa"
                onClick={() => setVisible(true)}
              />

              <CRow className="g-4" style={{ justifyContent: 'flex-start' }}>
                <CCol xs="auto" className="d-flex align-items-center gap-2">
                  <CCard
                    style={{
                      backgroundColor: '#4b88e2',
                      color: '#fff',
                      width: '48px',
                      height: '48px',
                      borderRadius: '8px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <FaBolt className="FaExpand-icone" size={25} />
                  </CCard>
                  <span style={{ fontSize: '1.05rem' }}>Insights em tempo real</span>
                </CCol>

                <CCol xs="auto" className="d-flex align-items-center gap-2">
                  <CCard
                    style={{
                      backgroundColor: '#4b88e2',
                      color: '#fff',
                      width: '48px',
                      height: '48px',
                      borderRadius: '8px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <FaExpand className="FaExpand-icone" size={25} />
                  </CCard>
                  <span style={{ fontSize: '1.05rem' }}>Integração completa</span>
                </CCol>

                <CCol xs="auto" className="d-flex align-items-center gap-2">
                  <CCard
                    style={{
                      backgroundColor: '#4b88e2',
                      color: '#fff',
                      width: '48px',
                      height: '48px',
                      borderRadius: '8px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <FaLink className="FaExpand-icone" size={25} />
                  </CCard>
                  <span style={{ fontSize: '1.05rem' }}>Automação de relatórios</span>
                </CCol>
              </CRow>
            </CCol>

            {/* IMAGEM */}
            <CCol
              style={{
                flex: '0 0 65%',
                maxWidth: '65%',
                display: 'flex',
                justifyContent: 'flex-end',
              }}
            >
              <motion.img
                src={Images.nerd}
                alt="Dashboard"
                style={{
                  maxWidth: '70%',
                  height: 'auto',
                  borderRadius: '12px',
                  objectFit: 'contain',
                  transition: 'all 0.4s ease',
                }}
                whileHover={{
                  scale: 1.05, // zoom leve
                  filter: 'brightness(1.1)', // deixa mais brilhante
                  boxShadow: '0 10px 30px rgba(0,0,0,0.2)', // adiciona sombra
                }}
                whileTap={{
                  scale: 0.98, // leve redução ao clicar
                }}
              />
            </CCol>
          </CRow>
        </CContainer>
      </section>

      {/* ===== MENSAGEM SECTION ===== */}
      <section id="message" className="features-message py-5 texto-sucesso">
        <CContainer>
          <CRow className="align-items-center g-4">
            <CCol md={4}>
              <h3
                className="texto-white"
                style={{
                  fontSize: '2.0rem',
                  fontWeight: 700,
                  lineHeight: '1.2',
                  marginBottom: '1.5rem',
                }}
              >
                Quando informação se encontra com estratégia, o sucesso acontece.
              </h3>
            </CCol>
            <CCol md={4}></CCol>
            <CCol md={4}>
              <p
                style={{
                  lineHeight: '1.2',
                  marginBottom: '1.5rem',
                }}
                className="lead text-start texto-white "
              >
                Transformar dados em ações estratégicas é o que diferencia empresas de sucesso. Com
                nossas soluções de Business Intelligence, você consegue visualizar padrões,
                antecipar oportunidades e tomar decisões com confiança.
              </p>
            </CCol>
          </CRow>
        </CContainer>
      </section>

      {/* ===== FEATURES SECTION ===== */}
      <section
        id="features"
        className="features-section py-5"
        style={{ backgroundColor: '#EAEAEA' }}
      >
        <CContainer className="mb-5 mt-5">
          <CRow className="mb-5">
            <CCol md={4}>
              <h3 className="fw-bold display-6 texto-primario">O que oferecemos</h3>
              <p className="lead mt-2">
                Descubra como informações precisas e insights inteligentes podem potencializar o
                sucesso do seu negócio.
              </p>
            </CCol>
          </CRow>

          <CRow className="text-center g-4 mt-5">
            <CCol md={3}>
              <motion.img
                src={Images.dash_inteligentes}
                alt="Workflows funcionais"
                className="img-fluid mb-3 rounded"
                style={{ maxWidth: '100%' }}
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              <CBadge
                className="fw-bold text-center d-block mt-3 px-3 py-2  texto-center"
                style={{
                  fontSize: '1.1rem',
                  textAlign: 'start',
                  borderRadius: '12px',
                  border: 'none',
                }}
              >
                Dashboards Inteligentes
              </CBadge>

              <p className="mt-3 text-start" style={{ color: '#001f3f' }}>
                Transforme seus dados em painéis visuais e acompanhe métricas importantes em tempo
                real.
              </p>
            </CCol>

            <CCol md={3}>
              <motion.img
                src={Images.automacao_processos}
                alt="Soluções completas"
                className="img-fluid mb-3 rounded"
                style={{ maxWidth: '100%' }}
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <CBadge
                className="fw-bold text-center d-block mt-3 px-3 py-2  texto-center"
                style={{
                  fontSize: '1.1rem',
                  textAlign: 'start',
                  borderRadius: '12px',
                  border: 'none',
                }}
              >
                Automação de Processos
              </CBadge>
              <p className="mt-3 text-start">
                Automatize tarefas repetitivas e otimize o tempo da sua equipe.
              </p>
            </CCol>

            <CCol md={3}>
              <motion.img
                src={Images.insights_estrategia}
                alt="Tecnologia avançada"
                className="img-fluid mb-3 rounded"
                style={{ maxWidth: '100%' }}
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              <CBadge
                className="fw-bold text-center d-block mt-3 px-3 py-2  texto-center"
                style={{
                  fontSize: '1.1rem',
                  textAlign: 'start',
                  borderRadius: '12px',
                  border: 'none',
                }}
              >
                Insights Estratégicos
              </CBadge>

              <p className="mt-3 text-start">
                Integre sistemas e processos, garantindo operações mais eficientes.
              </p>
            </CCol>

            <CCol md={3}>
              <motion.img
                src={Images.img_funcionais}
                alt="Resultados garantidos"
                className="img-fluid mb-3 rounded"
                style={{ maxWidth: '100%' }}
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3.2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <CBadge
                className="fw-bold text-center d-block mt-3 px-3 py-2  texto-center"
                style={{
                  fontSize: '1.1rem',
                  textAlign: 'start',
                  borderRadius: '12px',
                  border: 'none',
                }}
              >
                Workflows Funcionais
              </CBadge>
              <p className="mt-3 text-start">
                Garanta que suas operações fluam sem falhas e com produtividade.
              </p>
            </CCol>
          </CRow>
        </CContainer>

        <CContainer className="mt-5 mb-5">
          <CRow className="align-items-center mt-5">
            <CCol md={5} className="text-end">
              <motion.img
                src={Images.inteligencia_mercado_grafic}
                alt="Dashboard"
                style={{
                  maxWidth: '100%',
                  borderRadius: '12px',
                  objectFit: 'contain',
                }}
                initial={{ opacity: 0, filter: 'blur(20px)', scale: 1.95 }}
                whileInView={{ opacity: 1, filter: 'blur(0px)', scale: 1.1 }}
                transition={{ duration: 1.8, ease: 'easeOut' }}
                viewport={{ once: true }}
              />
            </CCol>

            <CCol md={2}></CCol>

            <CCol md={5}>
              <h1
                className="texto-primario"
                style={{
                  fontSize: '2.3rem',
                  fontWeight: '700',
                  lineHeight: '1.2',
                  marginBottom: '1.5rem',
                  textAlign: 'start',
                }}
              >
                Transformando dados em <br /> ações que fazem a diferença
              </h1>

              <p
                style={{
                  fontSize: '1.05rem',
                  marginBottom: '2rem',
                  color: '#333',
                  textAlign: 'start',
                }}
              >
                Nós ajudamos empresas a aproveitar o máximo de seus dados, conectando informações,
                processos e pessoas.
              </p>

              <CRow className="g-4">
                <CCol xs="auto" className="d-flex align-items-center gap-2">
                  <CCard
                    style={{
                      backgroundColor: '#4b88e2',
                      color: '#fff',
                      width: '48px',
                      height: '48px',
                      borderRadius: '8px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <FaTachometerAlt className="FaExpand-icone" size={25} />
                  </CCard>
                  <span style={{ fontSize: '0.95rem' }}>Velocidade e segurança</span>
                </CCol>

                <CCol xs="auto" className="d-flex align-items-center gap-2">
                  <CCard
                    style={{
                      backgroundColor: '#4b88e2',
                      color: '#fff',
                      width: '48px',
                      height: '48px',
                      borderRadius: '8px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <FaSyncAlt className="FaExpand-icone" size={25} />
                  </CCard>
                  <span style={{ fontSize: '0.95rem' }}>Flexibilidade e agilidade</span>
                </CCol>

                <CCol xs="auto" className="d-flex align-items-center gap-2">
                  <CCard
                    style={{
                      backgroundColor: '#4b88e2',
                      color: '#fff',
                      width: '48px',
                      height: '48px',
                      borderRadius: '8px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <FaUsers className="FaExpand-icone" size={25} />
                  </CCard>
                  <span style={{ fontSize: '0.95rem' }}>Melhor colaboração</span>
                </CCol>
              </CRow>
            </CCol>
          </CRow>
        </CContainer>
      </section>

      {/* ===== DEPOIMENTOS SECTION ===== */}
      <section id="features-clientes" className="features-clientes py-5 texto-sucesso">
        <CContainer className="mt-4">
          <CRow className="mb-5">
            <CCol md={12}>
              <h2 className="fw-bold display-6 texto-white">O que nossos clientes dizem</h2>
            </CCol>
          </CRow>

          <CRow className="g-4 pb-5">
            {[
              {
                nome: 'João Martins',
                empresa: 'Clínica Vida+',
                texto:
                  'A Exbi Solutions trouxe uma transformação enorme na nossa rotina. Antes, o agendamento e a gestão dos pacientes eram confusos e demorados. Hoje, tudo é automatizado, prático e integrado. A equipe é super atenciosa e entende realmente as necessidades da clínica.',
              },
              {
                nome: 'Mariana Lopes',
                empresa: 'Farmácia Popular',
                texto:
                  'Encontramos na Exbi um parceiro de verdade. Eles não apenas entregaram o sistema, mas acompanharam todo o processo de adaptação da equipe. O resultado foi uma redução significativa de erros e mais controle sobre o estoque e as vendas.',
              },
              {
                nome: 'Carlos Eduardo',
                empresa: 'Hospital Esperança',
                texto:
                  'O sistema desenvolvido pela Exbi Solutions mudou completamente nossa gestão hospitalar. Hoje temos relatórios automáticos, dashboards claros e uma comunicação muito mais eficiente entre os setores. Profissionalismo e qualidade definem o trabalho deles.',
              },
            ].map((item, i) => (
              <CCol md={4} key={i}>
                <CCard
                  className="h-100 border-0 bg-white p-3 shadow-sm"
                  style={{
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    backgroundColor: '#EAEAEA',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-6px)'
                    e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.15)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.08)'
                  }}
                >
                  <CCardBody>
                    <p
                      className="fst-italic mb-3"
                      style={{
                        color: '#555',
                        fontSize: '1.2rem',
                        lineHeight: '1.7',
                      }}
                    >
                      “{item.texto}”
                    </p>
                    <h6 className="fw-bold mb-0 text-dark">{item.nome}</h6>
                    <small className="text-secondary">{item.empresa}</small>
                  </CCardBody>
                </CCard>
              </CCol>
            ))}
          </CRow>
        </CContainer>
      </section>
      {/* ===== NOT FOUND SECTION ===== */}
      <section
        style={{ padding: '40px 0', backgroundColor: '#EAEAEA', color: '#000', minHeight: '60vh' }}
      >
        <h3 className="text-center mb-5 mt-5 texto-primario">Algumas das Tecnologias Utilizadas</h3>

        <CRow className="g-4 justify-content-center mb-5">
          {[
            // lista para reduzir repetição
            {
              logo: Images.pythonLogo,
              alt: 'Python',
              titulo: 'Python',
              texto: 'Automação de processos, integrações, APIs e análise de dados.',
            },
            {
              logo: Images.reactLogo,
              alt: 'React.js',
              titulo: 'React.js',
              texto: 'Desenvolvimento de interfaces modernas, rápidas e responsivas.',
            },
            {
              logo: Images.jsLogo,
              alt: 'JavaScript',
              titulo: 'JavaScript',
              texto: 'Lógica front-end e back-end para aplicações escaláveis.',
            },
            {
              logo: Images.powerBiLogo,
              alt: 'Power BI',
              titulo: 'Power BI',
              texto: 'Criação de dashboards, visualizações e relatórios analíticos.',
            },
            {
              logo: Images.pdiLogo,
              alt: 'Pentaho',
              titulo: 'Pentaho Data Integration',
              texto: 'ETL, tratamento de dados e construção de pipelines eficientes.',
            },
          ].map((item, i) => (
            <CCol md={2} key={i}>
              <CCard
                className="text-center p-4 shadow-sm h-100"
                style={{
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  backgroundColor: '#FFFFFF',
                  border: '0',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)'
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.15)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.08)'
                }}
              >
                <CCardTitle className="mb-3">
                  <img src={item.logo} alt={item.alt} style={{ width: 52, height: 52 }} />
                </CCardTitle>

                <CCardBody>
                  <h5 className="fw-bold">{item.titulo}</h5>
                  <p>{item.texto}</p>
                </CCardBody>
              </CCard>
            </CCol>
          ))}
        </CRow>
      </section>

      {/* ===== MODAL ===== */}
      <ExplorarModal visible={visible} setVisible={setVisible} />
      <FaleComEspecialistaModal visible={showFaleComModal} setVisible={setShowFaleComModal} />
      <AppFooterLanding />
    </CCard>
  )
}

export default LandingPage
