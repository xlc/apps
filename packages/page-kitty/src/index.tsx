// Copyright 2017-2020 @polkadot/app-js authors & contributors
// SPDX-License-Identifier: Apache-2.0

import React, { useState } from 'react';
import { AppProps as Props } from '@polkadot/react-components/types';
import { registry } from '@polkadot/react-api';
import KittyViewer from './KittyViewer';
import KittyActions from './KittyActions';

import AccountSelector from './AccountSelector';

registry.register({
  ClassId: 'u32',
  ClassInfoOf: 'ClassId',
  Kitty: '[u8; 16]',
  KittyIndex: 'u32',
  KittyIndexOf: 'KittyIndex',
  TokenId: 'u32',
  TokenInfo: {
    metadata: 'Vec<u8>',
    owner: 'AccountId',
    data: 'Kitty' // eslint-disable-line
  },
  TokenInfoOf: 'TokenInfo'
});

function TemplateApp ({ className }: Props): React.ReactElement<Props> {
  const [accountId, setAccountId] = useState<string | null>(null);

  return (
    <main className={className}>
      <AccountSelector onChange={setAccountId} />
      <KittyActions accountId={accountId} />
      <KittyViewer accountId={accountId} />
    </main>
  );
}

export default React.memo(TemplateApp);
