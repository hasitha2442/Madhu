import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={styles.container}>
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
            stay updated with the latest advancements in my field.
        </p>
      </div>
    </header>
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
      </main>
    </Layout>
  );
}
