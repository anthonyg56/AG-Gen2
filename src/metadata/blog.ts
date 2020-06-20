import { BlogMetadata as BlogMetaDataT  } from '../custom-types/blog'

const Post1: BlogMetaDataT = {
  author: 'Anthony Gayflor',
  title: 'Authentication Without a Custom Server - Next.Js, TypeScript, MongoDB',
  subTitle: 'Setting up the Dev Enviornment',
  slug: 'serverless-setup',
  date: '2020-05-10',
  category: 'Web Development',
  type: 'Tutorial',
  tags: [
    'Next.JS',
    'TypeScript',
    'MongoDB',
    'Tutorial',
    'Serverless',
    'Authentication',
    'Express.Js',
    'React.Js',
    'Series'
  ],
  stack: [
    'Next.Js',
    'TypeScript',
    'MongoDB'
  ],
  index: 1,
  series: {
    id: 'auth-with-out-server',
    index: 1,
    length: 5,
  },
  pagnation: {
    next: {
      slug: 'serverless-client-side',
      title: 'How to Handle Api Calls Without a Server',
      index: 2
    },
    previous: null
  }
}

const Post2: BlogMetaDataT = {
  author: 'Anthony Gayflor',
  title: 'How to Handle Api Calls Without a Server',
  subTitle: 'Client-Side Routing in Next.JS',
  slug: 'serverless-client-side',
  date: 'April 27th, 2020',
  category: 'Web Development',
  type: 'Tutorial',
  index: 2,
  stack: [
    'NextJs',
    'TypeScript',
    'MongoDB',
    'Server less'
  ],
  tags: [
    'Next.JS',
    'TypeScript',
    'MongoDB',
    'Tutorial',
    'Serverless',
    'Authentication',
    'React.Js'
  ],
  series: {
    id: 'auth-with-out-server',
    index: 1,
    length: 5,
  },
  pagnation: {
    next: {
      slug: 'serverless-client-side',
      title: 'How to Handle Api Calls Without a Server',
      index: 3
    },
    previous: {
      slug: 'serverless-setup',
      title: 'Authentication Without a Custom Server - Next.Js, TypeScript, MongoDB',
      index: 1
    }
  }
}

const Post3: BlogMetaDataT = {
  author: 'Anthony Gayflor',
  title: 'How to Handle Api Calls Without a Server',
  subTitle: 'Connecting to MongoDB',
  slug: 'serverless-mongodb',
  index: 3,
  stack: [
    'NextJs',
    'TypeScript',
    'MongoDB',
    'Server less'
  ],
  date: 'April 27th, 2020',
  category: 'Web Development',
  type: 'Tutorial',
  tags: [
    'Next.JS',
    'TypeScript',
    'MongoDB',
    'Tutorial',
    'Serverless',
    'Authentication',
    'React.Js'
  ],
  series: {
    id: 'auth-with-out-server',
    index: 3,
    length: 5
  },
  pagnation: {
    next: null,
    previous: {
      slug: 'serverless-client-side',
      title: 'How to Handle Api Calls Without a Server',
      index: 2
    }
  }
}

const BlogMetadata = [
  Post1,
  Post2,
  Post3
]

export default BlogMetadata