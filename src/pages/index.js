import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import styless from '../components/HomepageFeatures/styles.module.css';
import Translate from '@docusaurus/Translate';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {/* {siteConfig.title} */}
          <Translate description=''>My Reports</Translate>
        </Heading>
        <p className="hero__subtitle">
          {/* {siteConfig.tagline} */}
          <Translate>Hello from my Reports | Submitted by " Eng: Ahmed Elroby "</Translate>
          </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
            style={{padding: '10px 20px'}}>
            <Translate>Reports here, let's Started ⏱️</Translate> 
          </Link>
        </div>
        <div className={styles.buttons}>
          {/* <Link
            className="button button--secondary button--lg"
            to="/blog"
            style={{margin: '20px'}}>
            <Translate>Blogs here, let's Started ⏱️</Translate>
          </Link> */}
          <Link
            className="button button--secondary button--lg"
            to="/"
            style={{margin: '20px'}}>
            <Translate>Blogs here, let's Started ⏱️</Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      // title={`Hello from ${siteConfig.title}`}
      title={`Ahmed Elroby`}
      description="Description will go into a meta tag in <head />">
      
      <HomepageHeader />
      
      <main >
        {/* <HomepageFeatures /> */}

        <section className={styless.features}>
          <div className="container">
            <div className="row">
              <div className={clsx('col col--4')} style={{margin: 'auto'}}>
                <div className="text--center">
                  <img className={styless.featureSvg} src='img/report1.svg' alt="report image" />
                </div>
                <div className="text--center padding-horiz--md">
                  <h3>
                    <Translate description="The homepage message to ask the user to visit my blog">About My Reports</Translate>
                  </h3>
                  <p>
                    <Translate>In this section, I will explain the reports related to the projects that I manage.</Translate>
                  </p>
                </div>
              </div>

              <div className={clsx('col col--4')} style={{margin: 'auto'}}>
                <div className="text--center">
                  <img className={styless.featureSvg} src='img/blogging.svg' alt="report image" />
                </div>
                <div className="text--center padding-horiz--md">
                  <h3>
                    <Translate description="The homepage message to ask the user to visit my blog">About My Blogs</Translate>
                  </h3>
                  <p>
                    <Translate>In this section, I will write some short and simple articles related to the field of Engineering in Light Current.</Translate>
                  </p>
                </div>
              </div>
            </div>  
          </div>   
        </section>

        
      </main>
    </Layout>
  );
}
