// Copyright 2017-2020 @polkadot/app-js authors & contributors
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import styled from 'styled-components';
import { AddressMini } from '@polkadot/react-components';

import KittyAvatar from './KittyAvatar';
import withKitty, { Props } from './withKitty';

const Wrapper = styled.div`
  border: 2px solid #eee;
  padding: 10px;
  border-radius: 8px;
  margin: 10px;
  width: 300px;
`;

const StyledKittyAvatar = styled(KittyAvatar)`
  margin: auto;
`;

const Line = styled.div`
  height: 2px;
  background: #eee;
  margin: 10px -10px;
`;

const KittyCard: React.FC<Props> = ({ kitty: maybeKitty, kittyId }: Props) => {
  if (maybeKitty?.isSome) {
    const kitty = maybeKitty.unwrap();

    return (
      <Wrapper>
        <StyledKittyAvatar dna={kitty.data.toU8a()} />
        <Line />
        <label>Kitty ID: {kittyId.toString()}</label>
        <label>
           Owner:
          <AddressMini
            value={kitty.owner}
          />
        </label>
      </Wrapper>
    );
  }

  return <div>Loading...</div>;
};

export default withKitty(KittyCard);
