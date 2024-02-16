import { AptosWalletAdapterProvider } from '@aptos-labs/wallet-adapter-react';
import { MartianWallet } from '@martianwallet/aptos-wallet-adapter';
import { PontemWallet } from '@pontem/wallet-adapter-plugin';
import { PetraWallet } from 'petra-plugin-wallet-adapter';

import { Demo } from 'components';
import { FC } from 'react';

const App: FC = () => {
  const wallets = [new MartianWallet(), new PetraWallet(), new PontemWallet()];

  return (
    <AptosWalletAdapterProvider plugins={wallets} autoConnect={true}>
      <Demo />
    </AptosWalletAdapterProvider>
  );
};

export default App;
