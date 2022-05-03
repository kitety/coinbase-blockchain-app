import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";

const supportedChainIds = [ChainId.RINKEBY];
const connectors = {
  injected: {},
};

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider
      supportedChainIds={supportedChainIds}
      connectors={connectors}
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
