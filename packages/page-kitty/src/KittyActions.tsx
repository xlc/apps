// Copyright 2017-2020 @polkadot/app-js authors & contributors
// SPDX-License-Identifier: Apache-2.0

import React, { useState } from 'react';
import BN from 'bn.js';
import { Button, TxButton, InputNumber } from '@polkadot/react-components';

type Props = {
  accountId: string | null
};

const KittyActions: React.FC<Props> = ({ accountId }: Props) => {
  const [parent1, setParent1] = useState<BN | undefined>(undefined);
  const [parent2, setParent2] = useState<BN | undefined>(undefined);

  return (
    <section>
      <h1>Kitty Actions</h1>
      <h2>Create Kitty</h2>
      <div className='ui--row'>
        <div className='large'>
          <Button.Group>
            <TxButton
              accountId={accountId}
              label='Create New Kitty'
              params={[]}
              tx='kitties.create'
            />
          </Button.Group>
        </div>
      </div>
      <h2>Breed Kitty</h2>
      <div className='ui--row'>
        <div className='large'>
          <InputNumber
            label='First Parent Kitty ID'
            onChange={setParent1}
          />
          <InputNumber
            label='Second Parent Kitty ID'
            onChange={setParent2}
          />
          <Button.Group>
            <TxButton
              accountId={accountId}
              label='Breed Kitty'
              params={[parent1, parent2]}
              tx='kitties.breed'
            />
          </Button.Group>
        </div>
      </div>
    </section>
  );
};

export default KittyActions;
