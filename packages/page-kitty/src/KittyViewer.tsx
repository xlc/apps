// Copyright 2017-2020 @polkadot/app-js authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable camelcase */

import React from 'react';
import styled from 'styled-components';
import BN from 'bn.js';
import { withCalls } from '@polkadot/react-api/hoc';

import { Kitty } from './types';
import KittyAvatar from './KittyAvatar';

const Wrapper = styled.section``;

interface Props {
  kitties: Array<Kitty>;
  kittiesCount: BN
}

const KittyViewer: React.FC<Props> = ({ kitties, kittiesCount: count }: Props) => (
  <Wrapper>
    <h1>Substrate Kitties</h1>
    {/* { kitties.length === 0 && 'No kitties'}
    { kitties.map((k) => (
      <KittyAvatar
        dna={k.toU8a()}
        key={k.toHex()}
      />
    )) } */}
    kitty count: {count && count.toString()}
  </Wrapper>
);

export default withCalls<Props>(
  ['query.nft.nextTokenId', {
    params: [0],
    propName: 'kittiesCount'
  }]
)(KittyViewer);
