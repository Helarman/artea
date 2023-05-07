import bootstrap from "../src/css/bootstrap.css"
import "animate.css/animate.min.css";


const App = ({ Component, pageProps }) => {

  return (
    <>
        <Component  {...pageProps} />
    </>
  );
}

export default App;
