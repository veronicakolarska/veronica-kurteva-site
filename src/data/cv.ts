export interface Position {
  title: string;
  period: string;
  bullets: string[];
  /** Technologies shown as labels under the position. */
  tech?: string[];
}
export interface Experience {
  company: string;
  location: string;
  /** Short homepage points, written from the LinkedIn description. */
  highlights?: string[];
  positions: Position[];
}
export interface Education {
  degree: string;
  school: string;
  period: string;
}

export const summary =
  'Software developer working with C#, .NET and relational databases, with experience in backend applications, legacy modernisation and industrial software. Currently building microservices for player communications and segmentation across several iGaming brands, using LLM coding assistants. Background in psychology, currently studying for a master’s in cognitive science.';

export const roles: Experience[] = [
  {
    company: 'EGT Digital',
    location: 'Sofia, Bulgaria · Hybrid',
    highlights: [
      'Build microservices that message players and sort them into groups, for several iGaming brands.',
      'Connected seven messaging channels, including email, SMS, Viber, WhatsApp and push.',
      'Built segment filters, previews and CSV exports that other services use through a REST API and Kafka.',
      'Cut database load by 20% by reworking the Redis caching.',
      'Find and fix production issues with PostgreSQL, logs, Grafana and Kibana.',
      'Use LLM coding assistants every day, and review and test what they write.',
    ],
    positions: [
      {
        title: '.NET Developer',
        period: 'Feb 2025 - Present',
        bullets: [
          'I build and maintain microservices for player communications and segmentation across several iGaming brands.',
          'Connected seven messaging channels, including email, SMS, Viber, WhatsApp and push, with provider setup, templates and delivery callbacks.',
          'Built the player segmentation features: filters, combined segments, validation, previews and CSV exports. Other services use them through a REST API and Kafka.',
          'Reworked the Redis caching for segmentation filters, which cut database load by 20%.',
          'Track down production problems with data accuracy and notification delivery using PostgreSQL, logs, Grafana and Kibana.',
          'Use LLM coding assistants to work faster, and review and test everything they produce.',
        ],
        tech: [
          '.NET 8',
          'C#',
          'ASP.NET Core',
          'PostgreSQL',
          'Redis',
          'Kafka',
          'REST APIs',
          'Microservices',
          'Jenkins',
          'Grafana',
          'Kibana',
          'LLM coding assistants',
        ],
      },
    ],
  },
  {
    company: 'Accedia',
    location: 'Sofia, Bulgaria · Hybrid',
    highlights: [
      'Worked on insurance fintech software in a Scrum team.',
      'Moved two older projects from .NET Framework to ASP.NET Core.',
      'Built backend components and REST APIs in C# on SQL Server.',
      'Fixed production bugs in two applications.',
    ],
    positions: [
      {
        title: 'Software Developer',
        period: 'Nov 2022 - Apr 2024',
        bullets: [
          'Moved two legacy projects from .NET Framework to ASP.NET Core, which made them more reliable.',
          'Built and maintained backend components and REST APIs in C#, using Entity Framework Core and Dapper on SQL Server.',
          'Found and fixed production bugs in two applications.',
          'Worked in a Scrum team with frontend developers, designers and product owners on insurance fintech software.',
        ],
        tech: [
          'C#',
          'ASP.NET Core',
          '.NET Framework',
          'SQL Server',
          'Entity Framework Core',
          'Dapper',
          'REST APIs',
        ],
      },
    ],
  },
  {
    company: 'MentorMate',
    location: 'Sofia, Bulgaria · Hybrid',
    highlights: [
      'Started in a bootcamp that turned into a full-time job.',
      'Learned .NET, ASP.NET Web API and WPF, with a focus on SOLID and DRY.',
      'Built server-side logic and third-party integrations for financial software.',
      'Mentored two junior developers and reviewed their code.',
    ],
    positions: [
      {
        title: 'Software Developer',
        period: 'Mar 2022 - Nov 2022',
        bullets: [
          'Built server-side logic and third-party integrations in C# and ASP.NET Core for financial software.',
          'Mentored two junior developers and reviewed their code.',
          'Took part in training on client communication, written communication, analytical thinking, prioritisation and remote teamwork.',
        ],
        tech: ['C#', '.NET Core', 'ASP.NET Core'],
      },
      {
        title: 'Junior Software Developer',
        period: 'Feb 2021 - Feb 2022',
        bullets: [
          'Joined through an intensive software development bootcamp that turned into a full-time job.',
          'Learned backend development with .NET, ASP.NET Web API and WPF, with a focus on OOP principles such as SOLID and DRY.',
        ],
        tech: ['.NET', 'ASP.NET Web API', 'WPF'],
      },
    ],
  },
  {
    company: 'Sensata Technologies',
    location: 'Sofia, Bulgaria · On-site',
    positions: [
      {
        title: 'Junior Software Engineer',
        period: 'Sep 2019 - Feb 2020',
        bullets: [
          'Wrote and maintained a C# library for applications that control and automate the machines that make mechanical parts.',
          'Connected the software to industrial hardware such as robots, sensors and PLCs.',
          'Built the user interfaces in WPF.',
          'Worked with hardware engineers, electrical engineers and machine operators to make sure the software met their needs.',
        ],
        tech: ['C#', 'WPF', 'PLC programming'],
      },
    ],
  },
  {
    company: 'Telepoint',
    location: 'Sofia, Bulgaria · On-site',
    positions: [
      {
        title: 'Network Operations Center Engineer',
        period: 'Jul 2017 - Apr 2018',
        bullets: [
          'Monitored the data centre’s critical infrastructure.',
          'Provisioned services: racked servers, spliced fibre, configured IP services, installed operating systems and built cross-connects.',
          'Troubleshot data centre and customer issues, from fibre measurements with an OTDR and power meter to server, switch and router diagnostics, service migrations and connectivity problems.',
        ],
        tech: ['Cisco networking', 'Network administration', 'OTDR'],
      },
    ],
  },
];

