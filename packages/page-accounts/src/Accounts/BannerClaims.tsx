// Copyright 2017-2024 @polkadot/app-accounts authors & contributors
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import useClaimCounter from '@polkadot/app-claims/useCounter'; // exceptionally CRAP idea

import { useTranslation } from '../translate.js';
import Banner from './Banner.js';

function BannerExtension (): React.ReactElement | null {
  const claimCount = useClaimCounter();
  const { t } = useTranslation();

  if (!claimCount) {
    return null;
  }

  return (
    <Banner type='error'>
      <p>{t<string>('You have {{claimCount}} accounts that need attestations. Use the Claim Tokens app on the navigation bar to complete the process. Until you do, your balances for those accounts will not be reflected.', { replace: { claimCount } })}&nbsp;<a href='#/claims'>{t<string>('Claim tokens...')}</a></p>
    </Banner>
  );
}

export default React.memo(BannerExtension);
