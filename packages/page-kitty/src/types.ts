// Copyright 2017-2020 @polkadot/app-js authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable @typescript-eslint/no-empty-interface */

import { u32, u8, Vec, Struct, U8aFixed } from '@polkadot/types';
import { AccountId } from '@polkadot/types/interfaces';

export interface Kitty extends U8aFixed {}
export interface KittyIndex extends u32 {}
export interface TokenInfo extends Struct {
  metadata: Vec<u8>;
  owner: AccountId;
  data: Kitty;
}
