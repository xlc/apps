// Copyright 2017-2020 @polkadot/apps-routing authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { TFunction } from 'i18next';
import { Route } from './types';

import Template from '@polkadot/app-kitty';

export default function create (t: TFunction): Route {
  return {
    Component: Template,
    display: {
      isHidden: false,
      needsAccounts: true,
      needsApi: [
        'tx.kitties.create'
      ]
    },
    group: 'network',
    icon: 'th',
    name: 'Kitties',
    text: t<string>('nav.kitty', 'Kitties', { ns: 'apps-routing' })
  };
}
