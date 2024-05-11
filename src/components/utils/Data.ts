import {
  Gamepad2,
  Headphones,
  Image,
  LucideIcon,
  Share2,
  Shirt,
  ShoppingCart,
  Ticket,
} from 'lucide-react';

export interface ISectionCardData {
  id: number;
  title: string;
  src: string;
  exp: string;
  snippetCount: number;
  progress: number;
  href?: string;
  
}

export interface IProjectSectionCardData {
  id: number;
  imageUrl?: string;
  icon?: string;
  title: string;
  techStack: string;
  href?: string;
}

export const projectCard: IProjectSectionCardData[] = [
  {
    id: 1,
    title: 'Login Form',
    techStack: 'React Js, Node Js, MongoDb,Chkra Ui, Tailwind CSS,Express Js',
    imageUrl: 'Login.jpg',
    href: 'https://github.com/imranali-dev/Backebd',
  },
  {
    id: 2,
    title: 'Real time caht',
    techStack:
      'React Js, Node Js, MongoDb,Chkra Ui, Tailwind CSS,Express Js',
    imageUrl: 'R.jpeg',
    href: 'https://github.com/imranali-dev/chat-app',
  },
  {
    id: 3,
    title: 'Amazon Clone',
    techStack:
      'Pure Css and Html',
    imageUrl: 'amazon-clone.jpeg',
    href: 'https://www.seotoolers.com/lander',
  },
  {
    id: 4,
    title: 'My Old Portfolio website',
    techStack: 'React js , Gsap',
    imageUrl: 'Screenshot from 2023-10-27 11-09-18.png',
    href: 'https://imranali13.pages.dev/',
  },
];

export const moreProjects = [
  {
    id: 1,
    title: 'Amazon Mini Project',
    techStack: 'Purs HTML and CSS',
    icon: 'shirt',
    href: '',
  },
  // {
  //   id: 2,
  //   title: 'Ethereum Lottery',
  //   techStack: 'Solidity, Ethers, Hardhat, Chai',
  //   icon: 'lottery',
  //   href: 'https://github.com/nwaliaez/HardhatLottery',
  // },
  // {
  //   id: 3,
  //   title: 'File Sharing App',
  //   techStack: 'Node js, Express, Web Sockets, Web RTC, React',
  //   icon: 'share',
  //   href: 'https://github.com/nwaliaez/filetransfer-webrtc',
  // },

  {
    id: 4,
    title: 'Snake Game',
    techStack: 'Tailwind CSS, React js',
    icon: 'game',
    href: 'https://voluble-bavarois-34a31e.netlify.app/',
  },
];


export const frontendCard: ISectionCardData[] = [
  {
    id: 1,
    title: 'HTML, CSS',
    src: '/tech/frontend/htmlcss.jpeg',
    exp: 'Check EJS FILE FOR JAVASCRIPT CODE',
    snippetCount: 3 ,
    progress: 30,
    href:'https://github.com/imranali-dev/SeoDeveloperTools'
  },
  {
    id: 3,
    title: 'Javascript, Typescript',
    src: '/tech/frontend/jsts.jpeg',
    exp: 'Eager to Resolve Challenges',
    snippetCount: 7 ,
    progress: 70,
    href:'https://github.com/imranali-dev/SeoDeveloperTools'
  },
  {
    id: 4,
    title: 'Reactjs',
    src: '/tech/frontend/reactjs.jpg',
    exp: 'Want to Know about basics',
    snippetCount: 7 ,
    progress: 70,
    href:'https://imranali13.pages.dev/'
  },
  {
    id: 5,
    title: 'Nextjs 14',
    src: '/tech/frontend/nextjs13.jpeg',
    exp: 'Want to Know about basics',
    snippetCount: 8,
    progress: 80,
    href:"https://github.com/imranali-dev/Next-js-learning",
  },
];

