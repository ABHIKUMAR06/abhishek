export const profile = {
  name: 'Abhishek Kumar',
  role: 'Backend & Full-Stack Developer',
  tagline:
    'I build backend APIs and full-stack web applications with Python, FastAPI and React.js — and wire them into the cloud, messaging and LLM services that make them useful.',
  location: 'Mandi, Himachal Pradesh, India',
  email: 'developer.abhishek.28@gmail.com',
  phone: '+91 8894393439',
  portfolio: 'https://abhishek-rust.vercel.app/',
  avatar: 'https://avatars.githubusercontent.com/u/182419352?v=4',
  available: true,
}

export const whatsapp = {
  /** Digits only, including country code — required by the wa.me format. */
  number: '918894393439',
  display: '+91 88943 93439',
  greeting: 'Hi Abhishek! I found your portfolio and would like to connect.',
}

export const whatsappHref = `https://wa.me/${whatsapp.number}?text=${encodeURIComponent(
  whatsapp.greeting,
)}`

export const socials = [
  { label: 'WhatsApp', handle: whatsapp.display, href: whatsappHref },
  { label: 'GitHub', handle: '@ABHIKUMAR06', href: 'https://github.com/ABHIKUMAR06' },
  { label: 'LinkedIn', handle: 'in/abhi-mern', href: 'https://www.linkedin.com/in/abhi-mern' },
  {
    label: 'Instagram',
    handle: '@abhi_rajput_28_',
    href: 'https://www.instagram.com/abhi_rajput_28_',
  },
]

export const stats = [
  { value: '1+', label: 'Years shipping production code' },
  { value: '3', label: 'Platforms contributed to' },
  { value: '9', label: 'Public repositories' },
]

export const about = [
  'I’m a software engineer at Code Garage Tech, where I build and maintain scalable web applications in Python, FastAPI and React.js. Most of my work sits on the backend: designing RESTful APIs that frontend clients depend on, then keeping them reliable through debugging and production fixes.',
  'A lot of what I enjoy is integration work — the messy seams where a product meets someone else’s platform. I’ve connected services to the OpenAI API for natural-language features, the WhatsApp Meta API and Twilio for high-volume messaging, and AWS for storage and monitoring.',
  'I started with a diploma in Computer Engineering and learned the rest by shipping. I’m looking for backend or full-stack roles where the work is scalable, production-ready systems.',
]

export type Experience = {
  role: string
  company: string
  period: string
  current?: boolean
  points: string[]
}

export const experience: Experience[] = [
  {
    role: 'Junior Software Engineer',
    company: 'Code Garage Tech',
    period: 'Feb 2026 — Present',
    current: true,
    points: [
      'Build and maintain scalable web applications with Python, FastAPI and React.js.',
      'Design and ship RESTful APIs consumed by frontend clients, improving reliability through debugging and production fixes.',
      'Collaborate in agile ceremonies — stand-ups, sprint planning and code reviews — to deliver features on schedule.',
    ],
  },
  {
    role: 'Software Engineer Intern',
    company: 'Code Garage Tech',
    period: 'Aug 2025 — Feb 2026',
    points: [
      'Implemented secure RESTful APIs and service integrations with clean, documented code.',
      'Followed engineering best practices for maintainability, testing readiness and version control with Git.',
    ],
  },
]

export type Project = {
  name: string
  blurb: string
  summary: string
  stack: string[]
  points: string[]
  href?: string
}

