import React from 'react'
import { CContainer, CRow, CCol, CFooter, CLink } from '@coreui/react'
import ScrollToTopButton from '../ScrollToTopButton'
import { useNavigate } from 'react-router-dom'

const AppFooter = () => {
  const navigate = useNavigate()

  return (
    <CFooter
      style={{
        background: 'linear-gradient(135deg, #1c5dbeff 0%, #051936ff 100%)',
        borderTop: 'none',
      }}
      className="text-white pt-5"
    >
      <CContainer>
        {/* ========= SEÇÃO PRINCIPAL DO RODAPÉ ========= */}
        <CRow className="mb-4">
          {/* COLUNA 1 — Informações Legais */}
          <CCol md={3} sm={6} className="mb-4 text-start">
            <h6 className="fw-bold text-uppercase mb-3">Informações Legais</h6>

            <ul className="list-unstyled text-white-50">
              <li className="mb-2">
                <CLink href="#/terms" className="text-decoration-none text-white-50">
                  Termos de Uso
                </CLink>
              </li>
              <li className="mb-2">
                <CLink href="#/privacy" className="text-decoration-none text-white-50">
                  Política de Privacidade
                </CLink>
              </li>
              <li>CNPJ: 45.476.234/0001-48</li>
            </ul>
          </CCol>

          {/* COLUNA 2 — Recursos */}
          <CCol md={3} sm={6} className="mb-4 text-start">
            <h6 className="fw-bold text-uppercase mb-3">Recursos</h6>

            <ul className="list-unstyled text-white-50">
              <li className="mb-2">
                <CLink href="#/faq" className="text-decoration-none text-white-50">
                  FAQ
                </CLink>
              </li>
              <li className="mb-2">
                <CLink href="#/cases-sucesso" className="text-decoration-none text-white-50">
                  Cases de Sucesso
                </CLink>
              </li>
              <li>
                <CLink href="#/help" className="text-decoration-none text-white-50">
                  Help
                </CLink>
              </li>
            </ul>
          </CCol>
          {/* COLUNA 3 — Dashboards */}
          <CCol md={3} sm={6} className="mb-4 text-start">
            <h6 className="fw-bold text-uppercase mb-3 text-start">Dashboards</h6>

            <ul className="list-unstyled text-white-50">
              <li className="mb-2">
                <CLink
                  className="text-decoration-none text-white-50"
                  style={{ cursor: 'pointer' }}
                  onClick={() => navigate('/vendas')}
                >
                  Vendas & Receitas
                </CLink>
              </li>

              <li className="mb-2">
                <CLink
                  className="text-decoration-none text-white-50"
                  style={{ cursor: 'pointer' }}
                  onClick={() => navigate('/operacional')}
                >
                  Operações & Produtividade
                </CLink>
              </li>

              <li className="mb-2">
                <CLink
                  className="text-decoration-none text-white-50"
                  style={{ cursor: 'pointer' }}
                  onClick={() => navigate('/marketing')}
                >
                  Performance & Marketing
                </CLink>
              </li>

              <li>
                <CLink
                  className="text-decoration-none text-white-50"
                  style={{ cursor: 'pointer' }}
                  onClick={() => navigate('/comercial')}
                >
                  Avaliações & Satisfação
                </CLink>
              </li>
            </ul>
          </CCol>

          {/* COLUNA 4 — Contato */}
          <CCol md={3} sm={6} className="mb-4 text-start">
            <h6 className="fw-bold text-uppercase mb-3 text-light text-start">
              Redes & Comunicação
            </h6>

            <div className="social-icons d-flex align-items-center gap-3 justify-content-start">
              {/* WhatsApp */}
              <CLink
                href="https://wa.me/5587996230023?text=Olá!%20Gostaria%20de%20falar%20com%20um%20especialista%20da%20ExBi%20Solutions."
                target="_blank"
                className="social-icon whatsapp"
              >
                <i className="bi bi-whatsapp"></i>
              </CLink>

              {/* Instagram */}
              <CLink
                href="https://www.instagram.com/exbisolutions/"
                target="_blank"
                className="social-icon instagram"
              >
                <i className="bi bi-instagram"></i>
              </CLink>

              {/* Facebook */}
              <CLink
                href="https://www.facebook.com/profile.php?id=61583525792824"
                target="_blank"
                className="social-icon facebook"
              >
                <i className="bi bi-facebook"></i>
              </CLink>
            </div>

            {/* ESTILOS */}
            <style jsx>{`
              .social-icons a {
                font-size: 2rem;
                transition:
                  transform 0.25s ease,
                  filter 0.25s ease;
                color: #ffffffd9;
              }

              .social-icons a:hover {
                transform: scale(1.25);
                filter: brightness(1.4);
              }

              .social-icon.whatsapp {
                color: #25d366;
              }

              .social-icon.instagram {
                color: #e1306c;
              }

              .social-icon.facebook {
                color: #1877f2;
              }
            `}</style>
          </CCol>
        </CRow>

        {/* LINHA DIVISÓRIA */}
        <hr className="border-light opacity-50" />

        {/* ========= PARTE INFERIOR ========= */}
        <CRow className="justify-content-between align-items-center pb-3">
          <CCol md={6} className="text-start">
            <small className="text-white-50">
              © 2025 Expert BI Solutions. Todos os direitos reservados.
            </small>
          </CCol>

          <CCol md={6} className="text-end">
            <ScrollToTopButton />
          </CCol>
        </CRow>
      </CContainer>
    </CFooter>
  )
}

export default React.memo(AppFooter)
