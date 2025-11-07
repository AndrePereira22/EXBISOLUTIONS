// src/routes.js
import React from 'react'

const LandingPage = React.lazy(() => import('./views/Landing/LandingPage'))
const Page404 = React.lazy(() => import('./views/pages/Page404'))
const Terms = React.lazy(() => import('./views/pages/Terms'))
const Privacy = React.lazy(() => import('./views/pages/Privacy'))
const FAQ = React.lazy(() => import('./views/pages/FAQ'))
const Cases = React.lazy(() => import('./views/pages/Cases'))
const Help = React.lazy(() => import('./views/pages/Help'))
const Solucoes = React.lazy(() => import('./views/solutions/Solucoes'))
const Servicos = React.lazy(() => import('./views/services/Servicos'))
const SobreNos = React.lazy(() => import('./views/sobre/SobreNos'))
const Clientes = React.lazy(() => import('./views/clientes/Clientes'))

const routes = [
  { path: '/', exact: true, name: 'Landing', element: <LandingPage /> },
  { path: '/terms', name: 'Termos de Uso', element: <Terms /> },
  { path: '/privacy', name: 'Política de Privacidade', element: <Privacy /> },
  { path: '/faq', name: 'FAQ', element: <FAQ /> },
  { path: '/cases-sucesso', name: 'Cases de Sucesso', element: <Cases /> },
  { path: '/solucoes', name: 'Soluções', element: <Solucoes /> },
  { path: '/servicos', name: 'Serviços', element: <Servicos /> },
  { path: '/sobre-nos', name: 'Sobre Nós', element: <SobreNos /> },
  { path: '/clientes', name: 'Clientes', element: <Clientes /> },
  { path: '/help', name: 'Ajuda', element: <Help /> },
  { path: '*', name: 'Página não encontrada', element: <Page404 /> },
]

export default routes
