import React from 'react'
import { ShoppingBag, Factory, Users, HeartPulse, Cpu, GraduationCap } from 'lucide-react'

// 🔹 Categorias de cada ramo
const categoriasPorRamo = {
  comercio: {
    Varejo: ['Loja física', 'E-commerce', 'Supermercado', 'Boutique', 'Loja de conveniência'],
    Atacado: ['Distribuidora', 'Centro logístico', 'Marketplace B2B'],
    Alimentação: ['Restaurante', 'Lanchonete', 'Padaria', 'Cafeteria', 'Delivery'],
  },
  industria: {
    Manufatura: ['Metalurgia', 'Têxtil', 'Alimentos e bebidas', 'Automotiva', 'Móveis e decoração'],
    Distribuição: ['Produtos químicos', 'Equipamentos industriais', 'Insumos agrícolas'],
    Construção: ['Materiais de construção', 'Cimento e concreto', 'Pré-moldados'],
  },
  servicos: {
    Profissionais: ['Consultoria', 'Contabilidade', 'Jurídico', 'Marketing', 'RH'],
    Pessoais: ['Salão de beleza', 'Barbearia', 'Academia', 'Clínica estética'],
    'Logística e transporte': [
      'Transporte rodoviário',
      'Entregas urbanas',
      'Armazéns e armazenagem',
    ],
    Imobiliário: ['Corretora', 'Gestão de imóveis', 'Condomínios'],
  },
  saude: {
    'Clínicas e consultórios': ['Clínica geral', 'Odontologia', 'Fisioterapia', 'Psicologia'],
    'Laboratórios e diagnósticos': ['Análises clínicas', 'Imagem', 'Patologia'],
    'Hospitais e unidades médicas': [
      'Hospital geral',
      'Hospital especializado',
      'Pronto atendimento',
    ],
    Farmacêutico: ['Farmácia', 'Drogaria', 'Manipulação'],
  },
  tecnologia: {
    'Desenvolvimento de software': ['SaaS', 'Aplicativos', 'ERP/CRM', 'Soluções sob demanda'],
    Infraestrutura: ['Cloud', 'Hospedagem', 'Redes e servidores'],
    'Hardware e eletrônicos': ['Montagem de PCs', 'Equipamentos IoT', 'Automação residencial'],
    'Startups e inovação': ['Fintech', 'Healthtech', 'Edtech', 'Govtech'],
  },
  educacao: {
    'Instituições formais': ['Escola', 'Faculdade', 'Universidade', 'Centro técnico'],
    'Educação corporativa': ['Treinamentos', 'Mentorias', 'Desenvolvimento de liderança'],
    'Cursos livres': ['Idiomas', 'Tecnologia', 'Artes', 'Culinária', 'Música'],
  },
  agronegocio: {
    Produção: ['Agricultura', 'Pecuária', 'Hortifrutigranjeiros'],
    'Indústria agro': ['Cooperativas', 'Processamento de alimentos', 'Distribuição agrícola'],
    'Serviços de apoio': [
      'Máquinas agrícolas',
      'Consultoria agronômica',
      'Insumos e fertilizantes',
    ],
  },
  governo: {
    'Administração pública': ['Prefeituras', 'Órgãos estaduais', 'Entidades federais'],
    'Educação pública': ['Escolas municipais', 'Institutos federais'],
    'Saúde pública': ['UPAs', 'Hospitais públicos', 'Vigilância sanitária'],
  },
  terceiroSetor: {
    'ONGs e Institutos': ['Assistência social', 'Educação', 'Meio ambiente', 'Saúde'],
    Fundações: ['Cultura', 'Esporte', 'Direitos humanos'],
  },
}

// 🔹 Soluções e métricas por ramo
const solucoesPorRamo = {
  comercio: {
    icone: <ShoppingBag size={36} color="#f7f7f7ff" />,
    titulo: 'Comércio',
    metricas: [
      'Vendas por período',
      'Ticket médio por cliente',
      'Produtos mais vendidos',
      'Margem de lucro e giro de estoque',
      'Conversão de clientes online e presenciais',
    ],
    solucoes: [
      'Dashboard de vendas em tempo real',
      'Previsão de demanda com IA',
      'Gestão de estoque inteligente',
      'Relatórios automáticos de faturamento',
    ],
  },
  industria: {
    icone: <Factory size={36} color="#fefeffff" />,
    titulo: 'Indústria',
    metricas: [
      'Eficiência produtiva (OEE)',
      'Taxa de retrabalho e desperdício',
      'Custo por unidade produzida',
      'Tempo de ciclo de produção',
      'Controle de insumos e estoque',
    ],
    solucoes: [
      'Análises de produtividade e manutenção preventiva',
      'Controle de custos de produção',
      'Integração com ERP para relatórios automatizados',
    ],
  },
  servicos: {
    icone: <Users size={36} color="#f2f3f5ff" />,
    titulo: 'Serviços',
    metricas: [
      'Taxa de retenção de clientes',
      'Satisfação (NPS)',
      'Tempo médio de atendimento',
      'Receita por serviço',
    ],
    solucoes: [
      'Agendamento inteligente e gestão de agenda',
      'Painel de performance de atendimentos',
      'Relatórios automáticos de faturamento e feedback',
    ],
  },
  saude: {
    icone: <HeartPulse size={36} color="#f3f5f7ff" />,
    titulo: 'Saúde',
    metricas: [
      'Taxa de comparecimento de pacientes',
      'Tempo médio de espera e atendimento',
      'Produtividade de profissionais',
      'Receita por especialidade',
    ],
    solucoes: [
      'Agenda médica automatizada com lembretes',
      'Relatórios de produtividade clínica',
      'Análise de cancelamentos e faltas de pacientes',
    ],
  },
  tecnologia: {
    icone: <Cpu size={36} color="#fefeffff" />,
    titulo: 'Tecnologia',
    metricas: [
      'Tempo médio de resolução de chamados',
      'Retenção de clientes SaaS',
      'Crescimento de usuários ativos',
      'Receita recorrente mensal (MRR)',
    ],
    solucoes: [
      'Monitoramento de performance de sistemas',
      'Análise de churn e comportamento de usuários',
      'Relatórios de suporte técnico e SLA',
    ],
  },
  educacao: {
    icone: <GraduationCap size={36} color="#eef2f7ff" />,
    titulo: 'Educação',
    metricas: [
      'Taxa de evasão de alunos',
      'Desempenho médio por turma',
      'Satisfação dos alunos (NPS)',
      'Receita por curso',
    ],
    solucoes: [
      'Painel de acompanhamento acadêmico',
      'Automação de feedbacks e avaliações',
      'Análises preditivas de evasão',
    ],
  },
}

// 🔹 Exportação unificada
const DadosPorRamo = { categoriasPorRamo, solucoesPorRamo }

export default DadosPorRamo
