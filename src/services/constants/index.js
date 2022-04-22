export const SERIAL_NUMBER_BOLETO = 9 ** 16

export const RANDOM_NUMER_BOLETO = Math.floor(Math.random() * SERIAL_NUMBER_BOLETO) + SERIAL_NUMBER_BOLETO

export const INITIAL_STATE_CHECKOUT = {
  nome: '',
  email: '',
  cpf: '',
  telefone: '',
  cep: '',
  endereco: '',
  select: '',
  validade: '',
  cardNumber: '',
  cvv: ''
}
export const AUTHORS = [
  {
    name: 'Bruno Fay',
    avatar: 'https://scontent.fpoa8-1.fna.fbcdn.net/v/t1.6435-9/57308546_2185311971563376_8153247580340355072_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=174925&_nc_eui2=AeGRxhmS-uwGpCZavD_tlXEEIsnzFEUlWh4iyfMURSVaHj6Pw00D5GL6osHcHfpd0k7215RPeqO070tgUattjJqA&_nc_ohc=PwApsE03BZwAX8tVvoi&_nc_ht=scontent.fpoa8-1.fna&oh=00_AT9GWKH7tXwQyIeUqzTLnfpCE-J1XreKR6MJSVccNAMWNQ&oe=62863808',
    linkedin: 'https://www.linkedin.com/in/brunofay/',
    github: 'https://github.com/BrunoFay'
  },
  {
    name: 'Felipe Sanches',
    avatar: 'https://media-exp1.licdn.com/dms/image/D4E35AQHn1jGh-RrSSg/profile-framedphoto-shrink_800_800/0/1646687838805?e=2147483647&v=beta&t=_VmuukyXrvrBVHykZNPpLBN2nauESMkmZJg93EBJ3Rk',
    linkedin: 'https://www.linkedin.com/in/felipesanchesm/',
    github: 'https://github.com/sanchesm92'
  },
  {
    name: 'Felipe Pulgas',
    avatar: 'https://media-exp1.licdn.com/dms/image/D5635AQEIvSH3loRECA/profile-framedphoto-shrink_800_800/0/1649364478781?e=2147483647&v=beta&t=AGFS_Gc6Ks6eHMC4J6xVy_Q1WfQrzLlpxIGbFMir0xw',
    linkedin: 'https://www.linkedin.com/in/felipe-pugas/',
    github: 'https://github.com/felipepugas'
  },
  {
    name: 'Kevin Senna',
    avatar: 'https://media-exp1.licdn.com/dms/image/D4D35AQHO0mcDW0B4vg/profile-framedphoto-shrink_800_800/0/1646673944969?e=2147483647&v=beta&t=e2CzdxJG3C81kQYZJ8zR98FEl4Marst-GweFNoyeQj4',
    linkedin: 'https://www.linkedin.com/in/kevinsena/',
    github: 'https://github.com/KevinSena?tab=repositories'
  }]

export const INITIAL_STATE_PRODUCTSINCART = {
  total: 0,
  countItens: 1,
  buttonDisable: false,
}

export const CATEGORIES_NAMES_TO_REMOVE = ['Imóveis', 'Ingressos', 'Serviços', 'Festas e Lembrancinhas', 'Câmeras e Acessórios', 'Carros, Motos e Outros', 'Brinquedos e Hobbies', 'Antiguidades e Coleções', 'Música, Filmes e Seriados', 'Agro', 'Arte, Papelaria e Armarinho', 'Indústria e Comércio', 'Bebês', 'Ferramentas', 'Construção']

export const INITIAL_STATE_HEADERSTATES_PROVIDER = {
  searchInput: '',
  searchResult: [],
  buttonClicked: false,
  loading: false,
  itensInCart: [],
  categories: [],
}

export const INITIAL_STATE_PRODUCTSTATES_PROVIDER = {
  itensInCart: [],
  categories: [],
  productDetail: {},
}
