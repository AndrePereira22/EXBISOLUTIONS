import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilCalendar,
  cilSpeedometer,
  cilListRich,
  cilLockLocked,
  cilSettings,
  cilChartPie,
  cilPlus,
  cilGroup,
  cilDescription,
  cilBell,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard/home',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Profissionais',
  },
  {
    component: CNavItem,
    name: 'Cadastrar Profissional',
    to: '/dashboard/profissionais/cadastrar',
    icon: <CIcon icon={cilPlus} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Listar Profissionais',
    to: '/dashboard/profissionais/listar',
    icon: <CIcon icon={cilListRich} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Serviços',
  },
  {
    component: CNavItem,
    name: 'Cadastrar Serviço',
    to: '/dashboard/servicos/cadastrar',
    icon: <CIcon icon={cilPlus} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Listar Serviços',
    to: '/dashboard/servicos/listar',
    icon: <CIcon icon={cilListRich} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Agendamentos',
  },
  {
    component: CNavGroup,
    name: 'Minha Agenda',
    to: '/agendamentos',
    icon: <CIcon icon={cilCalendar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Agenda do Dia',
        to: '/dashboard/agenda/agendamentos-do-dia',
      },
      {
        component: CNavItem,
        name: 'Histórico',
        to: '/dashboard/agenda/historico-de-agendas',
      },
    ],
  },
  {
    component: CNavTitle,
    name: 'Usuários',
  },
  {
    component: CNavItem,
    name: 'Gerenciar Usuários',
    to: '/dashboard/usuarios/gerenciar',
    icon: <CIcon icon={cilGroup} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Permissões/Acessos',
    to: '/dashboard/usuarios/permissoes-&-acessos',
    icon: <CIcon icon={cilLockLocked} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Configurações',
  },
  {
    component: CNavItem,
    name: 'Dados da Empresa',
    to: '/dashboard/configuracoes/dados-empresa',
    icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Plano & Assinatura',
    to: '/dashboard/configuracoes/plano-assinatura',
    icon: <CIcon icon={cilSettings} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Notificações',
    to: '/dashboard/configuracoes/notificacoes',
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Relatórios',
  },
  {
    component: CNavItem,
    name: 'Relatórios Gerais',
    to: '/dashboard/relatorios/geral',
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
  },
]

export default _nav
