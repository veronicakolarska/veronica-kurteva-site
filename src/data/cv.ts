export interface Position {
  title: string;
  period: string;
  bullets: string[];
}
export interface Experience {
  company: string;
  location: string;
  /** One-line homepage summary. Omit when the sources give no responsibilities. */
  summary?: string;
  positions: Position[];
}
export interface Education {
  degree: string;
  school: string;
  period: string;
}

export const summary =
  'Software developer working with C#, .NET and relational databases, with experience in backend applications, legacy modernisation and industrial software. Currently building backend services for a gaming platform, owning features end to end with an AI-assisted development workflow. Background in psychology, currently studying for a master’s in cognitive science.';

export const roles: Experience[] = [
  {
    company: 'EGT Digital',
    location: 'Sofia, Bulgaria · Hybrid',
    summary:
      'Backend services for the gaming platform, owned end to end, with AI-assisted development.',
    positions: [
      {
        title: '.NET Developer',
        period: 'Feb 2025 - Present',
        bullets: [
          'Developing and maintaining backend services for the gaming platform in C# and ASP.NET Core, with PostgreSQL, Redis and RabbitMQ, running in Docker.',
          'Owning features end to end, from design through release and support, and driving whole initiatives independently.',
          'Working with AI-assisted development as part of the daily workflow, using OpenCode with an in-house language model.',
          'Troubleshooting and monitoring services in production with Kibana.',
        ],
      },
    ],
  },
  {
    company: 'Accedia',
    location: 'Sofia, Bulgaria · Hybrid',
    summary: 'Web applications, ASP.NET Core migration and database development.',
    positions: [
      {
        title: 'Software Developer',
        period: 'Nov 2022 - Apr 2024',
        bullets: [
          'Developed, tested and maintained web application components using .NET technologies.',
          'Migrated legacy projects to ASP.NET Core and implemented database logic with SQL, Dapper and Entity Framework Core.',
          'Troubleshot application issues and collaborated with frontend developers, designers, product owners and other stakeholders.',
        ],
      },
    ],
  },
  {
    company: 'MentorMate',
    location: 'Sofia, Bulgaria · Hybrid',
    summary: 'Backend applications, third-party integrations, mentoring and code review.',
    positions: [
      {
        title: 'Software Developer',
        period: 'Mar 2022 - Nov 2022',
        bullets: [
          'Implemented server-side logic and third-party integrations using C# and .NET.',
          'Mentored junior developers, reviewed code and participated in training on communication, analytical thinking and remote teamwork.',
        ],
      },
      {
        title: 'Junior Software Developer',
        period: 'Feb 2021 - Apr 2022',
        bullets: [
          'Completed practical backend development training in .NET, ASP.NET Web API and WPF, with a focus on SOLID and DRY principles.',
        ],
      },
    ],
  },
  {
    company: 'Sensata Technologies',
    location: 'Sofia, Bulgaria',
    positions: [
      {
        title: 'Junior Software Engineer',
        period: 'Sep 2019 - Mar 2020',
        bullets: [
          'Developed and tested C# libraries for applications that control and automate manufacturing machinery.',
          'Integrated software with robotics, sensors and PLCs, and developed WPF interfaces.',
          'Worked with hardware and electrical engineers and equipment operators.',
        ],
      },
    ],
  },
  {
    company: 'Telepoint',
    location: 'Sofia, Bulgaria',
    positions: [
      {
        title: 'Network Operations Center Engineer',
        period: 'Jul 2017 - Apr 2018',
        bullets: [
          'Monitored critical data centre infrastructure and provisioned servers, networking services and fibre connections.',
          'Diagnosed hardware, software and connectivity issues and supported service migrations.',
        ],
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
    items: ['C#', '.NET', 'ASP.NET Core', 'ASP.NET Web API', 'LINQ', 'REST', 'OAuth 2.0'],
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
      'RabbitMQ',
      'Docker',
      'Kibana',
    ],
  },
  {
    group: 'Tools',
    items: ['Git', 'Azure DevOps', 'xUnit', 'Visual Studio', 'Jira', 'Confluence', 'OpenCode'],
  },
  {
    group: 'Practices',
    items: [
      'End-to-end feature ownership',
      'AI-assisted development',
      'Code review',
      'OOP',
      'SOLID',
    ],
  },
];

export const certifications = [
  'AWS Certified Cloud Practitioner',
  'CCNA - Cisco',
  'Kanban System Design - Kanban University',
  'Introduction to Artificial Intelligence - IBM',
];
export const interests = ['Mountain hiking', 'Travel', 'Swing dancing'];
