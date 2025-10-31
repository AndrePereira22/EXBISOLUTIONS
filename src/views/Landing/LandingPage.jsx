import React from 'react'
import { CButton, CContainer, CRow, CCol, CCard, CCardBody } from '@coreui/react'
import { FaTwitter, FaEye, FaLaptopCode } from 'react-icons/fa'
import { HeaderLanding } from '../../components/header/index'
import { AppFooterLanding } from '../../components/footer/index'
import fundo from '../../assets/images/background_home.png'
import DashboardSlider from '../../components/DashboardSlider'

const LandingPage = () => {
  return (
    <div className="landing-wrapper">
      <HeaderLanding />

      {/* ===== HERO SECTION COM BACKGROUND (minHeight garantido) ===== */}
      <section
        className="hero-section"
        style={{
          position: 'relative',
          padding: '120px 0',
          color: '#f4f1ec',
          overflow: 'hidden',
          minHeight: '800px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {/* Camada da imagem de fundo */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${fundo})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            zIndex: 0,
          }}
        />

        {/* Camada escura por cima */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.7)', // controla a escuridão
            zIndex: 1,
          }}
        />

        {/* Conteúdo do Hero */}
        <CContainer
          fluid
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            height: '100vh',
            paddingTop: '25vh', // controla quão alto o texto fica
            zIndex: 2,
            textAlign: 'center',
            position: 'relative',
          }}
        >
          <CRow className="align-items-center">
            <CCol md={12} className="hero-text">
              <h1
                className="title"
                style={{
                  textShadow: '1px 1px 4px rgba(0,0,0,0.6)',
                  fontWeight: '700',
                }}
              >
                A forma mais esperta <br /> de controlar seus dados.
              </h1>
              <p
                className="subtitle"
                style={{
                  fontSize: '1.25rem',
                  marginBottom: '2rem',
                }}
              >
                Sou um título. Clique aqui para editar e adicionar o seu próprio texto..
              </p>
              <CButton color="primary" size="lg">
                Conhecer nossos serviços
              </CButton>
              {/* Slider abaixo do botão */}
              <div
                style={{
                  marginTop: '60px',
                  maxWidth: '900px',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  borderRadius: '20px',
                  position: 'relative',
                  overflow: 'visible',
                  zIndex: 5,
                  background: 'transparent', // ✅ remove fundo
                  padding: 0, // ✅ remove padding (parece borda)
                  boxShadow: 'none', // ✅ remove sombra se quiser total clean
                }}
              >
                <DashboardSlider />
              </div>
            </CCol>
          </CRow>
        </CContainer>
      </section>

      {/* ===== FEATURES SECTION (abaixo do background) ===== */}
      <section id="features" className="features-section py-5">
        <CContainer>
          <CRow className="text-center p-1 pb-1 g-3">
            <CCol className="px-6" md={4}>
              <CCard className="h-100 border-0 shadow-none">
                <CCardBody className="d-flex flex-column align-items-center justify-content-center">
                  <FaTwitter size={48} className="mb-3 text-primary" />
                  <h4 className="text-primary">História</h4>
                  <p>
                    Sou um parágrafo. Clique aqui para editar e adicionar o seu próprio texto. Sou
                    um ótimo lugar para você contar sua história.
                  </p>
                </CCardBody>
              </CCard>
            </CCol>

            <CCol className="px-4" md={4}>
              <CCard className="h-100 border-0 shadow-none">
                <CCardBody className="d-flex flex-column align-items-center justify-content-center">
                  <FaEye size={48} className="mb-3 text-primary" />
                  <h4 className="text-primary">Nossa Visão</h4>
                  <p>
                    Sou um parágrafo. Clique aqui para editar e adicionar o seu próprio texto. Sou
                    um ótimo lugar para você contar sua história.
                  </p>
                </CCardBody>
              </CCard>
            </CCol>

            <CCol className="px-4" md={4}>
              <CCard className="h-100 border-0 shadow-none">
                <CCardBody className="d-flex flex-column align-items-center justify-content-center">
                  <FaLaptopCode size={48} className="mb-3 text-primary" />
                  <h4 className="text-primary">Tecnologia</h4>
                  <p>
                    Sou um parágrafo. Clique aqui para editar e adicionar o seu próprio texto. Sou
                    um ótimo lugar para você contar sua história.
                  </p>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
        </CContainer>
      </section>

      {/* ===== FEATURES SECTION (abaixo do background) ===== */}
      <section id="features" className="features- py-5">
        <CContainer>
          <CRow className="text-center p-1 pb-1 g-3">
            <CCol className="px-6" md={4}>
              <CCard className="h-100 border-0 shadow-none">
                <CCardBody className="d-flex flex-column align-items-center justify-content-center">
                  <FaTwitter size={48} className="mb-3 text-primary" />
                  <h4 className="text-primary">História</h4>
                  <p>
                    Sou um parágrafo. Clique aqui para editar e adicionar o seu próprio texto. Sou
                    um ótimo lugar para você contar sua história.
                  </p>
                </CCardBody>
              </CCard>
            </CCol>

            <CCol className="px-4" md={4}>
              <CCard className="h-100 border-0 shadow-none">
                <CCardBody className="d-flex flex-column align-items-center justify-content-center">
                  <FaEye size={48} className="mb-3 text-primary" />
                  <h4 className="text-primary">Nossa Visão</h4>
                  <p>
                    Sou um parágrafo. Clique aqui para editar e adicionar o seu próprio texto. Sou
                    um ótimo lugar para você contar sua história.
                  </p>
                </CCardBody>
              </CCard>
            </CCol>

            <CCol className="px-4" md={4}>
              <CCard className="h-100 border-0 shadow-none">
                <CCardBody className="d-flex flex-column align-items-center justify-content-center">
                  <FaLaptopCode size={48} className="mb-3 text-primary" />
                  <h4 className="text-primary">Tecnologia</h4>
                  <p>
                    Sou um parágrafo. Clique aqui para editar e adicionar o seu próprio texto. Sou
                    um ótimo lugar para você contar sua história.
                  </p>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
        </CContainer>
      </section>

      <AppFooterLanding />
    </div>
  )
}

export default LandingPage
