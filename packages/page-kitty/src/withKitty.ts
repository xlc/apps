// Copyright 2017-2020 @polkadot/app-js authors & contributors
// SPDX-License-Identifier: Apache-2.0

import BN from 'bn.js';
import { Option } from '@polkadot/types/codec';
import { withCalls } from '@polkadot/react-api/hoc';
import { TokenInfo } from './types';

export type Props = {
  kittyId: BN,
  kitty?: Option<TokenInfo>
};

export default withCalls<Props>(
  [
    'query.nft.tokens',
    {
      paramPick: (props: Props) => [0, props.kittyId],
      propName: 'kitty'
    }
  ]
);
