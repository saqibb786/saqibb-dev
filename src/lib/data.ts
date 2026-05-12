import type {
  PersonalInfo,
  Project,
  SkillCategory,
  Certification,
  Education,
  Activity,
} from './types';

export const personalInfo: PersonalInfo = {
  name: 'Saqib Ali Butt',
  tagline: 'Software Engineer | AI | Data Science | Full-Stack',
  description:
    'Building intelligent systems that see, understand, and predict.',
  philosophy:
    'Developing intelligent systems that see, understand, & predict. Transforming raw data into impactful solutions.',
  about:
    'I am a final-year Computer Science student at the University of Central Punjab, Lahore, building at the intersection of Software Engineering and Artificial Intelligence. I specialize in transforming complex data into intuitive products—whether that means training robust machine learning models or architecting fluid, scalable web applications using React and Next.js.\n\nBeyond building software, I am continuously pushing my boundaries. I hold an IBM Data Science Professional Certificate and recently ranked in the 98.5th percentile nationwide in the HEC National Skills Competency Test. Driven by a growing fascination with Generative AI, my ultimate goal is to engineer intelligent technology that is technically profound and genuinely useful.',
  email: 'saqibbutt10000@gmail.com',
  phone: '+92 324 4342068',
  whatsapp: 'https://wa.me/qr/XEFTOBUHK4NQD1',
  github: 'https://github.com/saqibb786',
  linkedin: 'https://www.linkedin.com/in/saqibb786',
  x: 'https://x.com/Saqibbdev',
  resumePath: '/SaqibbDev.pdf',
};

export const projects: Project[] = [
  {
    id: 'ecoscout',
    name: 'EcoScout',
    description:
      'Engineered real-time AI video analytics to detect vehicle littering and smoke emissions.',
    category: 'AI / Computer Vision',
    github: 'https://github.com/Saqibb786/EcoScout',
    featured: true,
  },
  {
    id: 'emotion-recognition',
    name: 'Multi-Class Emotion Recognition',
    description:
      'Developed a multi-label NLP model using GRU and BERT to classify emotions from text.',
    category: 'NLP / Deep Learning',
    github: 'https://github.com/Saqibb786/Emotion-Recognition-from-textual-data',
    featured: true,
  },
  {
    id: 'devpeaks',
    name: 'DevPeaks',
    description:
      'Architected a comprehensive developer platform to track progress, showcase skills, and build community.',
    category: 'Full Stack / TypeScript',
    github: 'https://github.com/Saqibb786/DevPeaks',
    liveLink: 'https://devpeaksolutions.vercel.app/',
    featured: true,
  },
  {
    id: 'heart-stroke-prediction',
    name: 'Heart Stroke Prediction',
    description:
      'Trained a machine learning model to predict heart stroke likelihood based on health metrics.',
    category: 'Machine Learning',
    github: 'https://github.com/Saqibb786/Heart-Stroke-Prediction',
    liveLink: 'https://heartstrokeprediction-by-saqib.streamlit.app/',
    featured: true,
  },
  {
    id: 'ocr-tool',
    name: 'OCR Tool',
    description:
      'Built a fast and reliable FastAPI service for optical character recognition and image-to-text conversion.',
    category: 'Python / FastAPI',
    github: 'https://github.com/Saqibb786/OCR-Dashboard-in-Python',
    featured: true,
  },
  {
    id: 'hr-real-estate',
    name: 'HR Real Estate',
    description:
      'Launched a premium real estate platform for DHA Lahore properties using Next.js 14 and Prisma.',
    category: 'Full Stack / Next.js',
    github: 'https://github.com/Saqibb786/HRRealEstate',
    featured: true,
  },
  {
    id: 'gamehub-clone',
    name: 'GameHub Clone',
    description:
      'Designed a responsive game discovery platform featuring a clean, component-driven React UI.',
    category: 'React / TypeScript',
    github: 'https://github.com/Saqibb786/GameHub',
    liveLink: 'https://game-hub-by-saqib.vercel.app',
    featured: false,
  },
  {
    id: 'aspen',
    name: 'Aspen',
    description:
      'Created an interactive React Native mobile application focused on smooth, intuitive user navigation.',
    category: 'React Native / Mobile',
    github: 'https://github.com/Saqibb786/Aspen',
    featured: false,
  },
  {
    id: 'heart-diabetes-prediction',
    name: 'Heart & Diabetes Prediction',
    description:
      'Implemented KNN and Naive Bayes algorithms to assess and predict heart and diabetes risks.',
    category: 'Machine Learning',
    github: 'https://github.com/Saqibb786/Heart_Diabetes_Prediction_FastApi',
    featured: false,
  },
  {
    id: 'vaultify',
    name: 'Vaultify',
    description:
      'Programmed a secure Java banking backend featuring robust transaction processing logic.',
    category: 'Java / Backend',
    github: 'https://github.com/Saqibb786/Vaultify',
    featured: false,
  },
  {
    id: 'ai-chef',
    name: 'AI Chef',
    description:
      'Built an intelligent recipe generator utilizing React to dynamically create culinary ideas.',
    category: 'React / AI',
    github: 'https://github.com/Saqibb786/AI-Chef',
    featured: false,
  },
  {
    id: 'meme-generator',
    name: 'Meme Generator',
    description:
      'Developed an interactive React application for creating custom memes via dynamic image APIs.',
    category: 'React / Frontend',
    github: 'https://github.com/Saqibb786/Meme-Generator',
    featured: false,
  },
  {
    id: 'react-static-pages',
    name: 'React Static Pages',
    description:
      'Constructed foundational static pages to master React components, styling, and structure.',
    category: 'React / Frontend',
    github: 'https://github.com/Saqibb786/Practice-React',
    featured: false,
  },
  {
    id: 'travel-journal',
    name: 'Travel Journal',
    description:
      'Designed a digital travel diary utilizing React architecture to map out global destinations.',
    category: 'React / Frontend',
    github: 'https://github.com/Saqibb786/Travel-Journal---React',
    featured: false,
  },
  {
    id: 'cli-expense-tracker',
    name: 'CLI Expense Tracker',
    description:
      'Scripted a persistent Python command-line application for tracking personal expenses via CSV.',
    category: 'Python / Scripting',
    github: 'https://github.com/Saqibb786/Expense-Tracker',
    featured: false,
  },
];

