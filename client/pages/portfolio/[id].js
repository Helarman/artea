import Head from "next/head";
import PortfolioInfo from "../../components/Portfolio/PortfolioInfo";
import Footer from '@/components/Footer/Footer';
import NavbarSecondary from '@/components/Navbar/NavbarSecondary';


export const getStaticPaths = async () => {
  const response = await fetch(`http://localhost:1337/api/portfolio?populate=*`);
  const data = await response.json();

  const paths = data.data.map(({ id }) => ({
    params: { id: id.toString() }
  }));

  return {
    paths,
    fallback: false,
  }
};

export const getStaticProps = async (context) => {
  const { id } = context.params;
  const [res1, res2, res3] = await Promise.all([
    fetch(`http://localhost:1337/api/portfolio/${id}?populate=deep,3`), // individual page data
    fetch(`http://localhost:1337/api/global?populate=*`), // global data
    fetch(`http://localhost:1337/api/portfolio?fields[0]=id`) // only id data to calc
  ]);

  const [data1, data2, data3] = await Promise.all([
    res1.json(),
    res2.json(),
    res3.json()
  ])

  if (!data1) {
    return {
      notFound: true,
    }
  }

  return {
    props: { post: data1, global: data2, numbers: data3 },
  }
};

const PortfolioItem = ({ post, global, numbers }) => (
  <>
    <Head>
      <title>Artea - web stuido</title>
      <meta name="description" content="Artea - web stuido" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <NavbarSecondary global={global} />
    <PortfolioInfo post={post} numbers={numbers} />
    <Footer global={global} />
  </>
);

export default PortfolioItem;