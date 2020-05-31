// Copyright 2017-2020 @polkadot/app-js authors & contributors
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import KittyAvatar from './KittyAvatar';
import withKitty, { Props } from './withKitty';

const LoadKittyAvatar = ({ kitty }: Props) =>
  kitty?.isSome ? <KittyAvatar dna={kitty.unwrap().data.toU8a()} /> : <div>Loading...</div>;

export default withKitty(LoadKittyAvatar);
