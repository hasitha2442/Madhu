import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';


import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={styles.container}>
      <div className={styles.inner}>
        <img src="/img/my_photo.jpg" alt="Your Photo" className={styles.image} />
        <div className={styles.content}>
          <h1>Madhu Hasitha Manne</h1>
          <p>
            As a student pursuing a specialized branch in Artificial Intelligence and Data Science,
            I have a keen interest in solving challenging problems by using advanced technologies. 
            I am an enthusiastic, self-motivated, reliable, responsible, and hardworking person. 
            I am a quiet and focused person who can work swiftly and effectively either alone or as part of a team. 
            I am always energetic and eager to learn new skills. I have a strong analytical mindset and excel in 
            breaking down complex problems into manageable tasks. My passion for continuous learning drives me to
            stay updated with the latest advancements in my field. I am committed to utilizing my technical 
            expertise and creative problem-solving abilities to drive impactful results.
          </p>
        </div>
      </div>
    </header>
  );
}

function ProjectCard({ image, title, description, technologies, link }) {
  return (
    <div className={styles.projectCard}>
      <img src={image} alt={title} className={styles.projectImage} />
      <div className={styles.projectContent}>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className={styles.techAndLink}>
          <p className={styles.technologies}>{technologies}</p>
          <a href={link} className={styles.projectLink}>
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

function ProjectsSection() {
  const projects = [
    {
      image: '/img/db.jpg',
      title: 'AirPortDB',
      description: 'A secure employee database system with the password-protected access, designed for reliable airport personnel management using HTML, CSS, JavaScript, and SQL.',
      technologies: '#Xampp #HTML #PHP #CSS',
      link: 'https://github.com/hasitha2442/airline',
    },
    {
      image: '/img/bg.png',
      title: 'MummGrowth',
      description: 'A reliable app for expectant mothers, providing personalized diet plans, exercise guidance, and health tracking with ML-powered hospital listings and real-time symptom alerts.',
      technologies: '#ML #Flutter #Firebase',
      link: 'https://github.com/hasitha2442/MummGrowth',
    },
    {
      image: '/img/gl.jpg',
      title: 'Retinal Scan',
      description: 'A deep learning network for early glaucoma screening, leveraging transformers and ensemble methods for high accuracy. Deployed on AWS for real-time, scalable testing and validation.',
      technologies: '#AWS #Streamlit #DL',
      link: 'https://github.com/hasitha2442/Glaucoma',
    },
  ];

  return (
    <div id="projects" className={styles.projectsSection}>
      <h2>Projects</h2>
      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <ProjectsSection />
      </main>
    </Layout>
  );
}