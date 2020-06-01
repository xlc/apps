// Copyright 2017-2020 @polkadot/app-js authors & contributors
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import styled from 'styled-components';
import { AddressMini, TxButton } from '@polkadot/react-components';
import { u8aToHex, formatBalance } from '@polkadot/util';

import KittyAvatar from './KittyAvatar';
import withKitty, { Props as WithKittyProps } from './withKitty';

const Wrapper = styled.div`
  border: 2px solid #eee;
  padding: 10px;
  border-radius: 8px;
  margin: 10px;
  width: 333px;
`;

const StyledKittyAvatar = styled(KittyAvatar)`
  margin: auto;
`;

const Line = styled.div`
  height: 2px;
  background: #eee;
  margin: 10px -10px;
`;

 type Props = WithKittyProps & {
   showUnlist?: boolean,
   accountId: string | null,
 };

const Price: React.FC<Props> = ({ accountId, kittyId, price, showUnlist }: Props) => {
  if (price && price.isSome) {
    const value = price.unwrap();

    return (
      <>
        <label>Price: {formatBalance(value)}</label>
        {showUnlist &&
          <TxButton
            accountId={accountId}
            label='Unlist'
            params={[kittyId, null]}
            tx='kitties.setPrice'
          />
        }
      </>
    );
  }

  return <label>Not for sale</label>;
};

const KittyCard: React.FC<Props> = ({ accountId, kitty: maybeKitty, kittyId, price, showUnlist }: Props) => {
  if (maybeKitty?.isSome) {
    const kitty = maybeKitty.unwrap();
    const dna = kitty.data.toU8a();
    const gender = dna[0] % 2 === 0 ? 'Male' : 'Female';

    return (
      <Wrapper>
        <StyledKittyAvatar dna={dna} />
        <Line />
        <label>Kitty ID: {kittyId.toString()}</label>
        <label>
           Owner:
          <AddressMini
            value={kitty.owner}
          />
        </label>
        <label>DNA: {u8aToHex(dna)}</label>
        <label>Gender: {gender}</label>
        <Price {...{ accountId, kittyId, price, showUnlist }}/>
      </Wrapper>
    );
  }

  return <div>Loading...</div>;
};

export default withKitty(KittyCard as React.FC<WithKittyProps>) as React.FC<Props>;
