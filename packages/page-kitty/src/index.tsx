// Copyright 2017-2020 @polkadot/app-js authors & contributors
// SPDX-License-Identifier: Apache-2.0

import React, { useState } from 'react';
import { AppProps as Props } from '@polkadot/react-components/types';

import AccountSelector from './AccountSelector';

function TemplateApp ({ className }: Props): React.ReactElement<Props> {
  const [accountId, setAccountId] = useState<string | null>(null);

  return (
    <main className={className}>
      <AccountSelector onChange={setAccountId} />
    </main>
  );
}

export default React.memo(TemplateApp);
