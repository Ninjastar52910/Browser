import React from 'react';
import PropTypes from 'prop-types';

import { useI18nContext } from '../../../../hooks/useI18nContext';
import { useCopyToClipboard } from '../../../../hooks/useCopyToClipboard';

import Box from '../../../ui/box';
import Button from '../../../ui/button';
import Typography from '../../../ui/typography';
import Tooltip from '../../../ui/tooltip';

import {
  DISPLAY,
  TextColor,
  TypographyVariant,
} from '../../../../helpers/constants/design-system';

import { shortenAddress } from '../../../../helpers/utils/util';

const DetectedTokenAddress = ({ tokenAddress }) => {
  const t = useI18nContext();
  const [copied, handleCopy] = useCopyToClipboard();

  return (
    <Box display={DISPLAY.INLINE_FLEX} className="detected-token-address">
      <Typography variant={TypographyVariant.H7} color={TextColor.textDefault}>
        {`${t('tokenAddress')}:`}
      </Typography>
      <Typography
        variant={TypographyVariant.H7}
        color={TextColor.primaryDefault}
        marginLeft={2}
        marginRight={2}
      >
        {shortenAddress(tokenAddress)}
      </Typography>
      <Tooltip
        position="bottom"
        title={copied ? t('copiedExclamation') : t('copyToClipboard')}
      >
        <Button
          type="link"
          className="detected-token-address__copy-link"
          onClick={() => {
            handleCopy(tokenAddress);
          }}
        >
          <i className="fa fa-copy" />
        </Button>
      </Tooltip>
    </Box>
  );
};

DetectedTokenAddress.propTypes = {
  tokenAddress: PropTypes.string,
};

export default DetectedTokenAddress;
