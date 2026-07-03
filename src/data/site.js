// ──────────────────────────────────────────────────────────────────────────
//  ALL SITE CONTENT LIVES HERE.
//  Edit this file to update text, links, projects, skills, anime, travel, etc.
//  Image slots point at /images/... in the public folder — drop your own files
//  there with the matching names to replace the placeholders.
// ──────────────────────────────────────────────────────────────────────────

export const profile = {
  name: 'Satyam Sharma',
  nameJP: 'サティヤム', // katakana accent
  role: 'Machine Learning Researcher',
  location: 'Tokyo, Japan',
  tagline:
    "I'm working on how to make reinforcement learning learn efficiently in sparse- or delayed-reward environments without depending on constant, expensive LLM supervision.",
  // longer intro shown in the About section
  bio: [
    "I'm an ML researcher and MEXT (Monbukagakusho) scholar at the Institute of Science Tokyo (formerly Tokyo Institute of Technology). I finished my research-student phase and I'm now pursuing my Master's, focusing on Reinforcement learning and LLM.",
    'Before Tokyo, I earned my B.E. with Honours in Computer Science at SLIET, I worked on Machine learning, Deep learning and NLP. I care about turning research into things that actually work.',
    'Off the screen you\'ll find me chasing mountains, snow, and a good anime arc.',
  ],
  // Profile photo — drop your image at public/images/profile.jpg (or update the path)
  photo: '/images/profile.jpg',
  // Resume (opens in a new tab from the hero)
  resumeUrl: 'https://drive.google.com/file/d/18E4u765XPIlP8s-7Kfm2MkfAf-bRgJ--/view?usp=sharing',
}

export const social = {
  email: 'satyamsharma3002@gmail.com',
  phone: '+91 7700076418',
  github: 'https://github.com/monkeydcoder',
  linkedin: 'https://www.linkedin.com/in/satyam-sharma-24463522a',
}

export const quickFacts = [
  { label: 'Based in', value: 'Tokyo, Japan', jp: '東京' },
  { label: 'Scholarship', value: 'MEXT (Govt. of Japan)', jp: '文部科学省' },
  { label: 'Focus', value: 'Reinforcement learning · LLM', jp: '研究' },
  { label: 'Currently', value: "Master's @ Science Tokyo", jp: '修士' },
]

export const skills = [
  {
    category: 'Machine Learning & AI',
    items: ['Machine Learning', 'Deep Learning', 'Computer Vision', 'NLP', 'TensorFlow', 'Keras', 'MLflow'],
  },
  {
    category: 'Languages',
    items: ['Python', 'C / C++', 'JavaScript', 'HTML5', 'CSS3'],
  },
  {
    category: 'Data & Analysis',
    items: ['NumPy', 'Pandas', 'Scikit-Learn', 'Matplotlib', 'Seaborn'],
  },
  {
    category: 'Core CS',
    items: ['Data Structures', 'Algorithms', 'Operating Systems', 'OOP', 'DBMS'],
  },
  {
    category: 'Tools & Workflow',
    items: ['Git', 'GitHub', 'FastAPI', 'LangChain', 'Streamlit', 'Prefect'],
  },
]

// `link` = source code (GitHub), `demo` = video walkthrough (Loom).
export const projects = [
  {
    title: 'ExamPrepAI',
    subtitle: 'AI study platform',
    description:
      'An AI-powered exam-prep platform that generates quizzes, flashcards, and personalised study plans, with progress tracking and adaptive learning for every student.',
    tech: ['Python', 'NLP', 'React', 'AI'],
    link: 'https://github.com/monkeydcoder/ExamPrepAI',
    demo: 'https://www.loom.com/share/e604337fc4cf4cd2932a9fc64e80a56c?asg_reaction=true&reaction=wave&video_time_stamp=9',
    accent: 'purple',
  },
  {
    title: 'ResearchMate-AI',
    subtitle: 'Academic research assistant',
    description:
      'A research copilot for searching papers and patents, analysing PDFs, mapping literature, and managing citations — built to make the research grind a lot less painful.',
    tech: ['Python', 'FastAPI', 'LangChain', 'Streamlit'],
    link: 'https://github.com/monkeydcoder/researchmate-ai',
    demo: 'https://www.loom.com/share/f0cf23e5e03546e5875df76d9d26199b?asg_reaction=true&reaction=wave&video_time_stamp=10',
    accent: 'cyan',
  },
  {
    title: 'Autonomous Farm Bot',
    subtitle: "Earth Docker's · ₹50,000 funded",
    description:
      'A field robot that detects cotton-plant disease and navigates autonomously. Achieved 98% accuracy classifying diseased vs. healthy cotton with ResNet152V2, with on-board navigation via Raspberry Pi 4 + RP-Lidar and a rocker-bogie chassis for rough terrain.',
    tech: ['Python', 'TensorFlow', 'Computer Vision', 'Raspberry Pi', 'Robotics'],
    link: '',
    accent: 'magenta',
  },
  {
    title: 'Image-to-Mass Prediction',
    subtitle: 'Deep learning · research',
    description:
      'Predicts the physical mass of an object straight from an image by learning density and volume cues from the MINS-2500 dataset — improving on existing state-of-the-art baselines.',
    tech: ['Python', 'Deep Learning', 'Computer Vision', 'TensorFlow'],
    link: '',
    accent: 'cyan',
  },
]

