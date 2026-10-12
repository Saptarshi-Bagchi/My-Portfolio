export const site = {
  name: 'Saptarshi Bagchi', initials: 'Portfolio',
  title: 'Full-Stack Developer | CSE (IoT) Student',
  tagline: 'React & Node.js developer building full-stack web apps, embedded systems integrations, and developer tools',
  email: 'saptarshibagchi.05@gmail.com', github: 'https://github.com/Saptarshi-Bagchi', linkedin: 'https://www.linkedin.com/in/saptarshi-bagchi-104a26343',
}

export const navigation = [
  { label: 'About', href: '#about' }, { label: 'Education', href: '#education' }, { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' }, { label: 'Projects', href: '#projects' }, { label: 'Accomplishments', href: '#accomplishments' }, { label: 'Certificates', href: '#certificates' }, { label: 'Contact', href: '#contact' },
]

export const about = {
  heading: 'About me',
  text: '3rd-year B.Tech CSE (IoT) student at Institute of Technical Education and Research, SoA University (2024-2028), Bhubaneswar, with a strong foundation in DSA, OOPS, and REST API design.',
}

export const education = [
  { level: 'College', institution: 'Institute of Technical Education and Research, SoA University', qualification: 'B.Tech', field: 'Computer Science & Engineering (IoT)', dates: '09/2024 - 06/2028', location: 'Bhubaneswar', grade: 'CGPA: 8.19', details: 'Relevant coursework includes DSA, OOPS, and FPGA Programming.' },
  { level: 'School', institution: 'Sudhir Memorial Institute', qualification: 'Higher Secondary Education', field: 'Science, CBSE', dates: '04/2022 - 04/2024', location: 'Madhyamgram', grade: '', details: 'Completed 10+2 under the CBSE board with Science stream.' },
]

export const accomplishments = [
  { title: 'LeetCode Streak', description: 'Maintained a consistent practice streak while working on core DSA topics and Dynamic Programming.', highlight: '250+ days' },
  { title: 'SIH Ideathon 2026', description: 'Built a Sensor-Data Dashboard for an IoT project and placed among the top teams.', highlight: 'Top 50' },
]

export const skillGroups = [
  { name: 'Languages', skills: ['Java', 'Python', 'HTML', 'CSS', 'JavaScript', 'TypeScript'] },
  { name: 'Frameworks & Libraries', skills: ['React', 'Express', 'Next.js', 'Node.js', 'Spring Boot', 'Tailwind CSS', 'Framer Motion'] },
  { name: 'Tools & Platforms', skills: ['Git', 'GitHub', 'Maven', 'Docker', 'Postman', 'Vercel'] },
  { name: 'Core Concepts', skills: ['DSA', 'OOPS', 'REST APIs', 'DBMS', 'FPGA Programming'] },
  { name: 'Databases', skills: ['MongoDB', 'PostgreSQL'] },
]

export const experience = [{ company: 'Elevance Skills', role: 'Full Stack Developer Intern', dates: '06/2026 - 07/2026', description: 'Built a full-stack travel booking platform using Next.js, Tailwind CSS, Spring Boot, and MongoDB, implementing 6 major features across the complete booking and management flow.' }]

export const projects = [
  { title: 'Make My Tour', image: '/projects/make-my-tour.png', description: 'Built a travel website that allows users to explore destinations, search accommodations, and manage bookings through an interactive interface.', tech: ['Spring Boot', 'Maven', 'MongoDB', 'Next.js', 'Tailwind', 'Docker'], githubLink: 'https://github.com/Saptarshi-Bagchi/Make-My-Trip', liveLink: 'https://make-my-trip-clone-a9q3.onrender.com' },
  { title: 'Posture Correction Desktop App', image: '/projects/posture-correction-desktop-app.png', description: 'A desktop app that uses ESP32 + MPU6050 sensors to detect posture in real time, with live monitoring, gesture control, and analytics.', tech: ['Electron', 'React', 'Python', 'pySerial', 'MediaPipe', 'Gemini API'], githubLink: 'https://github.com/Saptarshi-Bagchi/Posture-Identifier-Application', liveLink: 'https://posture-identifier-application.vercel.app' },
  { title: 'Mosquito Risk Dashboard', image: '/projects/mosquito-risk-dashboard.png', description: 'A data-driven dashboard that visualizes mosquito risk levels using environmental and geographic factors for better awareness and prevention.', tech: ['Vite', 'JavaScript', 'React Router', 'Framer Motion', 'OpenStreetMap'], githubLink: 'https://github.com/Saptarshi-Bagchi/Mosquito-Risk-Detection', liveLink: 'https://mosquito-risk-detection.vercel.app' },
  { title: 'AI Complaint Management System', image: '/projects/ai-complaint-management-system.png', description: 'AI-powered complaint intake and risk-assessment system for pharmaceutical QA, built with React/Redux, FastAPI, LangGraph, and Groq LLMs.', tech: ['React', 'Redux Toolkit', 'FastAPI', 'LangGraph', 'Groq LLMs'], githubLink: 'https://github.com/Saptarshi-Bagchi/AI-Complaint-Management-System', liveLink: '#' },
  { title: 'NYC Wordle Game', image: '/projects/nyc-wordle-game.png', description: 'A wordle inspired word guessing game built using Vite with interactive gameplay, keyboard input handling, and dynamic word validation.', tech: ['HTML', 'CSS', 'JavaScript', 'Vite', 'React Router', 'Framer Motion'], githubLink: 'https://github.com/Saptarshi-Bagchi/Wordle-Simulator', liveLink: 'https://wordle-simulator-fawn.vercel.app' },
  { title: 'GPT Image Generator', image: '/projects/gpt-image-generator.png', description: 'A modern AI-powered image generator that transforms text prompts into high-quality visuals using OpenAI\'s GPT-Image-1 model.', tech: ['React', 'Node.js', 'JavaScript', 'MongoDB', 'Cloudinary', 'OpenAI API'], githubLink: 'https://github.com/Saptarshi-Bagchi/GPT-Image-Generator', liveLink: '#' },
]

export const certificates = [
  { title: 'Introduction to PostgreSQL', issuer: 'Great Learning', image: '/certificates/Introduction_to_PostGreSQL.jpg', certificateId: 'JFCZYAMP', link: 'https://www.mygreatlearning.com/certificate/JFCZYAMP?referrer_code=GLCAKHWQ' },
]
