import React from 'react'
import { CButton, CContainer, CRow, CCol, CCard, CCardBody } from '@coreui/react'
import { FaTwitter, FaEye, FaLaptopCode, FaBolt, FaExpand, FaLink } from 'react-icons/fa'
import { HeaderLanding } from '../../components/header/index'
import { AppFooterLanding } from '../../components/footer/index'
import nerd from './../../assets/images/img_nerd.png'
import dash_inteligentes from './../../assets/images/dash_inteligentes.png'
import automacao_processos from './../../assets/images/img_robo.png'
import insights_estrategia from './../../assets/images/img_entrategia.png'
import img_funcionais from './../../assets/images/img_funcionais.png'
import inteligencia_mercado_grafic from './../../assets/images/inteligencia_mercado_grafic.webp'
const LandingPage = () => {
  return (
    <div className="landing-wrapper">
      <HeaderLanding />

      {/* ===== HERO SECTION ===== */}
      <section
        className="hero-section"
        style={{
          backgroundColor: '#fff',
          color: '#000',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          padding: '120px 0',
        }}
      >
        <CContainer>
          <CRow className="align-items-center">
            {/* COLUNA ESQUERDA */}
            <CCol md={5}>
              <h1
                style={{
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  lineHeight: '1.2',
                  marginBottom: '1.5rem',
                }}
              >
                A forma mais esperta <br />
                de controlar seus dados.
              </h1>

              <p
                style={{
                  fontSize: '0.85rem',
                  marginBottom: '2rem',
                  color: '#333',
                }}
              >
                Transformamos informações em decisões estratégicas
                <br />
                para o crescimento da sua empresa.
              </p>

              <CButton
                color="dark"
                size="lg"
                style={{
                  borderRadius: '6px',
                  fontWeight: '600',
                  padding: '10px 30px',
                  marginBottom: '3rem',
                  width: 'auto', // importante para não esticar
                }}
              >
                Começar
              </CButton>

              {/* ÍCONES */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  gap: '2rem',
                  width: '100%',
                }}
              >
                {/* Velocidade */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div
                    style={{
                      backgroundColor: '#000',
                      color: '#fff',
                      width: '48px',
                      height: '48px',
                      borderRadius: '8px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <FaBolt size={20} />
                  </div>
                  <span style={{ fontSize: '0.95rem' }}>
                    <strong>Insights em </strong>
                    <br />
                    tempo real
                  </span>
                </div>

                {/* Flexibilidade */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div
                    style={{
                      backgroundColor: '#000',
                      color: '#fff',
                      width: '48px',
                      height: '48px',
                      borderRadius: '8px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <FaExpand size={20} />
                  </div>
                  <span style={{ fontSize: '0.95rem' }}>
                    <strong>Integração</strong>
                    <br /> completa de dados
                  </span>
                </div>

                {/* Colaboração */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div
                    style={{
                      backgroundColor: '#000',
                      color: '#fff',
                      width: '48px',
                      height: '48px',
                      borderRadius: '8px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <FaLink size={20} />
                  </div>
                  <span style={{ fontSize: '0.95rem' }}>
                    <strong>Automação de </strong> <br />
                    relatórios
                  </span>
                </div>
              </div>
            </CCol>

            {/* COLUNA CENTRAL - ESPAÇO */}
            <CCol md={2}></CCol>

            {/* COLUNA DIREITA - IMAGEM */}
            <CCol md={5} className="text-end">
              <img
                src={nerd}
                alt="Dashboard"
                style={{
                  maxWidth: '100%',
                  borderRadius: '12px',
                  objectFit: 'contain',
                }}
              />
            </CCol>
          </CRow>
        </CContainer>
      </section>

      {/* ===== MENSAGEM SECTION ===== */}
      <section id="message" className="features-message py-5">
        <CContainer>
          <CRow className="align-items-center g-4">
            {/* Texto da esquerda */}
            <CCol md={4} className="text-md-start text-center">
              <h2 className="fw-bold display-5 text-start">
                Quando informação se encontra com estratégia, o sucesso acontece.
              </h2>
            </CCol>
            <CCol md={4} className="text-md-start text-center"></CCol>

            {/* Texto da direita */}
            <CCol md={4} className="text-md-start text-center">
              <p className="lead text-start">
                Transformar dados em ações estratégicas é o que diferencia empresas de sucesso. Com
                nossas soluções de Business Intelligence, você consegue visualizar padrões,
                antecipar oportunidades e tomar decisões com confiança. Quando informação e
                estratégia se encontram, resultados extraordinários se tornam realidade.
              </p>
            </CCol>
          </CRow>
        </CContainer>
      </section>

      {/* ===== FEATURES SECTION ===== */}
      <section id="features" className="features-section py-5">
        <CContainer>
          {/* Título */}
          <CRow className="mb-3">
            <CCol md={4} className="text-md-start text-center">
              <h2 className="fw-bold display-6">O que oferecemos</h2>
              <p className="lead mt-2">
                Descubra como informações precisas e insights inteligentes podem potencializar o
                sucesso do seu negócio.
              </p>
            </CCol>
          </CRow>

          {/* Features */}
          <CRow className="text-center g-4">
            {/* Item 1 */}
            <CCol md={3}>
              <img
                src={dash_inteligentes}
                alt="Workflows funcionais"
                className="img-fluid mb-3 rounded"
              />
              <h5 className="fw-bold text-start">Dashboards Inteligentes</h5>
              <p className="small text-muted text-start">
                Transforme seus dados em painéis visuais e acompanhe métricas importantes em tempo
                real, tomando decisões com mais precisão..
              </p>
            </CCol>

            {/* Item 2 */}
            <CCol md={3}>
              <img
                src={automacao_processos}
                alt="Soluções completas"
                className="img-fluid mb-3 rounded"
              />
              <h5 className="fw-bold text-start">Automação de Processos</h5>
              <p className="small text-muted text-start">
                Automatize tarefas repetitivas e otimize o tempo da sua equipe, permitindo foco no
                que realmente importa.
              </p>
            </CCol>

            {/* Item 3 */}
            <CCol md={3}>
              <img
                src={insights_estrategia}
                alt="Tecnologia avançada"
                className="img-fluid mb-3 rounded"
              />
              <h5 className="fw-bold text-start">Insights Estratégicos</h5>
              <p className="small text-muted text-start">
                Integre sistemas e processos, garantindo que suas operações fluam de forma eficiente
                e sem falhas.
              </p>
            </CCol>

            {/* Item 4 */}
            <CCol md={3}>
              <img
                src={img_funcionais}
                alt="Resultados garantidos"
                className="img-fluid mb-3 rounded"
              />
              <h5 className="fw-bold text-start">Workflows Funcionais</h5>
              <p className="small text-muted text-start">
                Integre sistemas e processos, garantindo que suas operações fluam de forma eficiente
                e sem falhas.
              </p>
            </CCol>
          </CRow>
        </CContainer>
        <CContainer className="mt-5">
          <CRow className="align-items-center">
            {/* ESQUERDA - IMAGEM */}
            <CCol md={5} className="text-end">
              <img
                src={inteligencia_mercado_grafic}
                alt="Dashboard"
                style={{
                  maxWidth: '100%',
                  borderRadius: '12px',
                  objectFit: 'contain',
                }}
              />
            </CCol>

            {/* COLUNA CENTRAL - ESPAÇO */}
            <CCol md={2}></CCol>
            {/* COLUNA ESQUERDA */}
            <CCol md={5}>
              <h1
                style={{
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  lineHeight: '1.2',
                  marginBottom: '1.5rem',
                  textAlign: 'start',
                }}
              >
                Transformando dados em <br />
                ações que fazem a diferença
              </h1>

              <p
                style={{
                  fontSize: '0.85rem',
                  marginBottom: '2rem',
                  color: '#333',
                  textAlign: 'start',
                }}
              >
                Nós ajudamos empresas a aproveitar o máximo de seus dados, conectando informações,
                processos e pessoas. Com nossos insights, você consegue tomar decisões mais rápidas,
                planejar de forma mais inteligente e alcançar resultados reais. Tudo isso de maneira
                prática, segura e eficiente, tornando a gestão do seu negócio mais simples e
                estratégica.
              </p>

              {/* ÍCONES */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  gap: '2rem',
                  width: '100%',
                }}
              >
                {/* Velocidade */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div
                    style={{
                      backgroundColor: '#000',
                      color: '#fff',
                      width: '48px',
                      height: '48px',
                      borderRadius: '8px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <FaBolt size={20} />
                  </div>
                  <span style={{ fontSize: '0.95rem' }}>
                    <strong>Velocidade</strong> e <br /> segurança
                  </span>
                </div>

                {/* Flexibilidade */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div
                    style={{
                      backgroundColor: '#000',
                      color: '#fff',
                      width: '48px',
                      height: '48px',
                      borderRadius: '8px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <FaExpand size={20} />
                  </div>
                  <span style={{ fontSize: '0.95rem' }}>
                    <strong>Flexibilidade</strong> e <br /> agilidade
                  </span>
                </div>

                {/* Colaboração */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div
                    style={{
                      backgroundColor: '#000',
                      color: '#fff',
                      width: '48px',
                      height: '48px',
                      borderRadius: '8px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <FaLink size={20} />
                  </div>
                  <span style={{ fontSize: '0.95rem' }}>
                    <strong>Melhor</strong> <br /> colaboração
                  </span>
                </div>
              </div>
            </CCol>
          </CRow>
        </CContainer>
      </section>

      {/* ===== DEPOIMENTOS SECTION ===== */}
      <section id="features-clientes" className="features-clientes py-5 pt-5">
        <CContainer>
          {/* Título */}
          <CRow className="mb-4">
            <CCol md={12} className="text-md-start text-center">
              <h2 className="fw-bold display-6">O que nossos clientes dizem</h2>
            </CCol>
          </CRow>

          {/* Depoimentos */}
          <CRow className="g-4 p-5">
            <CCol md={4}>
              <CCard className="h-100 shadow-sm border-0 p-3">
                <CCardBody>
                  <p className="fst-italic">
                    "Sou um depoimento. Clique aqui para editar seu próprio texto. Você também pode
                    alterar a fonte e mais. Use este espaço para compartilhar algo bom sobre você e
                    seus serviços."
                  </p>
                  <h6 className="mt-3 fw-bold mb-0">Diana Reis</h6>
                  <small className="text-muted">Missão D'</small>
                </CCardBody>
              </CCard>
            </CCol>

            <CCol md={4}>
              <CCard className="h-100 shadow-sm border-0 p-3">
                <CCardBody>
                  <p className="fst-italic">
                    "Sou um depoimento. Clique aqui para editar seu próprio texto. Você também pode
                    alterar a fonte e mais. Use este espaço para compartilhar algo bom sobre você e
                    seus serviços."
                  </p>
                  <h6 className="mt-3 fw-bold mb-0">Cliente Exemplo</h6>
                  <small className="text-muted">Empresa X</small>
                </CCardBody>
              </CCard>
            </CCol>

            <CCol md={4}>
              <CCard className="h-100 shadow-sm border-0 p-3">
                <CCardBody>
                  <p className="fst-italic">
                    "Sou um depoimento. Clique aqui para editar seu próprio texto. Você também pode
                    alterar a fonte e mais. Use este espaço para compartilhar algo bom sobre você e
                    seus serviços."
                  </p>
                  <h6 className="mt-3 fw-bold mb-0">João Lima</h6>
                  <small className="text-muted">TechOne</small>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
        </CContainer>
      </section>

      {/* ===== START SECTION ===== */}
      <section id="features-start" className="features-start py-5">
        <CContainer>
          <CRow className="text-center mb-4">
            <CCol>
              <h2 className="fw-bold">
                Prepare-se para turbinar sua produtividade com nossos workflows
              </h2>
              <p className="text-muted mt-3">
                Descubra soluções e métricas personalizadas para o seu negócio. Selecione o ramo da
                sua empresa e veja como nossas automações podem otimizar seus processos.
              </p>
            </CCol>
          </CRow>

          <CRow className="justify-content-center mb-4">
            <CCol md={6}>
              {/* Dropdown de seleção de ramo */}
              <select className="form-select mb-3">
                <option value="">Selecione o ramo da sua empresa</option>
                <option value="comercio">Comércio</option>
                <option value="industria">Indústria</option>
                <option value="servicos">Serviços</option>
                <option value="saude">Saúde</option>
                <option value="tecnologia">Tecnologia</option>
                <option value="educacao">Educação</option>
              </select>

              {/* Botão de ação */}
              <button className="btn btn-primary w-100">Ver recomendações</button>
            </CCol>
          </CRow>

          {/* Espaço para exibir métricas/automação personalizadas */}
          <CRow id="start-results" className="mt-4 text-center">
            {/* Aqui você pode renderizar os cards ou gráficos depois */}
          </CRow>
        </CContainer>
      </section>

      <AppFooterLanding />
    </div>
  )
}

export default LandingPage