export const education = [
  {
    school: 'Institute of Science Tokyo',
    note: 'formerly Tokyo Institute of Technology',
    degree: "Master's Program — Computer Science",
    period: '2026 – Present',
    detail:
      'MEXT (Monbukagakusho) Scholar. Completed the research-student phase and advanced into the Master\'s program. Research in computer vision and NLP.',
    current: true,
  },
  {
    school: 'Sant Longowal Institute of Engineering & Technology (SLIET)',
    degree: 'B.E. (Honours), Computer Science & Engineering',
    period: 'Jul 2021 – Jun 2025',
    detail: 'CGPA 8.91/10 · Honours track 8.75/10 · Robotics Club Convenor leading 20+ students.',
    current: false,
  },
]

export const coursework = [
  'Data Structures & Algorithms',
  'Machine Learning',
  'Artificial Intelligence',
  'DBMS',
  'Computer Networks',
  'Operating Systems',
  'Data Analytics',
  'Internet of Things',
  'Optimization',
  'Cryptography & Network Security',
]

// ── Personality ───────────────────────────────────────────────────────────

export const anime = [
  {
    title: 'One Piece',
    jp: 'ワンピース',
    note: 'The grand adventure. Freedom, nakama, and never giving up on the dream.',
  },
  {
    title: 'Attack on Titan',
    jp: '進撃の巨人',
    note: 'Plot, payoff, and the most ruthless storytelling in anime.',
  },
  {
    title: 'Naruto',
    jp: 'ナルト',
    note: 'Hard work beats talent — the show that started it all for me.',
  },
]

export const hobbies = [
  { name: 'Skiing', emoji: '⛷️' },
  { name: 'Hiking', emoji: '🥾' },
  { name: 'Swimming', emoji: '🏊' },
  { name: 'Walking', emoji: '🚶' },
]

// Drop your own photos at public/images/travel/<file> to replace the placeholders.
export const travel = [
  {
    place: 'Rupin Pass Trek',
    region: 'Himachal Pradesh, India',
    jp: '雪山',
    note: 'A high-altitude Himalayan crossing — snow fields, waterfalls, and ridgelines. Easily my favourite trek.',
    image: '/images/travel/rupin-pass.jpg',
  },
  {
    place: 'Tokyo',
    region: 'Japan',
    jp: '東京',
    note: 'Home base. Endless neighbourhoods to wander, from neon Shibuya to quiet shrine backstreets.',
    image: '/images/travel/tokyo.jpg',
  },
  {
    place: 'Kawagoe',
    region: 'Saitama, Japan',
    jp: '川越',
    note: '"Little Edo" — old warehouse streets and that timeless retro style. Loved every corner of it.',
    image: '/images/travel/kawagoe.jpg',
  },
]

// Section labels with decorative Japanese accents
export const sections = [
  { id: 'home', label: 'Home', jp: 'ホーム' },
  { id: 'about', label: 'About', jp: '私について' },
  { id: 'skills', label: 'Skills', jp: 'スキル' },
  { id: 'work', label: 'Work', jp: '仕事' },
  { id: 'education', label: 'Education', jp: '学歴' },
  { id: 'beyond', label: 'Beyond Code', jp: 'コード以外' },
  { id: 'contact', label: 'Contact', jp: '連絡' },
]