export const backendCard: ISectionCardData[] = [
  
  {
    id: 1,
    title: 'NodeJs',
    src: '/tech/backend/nodejs.webp',
    exp: 'Committed to Finding Solutions',
    snippetCount: 8 ,
    progress: 80,
    href:'https://github.com/imranali-dev/complet-Guideto-Rest-Api'
  },
  {
    id: 2,
    title: 'ExpressJs',
    src: '/tech/backend/express.png',
    exp: 'Enthusiastic about Problem-Solving',
    snippetCount: 9 ,
    progress: 90,
    href:'https://github.com/imranali-dev/Realtimechat'
  },
  {
    id: 3,
    title: 'NestJs',
    src: '/tech/backend/express.png',
    exp: 'Enthusiastic about Problem-Solving',
    snippetCount: 9 ,
    progress: 90,
    href:'https://github.com/imranali-dev/Realtimechat'
  }
];
100
export const databaseCard: ISectionCardData[] = [
  {
    id: 1,
    title: 'MySQL',
    src: '/tech/database/mysql.jpeg',
    exp: 'Not know much but as backend i will work on it',
    snippetCount: 20,
    progress: 20,
  },
  {
    id: 2,
    title: 'MongoDB',
    src: '/tech/database/mongo.png',
    exp: 'Dedicated to Troubleshooting',
    snippetCount: 7,
    progress: 90,
    href:''
  },
  {
    id: 4,
    title: 'PostgreSQL',
    src: '/tech/database/postgres.png',
    exp: 'One of the Most favourite Database',
    snippetCount: 10 ,
    progress: 100,
    href:'https://github.com/imranali-dev/Next-js-learning'
  },
  // {
  //   id: 5,
  //   title: 'Elastic Search',
  //   src: '/tech/database/elasticSearch.png',
  //   exp: '1 day ago',
  //   snippetCount: 1128,
  //   progress: 70,
  // },
];

export const devopsCards: ISectionCardData[] = [
  {
    id: 1,
    title: 'Docker',
    src: '/tech/devops/docker.webp',
    exp: 'Intensely Driven by Problem-Solving',
    snippetCount: 90,
    progress: 90,
  },
  {
    id: 2,
    title: 'Kubernetes',
    src: '/tech/devops/k8s.png',
    exp: 'Ardent Pursuit of Solutions',
    snippetCount: 10,
    progress: 10,
  },
  {
    id: 3,
    title: 'GIT',
    src: '/tech/devops/git.png',
    exp: 'Ardent Pursuit of Solutions',
    snippetCount: 60,
    progress: 60,
  },
  {
    id: 4,
    title: 'Redis',
    src: '/tech/devops/Reis.webp',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 70,
  },
  {
    id: 5,
    title: 'Terraform',
    src: '/tech/devops/terraform.png',
    exp: '1 day ago start learning',
    snippetCount: 0,
    progress: 10,
  },
];

export const web3Cards: ISectionCardData[] = [
  {
    id: 1,
    title: 'Solidity',
    src: '/tech/web3/solidity.jfif',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 90,
  },
  {
    id: 2,
    title: 'Hardhat',
    src: '/tech/web3/hardhat.jpeg',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 80,
  },
  {
    id: 3,
    title: 'Metamask',
    src: '/tech/web3/metamask.webp',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 90,
  },
  {
    id: 4,
    title: 'Chainlink',
    src: '/tech/web3/chainlink.png',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 80,
  },
  {
    id: 5,
    title: 'OpenZeppelin',
    src: '/tech/web3/openzeppelin.png',
    exp: '1 day ago',
    snippetCount: 1128,
    progress: 70,
  },
];

export const otherCards: ISectionCardData[] = [
  {
    id: 1,
    title: 'REST API Using Node JS',
    src: '/tech/others/rest.png',
    exp: 'Forever Curious and Exploring',
    snippetCount: 80,
    progress: 80,
    href:'https://github.com/imranali-dev/complet-Guideto-Rest-Api'
  },
  {
    id: 2,
    title: 'NIGIX',
    src: '/tech/others/soap.jpg',
    exp: 'Forever Curious and Exploring',
    snippetCount: 70,
    progress: 70,
    href:""
  },
  {
    id: 3,
    title: 'GraphQl',
    src: '/tech/others/graphql.png',
    exp: 'when Using Graphql with relational Database i give greate experince',
    snippetCount: 8,
    progress: 85,
    href:'https://github.com/imranali-dev/Next-js-learning'
  },
];