export const projects: Project[] = [
  {
    name: 'JigsawML',
    blurb: 'AI-Powered Architecture Platform',
    summary:
      'A platform that analyses codebases and surfaces AI-assisted insights over application data.',
    stack: ['Python', 'FastAPI', 'React.js', 'DynamoDB', 'AWS', 'OpenAI API'],
    points: [
      'Built FastAPI services for code analysis and AI-assisted insights over application data.',
      'Integrated the OpenAI API for natural-language queries and LLM-powered developer workflows.',
      'Modeled and queried Amazon DynamoDB for scalable storage, monitoring services with CloudWatch.',
      'Partnered with frontend engineers to connect React.js clients to backend APIs.',
    ],
  },
  {
    name: 'FloatChat',
    blurb: 'Omnichannel Customer Support Platform',
    summary:
      'A unified inbox bringing chat, email, WhatsApp and social channels into one place for support agents.',
    stack: [
      'Python',
      'FastAPI',
      'Node.js',
      'PostgreSQL',
      'Redis',
      'WhatsApp Meta API',
      'Twilio API',
    ],
    points: [
      'Contributed to an omnichannel support product with a unified inbox across chat, email, WhatsApp and social.',
      'Integrated the WhatsApp Meta API and Twilio API for live conversations and outbound campaigns.',
      'Implemented outbound messaging, delivery-status handling and reliable high-volume sending flows.',
      'Built backend APIs in Python and Node.js services for real-time, multi-channel agent engagement.',
    ],
  },
  {
    name: 'Your Ad Genius',
    blurb: 'AI-Powered Advertising Analytics',
    summary:
      'A private-beta analytics platform helping marketing and creative teams find patterns in campaign performance.',
    stack: ['Python', 'FastAPI', 'JavaScript', 'React.js', 'OpenAI API'],
    points: [
      'Helped marketing and creative teams analyse campaign performance and surface creative patterns through AI-driven insights.',
      'Contributed platform features supporting campaign performance tracking and creative analysis.',
      'Worked on backend services and API integrations supporting real-time data processing.',
      'Supported integration work connecting AI/LLM services to deliver actionable creative insights.',
    ],
  },
]

export type Repo = {
  name: string
  description: string
  language: string
  href: string
  demo?: string
}

export const repos: Repo[] = [
  {
    name: 'game',
    description: 'A browser game built with TypeScript and deployed on Vercel.',
    language: 'TypeScript',
    href: 'https://github.com/ABHIKUMAR06/game',
    demo: 'https://game-pearl-delta-74.vercel.app',
  },
  {
    name: 'BlogHub-Backend',
    description: 'REST API powering the BlogHub blogging platform.',
    language: 'JavaScript',
    href: 'https://github.com/ABHIKUMAR06/BlogHub-Backend',
  },
  {
    name: 'BlogHub-Frontend',
    description: 'Client application for BlogHub, consuming the BlogHub API.',
    language: 'JavaScript',
    href: 'https://github.com/ABHIKUMAR06/BlogHub-Frontend',
  },
  {
    name: 'ChaterX-backend',
    description: 'Backend services for ChaterX, a real-time chat application.',
    language: 'JavaScript',
    href: 'https://github.com/ABHIKUMAR06/ChaterX-backend',
  },
  {
    name: 'ChaterX-frontend',
    description: 'TypeScript frontend for the ChaterX chat experience.',
    language: 'TypeScript',
    href: 'https://github.com/ABHIKUMAR06/ChaterX-frontend',
  },
  {
    name: 'photo_compressor',
    description: 'A TypeScript utility for compressing images in the browser.',
    language: 'TypeScript',
    href: 'https://github.com/ABHIKUMAR06/photo_compressor',
  },
]

export const skills = [
  { group: 'Languages', items: ['Python', 'JavaScript', 'TypeScript', 'Node.js', 'SQL'] },
  { group: 'Backend', items: ['FastAPI', 'Express.js', 'RESTful APIs', 'JWT'] },
  { group: 'Frontend', items: ['React.js', 'HTML5', 'CSS3'] },
  { group: 'Databases', items: ['PostgreSQL', 'MongoDB', 'DynamoDB', 'MySQL', 'Redis'] },
  { group: 'Cloud', items: ['AWS S3', 'Amazon CloudWatch', 'Azure'] },
  { group: 'Messaging', items: ['WhatsApp Meta API', 'Twilio API'] },
  { group: 'AI / LLMs', items: ['OpenAI API', 'Prompt Engineering', 'LLM Integration'] },
  { group: 'Tools', items: ['Git', 'GitHub', 'Cursor', 'Claude Code'] },
]

export const education = {
  degree: 'Diploma in Computer Engineering',
  school: 'Govt. Millennium Polytechnic',
  period: '2022 — 2024',
}

export const interests = ['Listening to music', 'Travelling']

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Work', href: '#work' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]