export const additionalExperience: Experience[] = [
  {
    company: 'Blocks Rehabilitation Hospital',
    location: 'Sofia, Bulgaria · Part-time',
    positions: [
      {
        title: 'Psychologist Intern',
        period: 'May 2024 - Dec 2024',
        bullets: [
          'Supported psychological art therapy activities for people with dementia, cognitive impairment and Alzheimer’s disease, using reminiscence and stimulation.',
        ],
      },
    ],
  },
  {
    company: 'Private School “Dr Petar Beron”',
    location: 'Sofia, Bulgaria · Part-time',
    positions: [
      {
        title: 'Information Technology Teacher Intern',
        period: 'Dec 2016 - Mar 2017',
        bullets: [
          'Taught basic computer skills and helped students prepare small website projects for an olympiad.',
        ],
      },
    ],
  },
];

export const education: Education[] = [
  {
    degree: 'Master’s degree, Cognitive Science',
    school: 'New Bulgarian University',
    period: 'Oct 2025 - Present',
  },
  {
    degree: 'Bachelor’s degree, Cognitive Science and Psychology',
    school: 'New Bulgarian University',
    period: '2021 - 2025',
  },
  {
    degree: 'Bachelor’s degree, Computer Science',
    school: 'New Bulgarian University',
    period: '2014 - 2018',
  },
];

export const skills = [
  {
    group: 'Backend development',
    items: [
      'C#',
      '.NET',
      'ASP.NET Core',
      'ASP.NET Web API',
      'Microservices',
      'LINQ',
      'REST',
      'OAuth 2.0',
    ],
  },
  {
    group: 'Data & infrastructure',
    items: [
      'PostgreSQL',
      'SQL Server',
      'SQL',
      'Entity Framework Core',
      'Dapper',
      'Redis',
      'Kafka',
      'Grafana',
      'Kibana',
    ],
  },
  {
    group: 'Tools',
    items: ['Git', 'Jenkins', 'Azure DevOps', 'xUnit', 'Visual Studio', 'Jira', 'Confluence'],
  },
  {
    group: 'Practices',
    items: ['AI-assisted development', 'Code review', 'OOP', 'SOLID'],
  },
];

export const certifications = [
  'AWS Certified Cloud Practitioner',
  'CCNA - Cisco',
  'Kanban System Design - Kanban University',
  'Introduction to Artificial Intelligence - IBM',
];
export const interests = ['Mountain hiking', 'Travel', 'Lindy hop dancing'];
