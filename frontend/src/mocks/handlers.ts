import { HttpResponse, http } from 'msw';

export const handlers = [
  http.get('api/team', () => {
    return HttpResponse.json(team);
  }),

  http.get('api/projects', () => {
    return HttpResponse.json(projects);
  }),
];

const team = [
  {
    id: 1,
    name: 'Larissa de Freitas',
    role: 'teachers',
    areaOfActivity: 'Área de atuação',
    social: {
      instagram: '',
      linkedin: '',
      github: '',
    },
  },
  {
    id: 2,
    name: 'Tobias Mulling',
    role: 'teachers',
    areaOfActivity: 'Coordenador Design UFPel',
    social: {
      instagram: '',
      linkedin: '',
      github: '',
    },
  },
  {
    id: 3,
    name: 'Samuel Lettnin',
    role: 'directors',
    areaOfActivity: 'Diretor Geral',
    social: {
      instagram: '',
      linkedin: '',
      github: '',
    },
  },
  {
    id: 4,
    name: 'Augusto Menchaca',
    role: 'directors',
    areaOfActivity: 'Área de atuação',
    social: {
      instagram: '',
      linkedin: '',
      github: '',
    },
  },
  {
    id: 5,
    name: 'Inácio Teixeira',
    role: 'directors',
    areaOfActivity: 'Área de atuação',
    social: {
      instagram: '',
      linkedin: '',
      github: '',
    },
  },
  {
    id: 6,
    name: 'Amanda Schiller',
    role: 'associated',
    areaOfActivity: 'Designer',
    social: {
      instagram: '',
      linkedin: '',
      github: '',
    },
  },
  {
    id: 7,
    name: 'Ruan Rodrigues',
    role: 'associated',
    areaOfActivity: 'Designer',
    social: {
      instagram: '',
      linkedin: '',
      github: '',
    },
  },
  {
    id: 8,
    name: 'Amanda Vieira',
    role: 'associated',
    areaOfActivity: 'Designer',
    social: {
      instagram: '',
      linkedin: '',
      github: '',
    },
  },
];

const projects = [
  {
    id: 1,
    name: 'Imobiliária Toni Neutzling',
    description:
      'Visualização e filtros para imóveis disponíveis para venda, locação ou temporada.',
    images: ['project1', 'project2', 'project3'],
    link: '#',
    link1: '#',
    link2: '#',
    link3: '#',
  },
  {
    id: 2,
    name: 'Pastejando',
    description:
      'App desenvolvido em parceria com a Embrapa que realiza cálculos em relação a plantações, hectares e cuidado dos animais',
    images: ['project2'],
    link: '#',
    link1: '#',
    link2: '#',
    link3: '#',
  },
  {
    id: 3,
    name: 'Plante Saúde',
    description:
      'Desenvolvido com o objetivo de auxiliar a identificação de plantas medicinais, para o tratamento de sintomas clínicos.',
    images: ['project3'],
    link: '#',
    link1: '#',
    link2: '#',
    link3: '#',
  },
];
