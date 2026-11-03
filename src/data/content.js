export const profile = {
  name: 'Md Ibrahim',
  firstName: 'Md',
  lastName: 'Ibrahim',
  initials: 'mi',
  role: 'Software Engineer',
  stack: ['Laravel', 'PHP', 'Vue.js', 'TypeScript'],
  tagline:
    'I build business-critical web applications end to end — robust Laravel backends, complex financial & multi-tenant workflows, and intuitive Vue.js interfaces that scale.',
  linkedin: 'https://linkedin.com/in/md-ibrahim-7523a6187',
  linkedinHandle: 'in/md-ibrahim-7523a6187',
  email: 'ibrahim.cse242@gmail.com',
  github: 'https://github.com/ibrahim-sajib',
  githubHandle: 'ibrahim-sajib',
  whatsapp: 'https://wa.me/8801830908673',
  whatsappNumber: '+880 1830908673',
  phone: '+880 1830908673',
  resume: '/assets/pdf/Md_Ibrahim_CV.pdf',
}

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'research', label: 'Research & CP' },
  { id: 'contact', label: 'Contact' },
]

export const about = {
  paragraphs: [
    'I’m a Software Engineer at Softzino Technologies in Uttara, Dhaka, with 4 years of experience building business-critical web applications. I work primarily with Laravel and PHP on the backend alongside Vue.js, Inertia.js, and TypeScript on the frontend, designing reliable systems that support real operational needs.',
    'I have architected financial workflows for enterprise accounting (Accounts Payable, Receivable, General Ledger, Chart of Accounts), built multi-tenant HRMS modules with AWS KMS multi-layer encryption & 2FA, and led backend engineering for platforms serving 10,000+ registered users and 5,000+ mobile app downloads. Outside work, I have a deep foundation in Competitive Programming with 1,500+ solved problems and published deep learning research at ICCIT 2024.',
  ],
  facts: [
    { value: '4+', unit: 'years', label: 'building enterprise web applications' },
    { value: '10k+', unit: 'users', label: 'served across production platforms led' },
    { value: '1500+', unit: 'solved', label: 'algorithmic problems & ICPC regionalist' },
  ],
}

export const skillGroups = [
  {
    title: 'Backend Engineering',
    summary: 'Robust business logic, clean architecture, and security.',
    primary: ['Laravel', 'PHP'],
    items: ['Inertia.js', 'RESTful APIs', 'API Integration', 'Eloquent ORM', 'AWS KMS & Security', 'Queues & Workers', 'Sanctum & Passport', 'Multi-tenant Architecture'],
  },
  {
    title: 'Frontend Engineering',
    summary: 'Fast, responsive, and reactive interfaces that feel considered.',
    primary: ['Vue.js', 'TypeScript'],
    items: ['Vue 3', 'Nuxt.js', 'JavaScript (ES6+)', 'Tailwind CSS', 'HTML5 / CSS3', 'Component Design', 'Responsive UI'],
  },
  {
    title: 'Databases & Storage',
    summary: 'Schemas, query optimization, and tenant-aware data integrity.',
    primary: ['MySQL', 'PostgreSQL'],
    items: ['Schema Design', 'Query Optimization', 'Multi-Tenant Isolation', 'Transactions & Indexing', 'Database Migrations'],
  },
  {
    title: 'DevOps & Developer Tools',
    summary: 'Workflows, containerization, and continuous integration.',
    primary: ['Git & GitHub', 'Linux'],
    items: ['Docker & Compose', 'AWS Services', 'CI/CD Pipelines', 'Figma', 'VS Code', 'Postman', 'Payment Gateways'],
  },
]

