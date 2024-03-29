import React from 'react';
import PropTypes from 'prop-types';
import { omit } from 'lodash';
import Typography from '../typography';
import {
  Size,
  TypographyVariant,
  FONT_WEIGHT,
  OVERFLOW_WRAP,
  TextColor,
} from '../../../helpers/constants/design-system';
import Tooltip from '../tooltip';

const MARGIN_MAP = {
  [Size.XS]: 0,
  [Size.SM]: 2,
  [Size.MD]: 4,
  [Size.LG]: 6,
  [Size.XL]: 8,
};

export default function DefinitionList({
  dictionary,
  termTypography = {},
  definitionTypography = {},
  tooltips = {},
  gapSize = Size.SM,
}) {
  return (
    <dl className="definition-list">
      {Object.entries(dictionary).map(([term, definition]) => (
        <React.Fragment key={`definition-for-${term}`}>
          <Typography
            variant={TypographyVariant.H6}
            fontWeight={FONT_WEIGHT.BOLD}
            {...termTypography}
            boxProps={{
              marginTop: 0,
              marginBottom: 1,
            }}
            className="definition-list__term"
            as="dt"
          >
            {term}
            {tooltips[term] && (
              <Tooltip
                title={tooltips[term]}
                position="top"
                containerClassName="definition-list__tooltip-wrapper"
              >
                <i className="fas fa-info-circle" />
              </Tooltip>
            )}
          </Typography>
          <Typography
            variant={TypographyVariant.H6}
            color={TextColor.textAlternative}
            {...definitionTypography}
            boxProps={{
              marginTop: 0,
              marginBottom: MARGIN_MAP[gapSize],
            }}
            className="definition-list__definition"
            overflowWrap={OVERFLOW_WRAP.BREAK_WORD}
            as="dd"
          >
            {definition}
          </Typography>
        </React.Fragment>
      ))}
    </dl>
  );
}

DefinitionList.propTypes = {
  gapSize: PropTypes.oneOf(Object.values(Size)),
  dictionary: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ),
  tooltips: PropTypes.objectOf(PropTypes.string),
  termTypography: PropTypes.shape({
    ...omit(TypographyVariant.propTypes, ['tag', 'className', 'boxProps']),
  }),
  definitionTypography: PropTypes.shape({
    ...omit(TypographyVariant.propTypes, ['tag', 'className', 'boxProps']),
  }),
};
