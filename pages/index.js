import { useAddress, useMetamask } from "@thirdweb-dev/react";
import styled from "styled-components";
import Dashboard from "./dashboard";

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  max-width: 100vw;
  background-color: #0a0b0d;
  color: #fff;
  display: grid;
  place-items: center;
`;
const WalletConnect = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Button = styled.div`
  border: 1px solid #282b2f;
  padding: 0.8rem;
  font-size: 1.2rem;
  font-weight: 500;
  border-radius: 0.4rem;
  background-color: #3773f5;
  color: #fff;
  &:hover {
    cursor: pointer;
  }
`;
const Details = styled.div`
  font-size: 1.2rem;
  text-align: center;
  margin-top: 1rem;
  font-weight: 500;
  color: #282b2f;
`;
export default function Home() {
  const address = useAddress();
  console.log("address: ", address);
  console.log(address);
  const connectWallet = useMetamask();
  return (
    <Wrapper>
      {address ? (
       <Dashboard address={address}/>
      ) : (
        <WalletConnect>
          <Button
            onClick={() => {
              connectWallet();
            }}
          >
            Connect Wallet
          </Button>
          <Details>
            You need Chrome to be
            <br /> able to run this app
          </Details>
        </WalletConnect>
      )}
    </Wrapper>
  );
}