export const projects = [
  {
    title: 'Enterprise Accounting System',
    kind: 'Enterprise & Finance',
    description:
      'A comprehensive accounting and financial workflow system managing Accounts Payable, Accounts Receivable, Vouchers, and General Ledger for business operations.',
    highlight:
      'Implemented Chart of Accounts, multi-tenant validation, and complex transaction handling to maintain data integrity across financial records.',
    stack: ['Laravel', 'Vue.js', 'Inertia.js', 'PostgreSQL', 'Multi-tenant'],
    demo: '#',
    repo: '#',
  },
  {
    title: 'Enterprise HRMS (ST-Hrms)',
    kind: 'Enterprise & Security',
    description:
      'A secure multi-tenant HRMS solution encompassing Payroll, Provident Fund (PF), and role-based authorization with organization-level data isolation.',
    highlight:
      'Engineered multi-layer encryption and decryption for sensitive payroll data using AWS KMS, administrator passphrases, key versioning, and 2FA protection.',
    stack: ['Laravel', 'Vue.js', 'AWS KMS', 'MySQL', '2FA'],
    demo: '#',
    repo: 'https://github.com/ibrahim-sajib',
  },
  {
    title: 'Bariplus — Backend Lead',
    kind: 'Real Estate & Marketplace',
    description:
      'A real estate and property advertising platform serving 10,000+ registered users, with high-concurrency REST APIs powering both the web platform and native Android app.',
    highlight:
      'Optimized API performance via query tuning and caching; the supported Android application has achieved 5,000+ downloads on Google Play.',
    stack: ['Laravel', 'Vue.js', 'MySQL', 'REST APIs', 'Android Backend'],
    demo: 'https://bariplusbd.com',
    repo: 'https://github.com/ibrahim-sajib',
  },
  {
    title: 'Palpis (Japan) — Pro-video',
    kind: 'Media & E-commerce',
    description:
      'A video-selling and content creator affiliate platform built from scratch for Japanese client requirements as part of a 2-member team.',
    highlight:
      'Implemented chunk-based video uploads supporting files up to 2GB and asynchronous queue processing to handle heavy video workloads reliably.',
    stack: ['Laravel', 'Vue.js', 'Inertia.js', 'MySQL', 'Queues'],
    demo: '#',
    repo: '#',
  },
  {
    title: 'Chatbox',
    kind: 'Real-time Messaging',
    description:
      'A real-time messaging application that allows registered users to connect, communicate, and exchange instant messages through individual conversations.',
    highlight:
      'Built with event-driven broadcasting, authentication guards, and low-latency websocket message dispatching.',
    stack: ['PHP', 'Laravel', 'Vue.js', 'MySQL', 'Pusher'],
    demo: '#',
    repo: 'https://github.com/ibrahim-sajib/chatbox',
  },
  {
    title: 'ACSBD Website',
    kind: 'E-commerce & Services',
    description:
      'An e-commerce and showcase platform developed for AC Service BD, providing an online portal to browse products, equipment, and customer service solutions.',
    highlight:
      'Built with a responsive catalog interface, product showcases, and client inquiry handling.',
    stack: ['PHP', 'Laravel', 'Vue.js', 'MySQL', 'Tailwind CSS'],
    demo: 'https://ac-service-bd.vercel.app',
    repo: '#',
  },
  {
    title: 'Task Management System',
    kind: 'Productivity & Workflow',
    description:
      'A task management application built to track status progressions, team deliverables, and project milestones.',
    highlight:
      'Engineered with state tracking (pending, in-progress, completed) and intuitive user dashboards.',
    stack: ['PHP', 'Laravel', 'Vue.js', 'MySQL'],
    demo: '#',
    repo: 'https://github.com/ibrahim-sajib/task-management',
  },
  {
    title: 'Plant Disease Prediction',
    kind: 'AI & Computer Vision',
    description:
      'An image classification deep learning system utilizing Convolutional Neural Networks (CNN) to detect and diagnose plant pathology from leaf photos.',
    highlight:
      'Trained CNN architecture on multi-class plant pathology datasets to identify leaf disease patterns with high accuracy.',
    stack: ['Python', 'CNN', 'Deep Learning', 'PyTorch / TF'],
    demo: '#',
    repo: 'https://github.com/ibrahim-sajib/plant-disease-prediction',
  },
]

