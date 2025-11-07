import React from 'react'
import { useLocation } from 'react-router-dom'
import { CCard, CCardBody, CCardHeader } from '@coreui/react'

const Solucoes = () => {
  const location = useLocation()
  const { ramo, categoria } = location.state || {}

  return (
    <div className="container mt-4">
      <CCard>
        <CCardHeader className="bg-primary text-white fw-bold">
          Soluções para sua empresa
        </CCardHeader>
        <CCardBody>
          {ramo ? (
            <>
              <p>
                <strong>Ramo:</strong> {ramo}
              </p>
              {categoria && (
                <p>
                  <strong>Categoria:</strong> {categoria}
                </p>
              )}
              <hr />
              <p>
                Aqui você verá as automações, métricas e soluções personalizadas para o ramo
                selecionado. (Exemplo ilustrativo)
              </p>
            </>
          ) : (
            <p>Nenhum dado recebido. Retorne e selecione um ramo e categoria.</p>
          )}
        </CCardBody>
      </CCard>
    </div>
  )
}

export default Solucoes
