// Editable site content.
export const site = {
  name: 'Saptarshi Bagchi', initials: 'SB',
  title: 'Full-Stack Developer | 3rd Year CSE (IoT) Student',
  tagline: 'React & Node.js developer building full-stack web apps, embedded systems integrations, and developer tools',
  email: 'saptarshibagchi.05@gmail.com', github: '#', linkedin: '#',
}

// Editable navigation labels.
export const navigation = [
  { label: 'About', href: '#about' }, { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' }, { label: 'Projects', href: '#projects' }, { label: 'Contact', href: '#contact' },
]

// Editable about content and accomplishments.
export const about = {
  heading: 'About me',
  text: '3rd-year B.Tech CSE (IoT) student at Institute of Technical Education and Research, SoA University (2024-2028), Bhubaneswar, with a strong foundation in DSA, OOPS, and REST API design.',
  accomplishmentsHeading: 'Accomplishments',
  accomplishments: ['200+ day LeetCode streak', 'Top 50 at SIH Ideathon 2026 (contributed software for an IoT project)', 'Certificate: Introduction to PostgreSQL, Great Learning'],
}

// Editable skill groups.
export const skillGroups = [
  { name: 'Languages', skills: ['Java', 'HTML', 'CSS', 'TypeScript', 'JavaScript', 'Python'] },
  { name: 'Frameworks & Libraries', skills: ['React', 'Next.js', 'Node.js', 'Spring Boot', 'Tailwind CSS', 'Vite', 'MongoDB'] },
  { name: 'Tools & Platforms', skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'MongoDB Compass', 'Vercel', 'PostgreSQL', 'Maven'] },
  { name: 'Core Concepts', skills: ['DSA', 'OOPS', 'REST APIs', 'DBMS', 'FPGA Programming'] },
]

// Editable experience entries.
export const experience = [{ company: 'Elevance Skills', role: 'Full Stack Developer Intern', dates: '06/2026 - 07/2026', description: 'Built a full-stack travel booking platform using Next.js, Tailwind CSS, Spring Boot, and MongoDB, implementing 6 major features across the complete booking and management flow.' }]

// Editable project entries.
export const projects = [
  { title: 'Posture Correction Desktop App', description: '6-member team; pyserial communication between ESP32 and Python backend for live sensor data; Gemini API for posture image analysis and a pose landmark model for real-time angle detection.', tech: ['Electron', 'React', 'Python'], githubLink: '#', liveLink: '#' },
  { title: 'Make My Trip Clone', description: 'Travel platform with live flight tracking, dynamic pricing, refunds, seat/room selection, notifications, recommendations, reviews, and price tracking.', tech: ['Next.js', 'Spring Boot', 'MongoDB', 'TypeScript'], githubLink: '#', liveLink: '#' },
  { title: 'NYC Wordle Clone', description: 'Word game with keyboard input handling and tile management, powered by the Dictionary API with more than 3000 words.', tech: ['React', 'Vite'], githubLink: '#', liveLink: '#' },
]
