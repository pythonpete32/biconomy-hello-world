import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

import { ChainId } from "@biconomy/core-types";
import SmartAccount from "@biconomy/smart-account";
import { useAccount, useProvider, useSigner } from "wagmi";
import { useEffect, useState } from "react";
import { ethers } from "ethers";

const Home: NextPage = () => {
  const provider = useProvider();
  const { data: signer } = useSigner();
  const { address } = useAccount();
  const [smartAccount, setSmartAccount] = useState<SmartAccount | null>(null);

  const sAddress = smartAccount?.address;
  console.log("address", sAddress);

  useEffect(() => {
    async function setupSmartAccount() {
      let options = {
        activeNetworkId: ChainId.GOERLI,
        supportedNetworksIds: [ChainId.GOERLI],
      };

      const smartAccount = new SmartAccount(signer, options);
      await smartAccount.init();
      setSmartAccount(smartAccount);
    }
    if (!!signer && !!address) {
      setupSmartAccount();
    }
  }, [address, signer]);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <ConnectButton />
        <h1>Biconomy SDK</h1>
      </main>
    </div>
  );
};

export default Home;
