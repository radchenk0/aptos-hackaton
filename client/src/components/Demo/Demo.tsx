import { FC } from 'react';
import { WalletSelector } from '@aptos-labs/wallet-adapter-ant-design';
import './Demo.scss';

const Demo: FC = () => {
  return (
    <div className="demo">
      <WalletSelector />
    </div>
  );
};

export default Demo;
