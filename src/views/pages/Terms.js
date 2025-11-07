// src/views/pages/Terms.js
import React from 'react'
import { Link } from 'react-router-dom'
import { CContainer, CCard, CCardBody } from '@coreui/react'
import BackHomeButton from '../../components/BackHomeButton'

const Terms = () => (
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
    <CContainer style={{ maxWidth: '950px' }}>
      <CCard
        className="shadow border-0 rounded-4"
        style={{
          backgroundColor: '#e9eaecff',
          color: '#1a1a1a',
          lineHeight: '1.7',
          fontSize: '1.05rem',
        }}
      >
        <CCardBody className="p-5">
          <h2 className="text-center mb-4 fw-bold" style={{ color: '#0b2b70' }}>
            Termos de Uso
          </h2>

          <p>
            Bem-vindo(a) ao site da <strong>Expert BI Solutions</strong>. Ao acessar e utilizar
            nossos serviços, você concorda integralmente com os presentes Termos de Uso.
            Recomendamos a leitura atenta antes de prosseguir.
          </p>

          <h5 className="mt-4 fw-semibold text-primary">1. Objetivo do Site</h5>
          <p>
            O site da <strong>Expert BI Solutions</strong> tem como objetivo apresentar informações
            sobre nossos serviços de Business Intelligence, automação de relatórios e integração de
            dados. As informações apresentadas possuem caráter informativo e institucional.
          </p>

          <h5 className="mt-4 fw-semibold text-primary">2. Uso Autorizado</h5>
          <p>
            O acesso ao site é permitido para fins pessoais ou profissionais, desde que respeitados
            os direitos de propriedade intelectual. É vedada a cópia, reprodução, distribuição ou
            modificação de qualquer conteúdo sem autorização expressa da{' '}
            <strong>Expert BI Solutions</strong>.
          </p>

          <h5 className="mt-4 fw-semibold text-primary">3. Propriedade Intelectual</h5>
          <p>
            Todo o conteúdo deste site — incluindo logotipos, textos, imagens e gráficos — é de
            propriedade exclusiva da <strong>Expert BI Solutions</strong> e seus licenciadores,
            protegido por direitos autorais e leis de propriedade industrial.
          </p>

          <h5 className="mt-4 fw-semibold text-primary">4. Privacidade e Proteção de Dados</h5>
          <p>
            A <strong>Expert BI Solutions</strong> trata os dados pessoais de acordo com a Lei Geral
            de Proteção de Dados (Lei nº 13.709/2018). Suas informações são utilizadas apenas para
            fins de comunicação e prestação de serviços. Para mais detalhes, acesse nossa{' '}
            <Link
              to="/privacy"
              className="text-decoration-none fw-semibold"
              style={{ color: '#0b2b70' }}
            >
              Política de Privacidade
            </Link>
            .
          </p>

          <h5 className="mt-4 fw-semibold text-primary">5. Limitação de Responsabilidade</h5>
          <p>
            A <strong>Expert BI Solutions</strong> busca manter as informações do site sempre
            atualizadas e corretas, mas não se responsabiliza por eventuais falhas,
            indisponibilidades temporárias ou perdas decorrentes do uso das informações
            disponibilizadas.
          </p>

          <h5 className="mt-4 fw-semibold text-primary">6. Alterações nos Termos</h5>
          <p>
            A <strong>Expert BI Solutions</strong> reserva-se o direito de alterar estes Termos de
            Uso a qualquer momento, sem aviso prévio. As alterações passam a valer a partir da data
            de publicação nesta página.
          </p>

          <h5 className="mt-4 fw-semibold text-primary">7. Contato</h5>
          <p>
            Caso tenha dúvidas sobre estes Termos de Uso ou nossos serviços, entre em contato pelo
            e-mail:{' '}
            <a
              href="mailto:contato@expertbi.com.br"
              className="text-decoration-none fw-semibold"
              style={{ color: '#0b2b70' }}
            >
              contato@expertbi.com.br
            </a>
          </p>

          <p className="text-center mt-5 small">
            © {new Date().getFullYear()} Expert BI Solutions — Todos os direitos reservados.
          </p>
          <BackHomeButton />
        </CCardBody>
      </CCard>
    </CContainer>
  </div>
)

export default Terms
