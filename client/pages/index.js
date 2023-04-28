import Head from 'next/head';
import Header from '@/components/Header/Header';
import FeaturesSection from '@/components/Features/Features';
import PortfolioSection from '@/components/Portfolio/Portfolio';
import ServicesSection from '@/components/Services/Services'
import StagesSection from '@/components/Stages/Stages'
import ReviewsSection from '@/components/Reviews/Reviews';
import QuestionsSection from '@/components/Questions/Questions';
import Footer from '@/components/Footer/Footer'

export const getStaticProps = async () => {
  const [res1, res2, res3] = await Promise.all([
      fetch(`http://localhost:1337/api/global?populate=*`),
      fetch(`http://localhost:1337/api/homepage?populate=*`),
      fetch(`http://localhost:1337/api/reviews?filters[onHomepage][$eq]=true`),
  ]);

  const [data1, data2, data3] = await Promise.all([
      res1.json(),
      res2.json(),
      res3.json()
  ])

  return {
      props: { global: data1, page: data2, reviews: data3 },

  }
};

const Home = ({ global, page, reviews }) => {
  const Content = page.data.attributes;
  const Services = page.data.attributes.serviceCard;

  return (

    <div className={`body-sett`}>
      <Head>
        <title>Artea - web stuido</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header headerContent={Content} global={global} />
      <FeaturesSection featuresContent={Content} id="#features" />
      <PortfolioSection />
      <ServicesSection servicesContent={Services} />
      <StagesSection />
      <ReviewsSection Reviews={reviews.data} />
      <QuestionsSection />
      <Footer global={global} />
    </div>
  )
};

export default Home;
