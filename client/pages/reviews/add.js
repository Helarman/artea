import Form from "@/pages/reviews/Form"

const Add = ({qCode}) => {
    return(
        <Form inCode={qCode}/>
    )
};

export default Add;


export const getServerSideProps = async ({ query }) => {
    const { code = 1 } = query; //default code
    const [res1, res2, res3] = await Promise.all([
      fetch(`http://localhost:1337/api/global?populate=*`),
      fetch(`http://localhost:1337/api/review-page?populate=*`),
      fetch(`http://localhost:1337/api/portfolio?fields[0]=uuid`),
    ]);
  
    const [data1, data2, data3] = await Promise.all([
      res1.json(),
      res2.json(),
      res3.json()
    ])
  
    return {
      props: { global: data1, pageData: data2, portfolio: data3, qCode: code },
  
    }
  };
  