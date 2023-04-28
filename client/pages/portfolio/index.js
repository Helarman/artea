import Head from 'next/head'
import Link from 'next/link'
import PortfolioHeader from '@/components/Portfolio/PortfolioTitle';
import Footer from '@/components/Footer/Footer';
//import PortfolioList from '@/components/Portfolio/PorfolioList';
//import { TagCloud } from "react-tagcloud"
//import Select from "react-select";
//import { useQuery, useQueryClient } from "react-query";
import styles from "@/components/Portfolio/Portfolio.module.scss"
import NavbarSecondary from '@/components/Navbar/NavbarSecondary';
import PortfolioTitle from '@/components/Portfolio/PortfolioTitle';

const portfolio = '1';

/*const tagsRenderer = (tag, size, color) => ( // custom renderer for tags cloud
  <span
    key={tag.value}
    className={styles.listMenuStable}
  >
    {tag.value}
  </span>
  )


const getPosts = async() =>{
  const resPortfolio = await fetch(`http://localhost:1337/api/portfolio?populate=*`)
  const data = await resPortfolio.json(); 
};*/


const Portfolio = ({ posts, global, tags, }) => {


  //const queryClient = useQueryClient()
  //const {data, status} = useQuery(`posts`, getPosts, {initialData: posts});

  const cards = posts.data;
  const tagsList = tags.data;
  /*const tagsData = tagsList.map(({ attributes: { value, count }, ...item}) => ({ ...item, value: value, count:count }));
  
  const handleTags = (values) => {
    console.log(values);
  }	
  
  const handleTags2 = (tag) => {
    console.log(tag);
  }*/
  return (
    <>
      <Head>
        <title>Artea - web stuido</title>
        <meta name="description" content="Artea - web stuido" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavbarSecondary global={global} />
      <PortfolioTitle portfolio={portfolio} />
      <div className={`container`}>
        <div className={`row`}>
          <div className={styles.listMenu}></div>
          {/*<Select
            getOptionLabel={option => `${option.value}`}
            getOptionValue={option => `${option.id}`}
            options={tagsData}
            instanceId="tags"
            isMulti
            placeholder="Filter"
            onChange={values => handleTags(values.map(tag => tag.id))}
          />

          <TagCloud
          minSize={10}
          maxSize={10}
          renderer={tagsRenderer}
          tags={tagsData}	
          onClick={tag =>  handleTags2(tag)} //
          className={styles.listMenu}
          />
         {status === 'loading' && <div>I'm loading your movies</div>}
          {status === 'error' && <div>Something went wrong</div>}*/}

          {cards && cards.map(({ id, attributes }) => (
            <div className={`col-xl-4 col-lg-6 col-md-6`} key={id}>
              <Link href={`/portfolio/${id}`}>
                <div style={{ background: `${attributes.background}`, border: `${attributes.borderWidth}px solid ${attributes.borderColor}` }} className={styles.card}>
                  <div className={styles.logoCard}>
                    <object>
                      <img src={`http://localhost:1337${attributes.previewSvg.data.attributes.url}`} ></img>
                    </object>
                  </div>

                  <div className={styles.darken}>
                    <div className={styles.cardDescription}>
                      <p>{attributes.title} </p>
                      <p>{attributes.text}</p>
                      {
                        attributes.tags.data && attributes.tags.data.map(({ id, attributes }) => (<p key={id}>{attributes.value}</p>))
                      }
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer global={global} />
      {/*<PortfolioList posts={posts} tags={tags}/>*/}
    </>
  )
};



export const getStaticProps = async () => {
  const [res1, res2, res3] = await Promise.all([
    fetch(`http://localhost:1337/api/portfolio?populate=*`),
    fetch(`http://localhost:1337/api/global?populate=*`),
    fetch(`http://localhost:1337/api/tags?fields[0]=value&fields[1]=count`)
  ]);

  const [data1, data2, data3] = await Promise.all([
    res1.json(),
    res2.json(),
    res3.json()
  ])

  return {
    props: { posts: data1, global: data2, tags: data3 },

  }
};

export default Portfolio;
