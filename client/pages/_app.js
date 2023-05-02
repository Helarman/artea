import bootstrap from "../src/css/bootstrap.css"
import animate from "../src/css/animate.css"

import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient()


const App = ({ Component, pageProps }) => {

  return (
    <div >
      <QueryClientProvider client={queryClient}>
        <Component  {...pageProps} />
      </QueryClientProvider>
    </div>
  );
}

export default App;
