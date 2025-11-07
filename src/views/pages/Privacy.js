// src/views/pages/PoliticasPrivacidade.js
import React from 'react'
import { CContainer, CCard, CCardBody } from '@coreui/react'
import BackHomeButton from '../../components/BackHomeButton'

const PoliticasPrivacidade = () => {
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
              Política de Privacidade
            </h2>

            <p>
              A <strong>Expert BI Solutions</strong> valoriza a privacidade e a segurança dos dados
              de todos os usuários. Este documento explica como coletamos, utilizamos e protegemos
              as informações pessoais fornecidas em nossos serviços, sites e plataformas digitais.
            </p>

            <h5 className="mt-4 fw-semibold text-primary">1. Coleta de Informações</h5>
            <p>
              Coletamos apenas as informações necessárias para o funcionamento adequado dos nossos
              serviços — como nome, e-mail, telefone e dados corporativos — sempre fornecidos de
              forma voluntária pelos usuários, seja por meio de formulários, cadastros ou contato
              direto com nossa equipe.
            </p>

            <h5 className="mt-4 fw-semibold text-primary">2. Uso das Informações</h5>
            <p>
              As informações coletadas são utilizadas para oferecer uma melhor experiência ao
              usuário, personalizar o atendimento, enviar comunicações importantes, melhorar nossos
              produtos e cumprir obrigações legais e contratuais.
            </p>

            <h5 className="mt-4 fw-semibold text-primary">3. Compartilhamento de Dados</h5>
            <p>
              A <strong>Expert BI Solutions</strong> não compartilha, vende ou aluga informações
              pessoais a terceiros. O compartilhamento só ocorre em situações estritamente
              necessárias, como cumprimento de obrigações legais ou mediante autorização expressa do
              titular dos dados.
            </p>

            <h5 className="mt-4 fw-semibold text-primary">4. Segurança</h5>
            <p>
              Adotamos medidas técnicas e administrativas adequadas para proteger os dados pessoais
              contra acessos não autorizados, destruição, perda, alteração ou qualquer forma de
              tratamento indevido. Utilizamos protocolos seguros e monitoramento constante para
              garantir a integridade das informações.
            </p>

            <h5 className="mt-4 fw-semibold text-primary">5. Direitos dos Titulares</h5>
            <p>
              Em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018), o titular
              pode solicitar acesso, correção, exclusão ou portabilidade de seus dados pessoais.
              Para exercer esses direitos, entre em contato conosco por e-mail.
            </p>

            <h5 className="mt-4 fw-semibold text-primary">6. Contato</h5>
            <p>
              Em caso de dúvidas, solicitações ou reclamações sobre esta Política de Privacidade,
              entre em contato pelo e-mail:{' '}
              <a
                href="mailto:contato@expertbi.com.br"
                className="text-decoration-none fw-semibold"
                style={{ color: '#0b2b70' }}
              >
                contato@expertbi.com.br
              </a>
            </p>

            <p className="mt-4 text-center text-secondary small">
              Última atualização: Novembro de 2025
            </p>
            <BackHomeButton />
          </CCardBody>
        </CCard>
      </CContainer>
    </div>
  )
}

export default PoliticasPrivacidade
