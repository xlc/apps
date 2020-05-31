// Copyright 2017-2020 @polkadot/app-js authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable camelcase */

import React from 'react';
import styled from 'styled-components';
import BN from 'bn.js';
import { withCalls } from '@polkadot/react-api/hoc';

import LoadKittyAvatar from './LoadKittyAvatar';

const Wrapper = styled.section``;

interface Props {
  kittiesCount: BN;
}

const KittyViewer: React.FC<Props> = ({ kittiesCount }: Props) => {
  const count = kittiesCount ? kittiesCount.toNumber() : 0;
  const kitties = [];

  for (let i = 0; i < count; ++i) {
    kitties.push(
      <LoadKittyAvatar
        key={i}
        kittyId={new BN(i)}
      />
    );
  }

  return (
    <Wrapper>
      <h1>Substrate Kitties</h1>
      <h2>
          Total kitties count: {count}
      </h2>
      { kitties }
    </Wrapper>
  );
};

export default withCalls<Props>(
  ['query.nft.nextTokenId', {
    params: [0],
    propName: 'kittiesCount'
  }]
)(KittyViewer);
