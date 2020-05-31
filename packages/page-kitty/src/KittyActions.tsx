// Copyright 2017-2020 @polkadot/app-js authors & contributors
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import { Button, TxButton } from '@polkadot/react-components';

 type Props = {
   accountId?: string
 };

const KittyActions: React.FC<Props> = ({ accountId }: Props) => (
  <section>
    <h1>Kitty Actions</h1>
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
  </section>
);

export default KittyActions;