export const skillCategories: SkillCategory[] = [
  {
    name: 'AI / ML',
    skills: [
      'Python',
      'Machine Learning',
      'Deep Learning',
      'NLP',
      'Transformers',
      'Feature Engineering',
    ],
  },
  {
    name: 'Data Science',
    skills: ['Pandas', 'NumPy', 'Scikit-learn', 'Data Visualization'],
  },
  {
    name: 'Full Stack',
    skills: [
      'React',
      'Next.js',
      'Node.js',
      'TypeScript',
      'FastAPI',
      'PostgreSQL',
    ],
  },
  {
    name: 'Tools',
    skills: ['Git', 'Docker', 'Linux', 'VS Code'],
  },
];

export const certifications: Certification[] = [
  {
    name: 'IBM Data Science Professional Certificate',
    issuer: 'IBM (Coursera)',
    date: 'Jan 2025',
  },
  {
    name: 'Machine Learning with Scikit-learn, PyTorch & Hugging Face',
    issuer: 'DeepLearning.AI & Stanford',
    date: 'Ongoing',
    status: 'ongoing',
  },
  {
    name: 'Introduction to Generative AI',
    issuer: 'Google Cloud',
    date: '2025',
  },
  {
    name: 'Introduction to Large Language Models',
    issuer: 'Google Cloud',
    date: '2025',
  },
  {
    name: 'AI For Everyone',
    issuer: 'DeepLearning.AI',
    date: '2024',
  },
  {
    name: 'Google Prompting Essentials',
    issuer: 'Google',
    date: '2025',
  },
  {
    name: 'Complete Python Mastery',
    issuer: 'Code with Mosh',
    date: '2024',
  },
  {
    name: 'HTML5/CSS3/Javascript',
    issuer: 'Code with Mosh',
    date: '2023',
  },
  {
    name: 'React Native',
    issuer: 'ACM Society (UCP)',
    date: '2024',
  },
  {
    name: 'Graphic Designing',
    issuer: 'ACM Society (UCP)',
    date: '2025',
  },
];

export const education: Education[] = [
  {
    degree: 'Bachelors in Computer Science',
    institution: 'University of Central Punjab',
    year: 'Expected 2026',
    details: 'CGPA: 3.28 | 8th Semester',
  },
  {
    degree: 'Intermediate in Computer Science',
    institution: 'Punjab Group of Colleges',
    year: '2022',
    details: 'Computer Science fundamentals',
  },
];

export const activities: Activity[] = [
  {
    organization: 'TAAKRA 2026 (UCP)',
    role: 'Logistics Sub-Core',
    description:
      "Participated as Logistics Sub-Core in UCP's five-day mega event featuring 64 competitions, 22 categories, and cash prizes worth PKR 2,575,000.",
    year: 'Feb 2026',
  },
  {
    organization: 'IEEE Computer Society',
    role: 'Director Graphics',
    description:
      'Leading the design team for event branding, creating high-impact visuals, and managing digital assets for major society events.',
    year: 'Oct 2025 - Feb 2026',
  },
  {
    organization: 'ACM Management',
    role: 'Executive Member',
    description:
      'Organized technical workshops and student engagement activities, fostering a collaborative tech community on campus.',
    year: 'Past',
  },
  {
    organization: 'Welfare Society',
    role: 'Volunteer',
    description:
      'Active volunteer for the Esaar-e-Ramadan program, managing food distribution and logistics for community support initiatives.',
    year: 'Past',
  },
];