export const experience = [
  {
    company: 'Softzino Technologies',
    position: 'Software Engineer',
    period: 'September 2022 – Present',
    location: 'Uttara, Dhaka',
    points: [
      'Implemented business-critical application workflows across Accounts Payable, Accounts Receivable, Vouchers, and General Ledger for an Enterprise Accounting System, translating complex financial rules into robust code.',
      'Developed Payroll, Provident Fund (PF), and Security modules for a multi-tenant HRMS, engineering multi-layer encryption/decryption using AWS KMS, admin passphrases, key versioning, and 2FA authorization.',
      'Led backend development for Bariplus (10,000+ registered users), designing and maintaining high-performance REST APIs for the web platform and an Android app with 5,000+ Google Play downloads.',
      'Successfully delivered international client engagements: built Palpis (Japan) video platform featuring 2GB chunked uploads and queues; served as Associate Lead on WordPress client solutions for Nexus-808 (Japan).',
    ],
  },
]

export const education = [
  {
    title: 'Bachelor of Science in Computer Science and Engineering',
    institution: 'Uttara University',
    year: '2019 – 2023',
    type: 'B.Sc. Degree',
    highlight: 'CGPA: 3.83 / 4.00 | Class Position: 2nd out of 50 students',
  },
]

export const research = {
  publications: [
    {
      title:
        'Deep Learning Approaches for Mango Species Classification: Performance Metrics and Model Comparisons',
      conference:
        '2024 27th International Conference on Computer and Information Technology (ICCIT)',
      authors:
        'Md. Sariful Islam, Jubayer Ahmed Shawon, Wahidur Rahman, Md Ibrahim, Mohammad Kaiser Ishaque, Md Tusher Ahmad Bappy, Kamrunnahar Mim, and Samia Yasmin',
      location: 'Cox’s Bazar, Bangladesh',
      year: '2024',
      badge: 'ICCIT 2024',
    },
    {
      title:
        'Enhancing Bangla Language Next Word Prediction and Sentence Completion through Extended RNN with Bi-LSTM Model On N-gram Language',
      conference: 'Research Project & Thesis',
      authors: 'Robiul Islam, Md Ibrahim, Tanzila Islam, Shamim Ara Sonia, Tanjida Dulon',
      badge: 'Research',
    },
  ],
  competitiveProgramming: {
    summary:
      'Solved 1,500+ programming problems using various data structures and algorithms. Participated in 500+ online programming contests and 15 onsite contests.',
    highlights: [
      {
        title: 'ACM ICPC Dhaka Regional',
        period: 'November 2022',
        description: 'Participated in the ACM ICPC Dhaka Regional contest representing Uttara University.',
      },
      {
        title: 'National Collegiate Programming Contest (NCPC)',
        period: 'October 2020',
        description: 'Participated in NCPC representing the university team in algorithms and graph theory.',
      },
      {
        title: 'PreCodeFest — Champion',
        period: 'November 2021',
        description: 'Secured 1st position with team Brain_Not_Found among 20 teams and 60 participants.',
      },
      {
        title: 'Dean’s Awards (3 Academic Years)',
        period: '2019, 2020, 2021',
        description: 'Awarded for three consecutive academic years for maintaining a CGPA above 3.75.',
      },
      {
        title: 'Vice President — Programming Club',
        period: 'Spring 2022 – Fall 2022',
        description:
          'Organized programming contests and conducted classes on data structures and algorithms at Uttara University.',
      },
    ],
    profiles: [
      { name: 'LeetCode', handle: 'SaJib_ShaYan', url: 'https://leetcode.com/SaJib_ShaYan/' },
      { name: 'StopStalk', handle: 'sajib_1999', url: 'https://www.stopstalk.com/user/profile/sajib_1999' },
      { name: 'LightOJ', handle: 'sajibshayan8', url: 'https://lightoj.com/user/sajibshayan8' },
      { name: 'Toph', handle: 'Sajib_uu', url: 'https://toph.co/u/Sajib_uu' },
    ],
  },
}
