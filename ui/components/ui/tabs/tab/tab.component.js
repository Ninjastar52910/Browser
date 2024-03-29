import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  BLOCK_SIZES,
  DISPLAY,
  TEXT_ALIGN,
} from '../../../../helpers/constants/design-system';
import Box from '../../box';

const Tab = (props) => {
  const {
    activeClassName,
    className,
    'data-testid': dataTestId,
    isActive,
    name,
    onClick,
    tabIndex,
    tabKey,
  } = props;

  return (
    <Box
      as="li"
      className={classnames('tab', className, {
        'tab--active': isActive,
        [activeClassName]: activeClassName && isActive,
      })}
      data-testid={dataTestId}
      onClick={(event) => {
        event.preventDefault();
        onClick(tabIndex);
      }}
      key={tabKey}
    >
      <Box
        as="button"
        padding={2}
        textAlign={TEXT_ALIGN.CENTER}
        display={DISPLAY.BLOCK}
        width={BLOCK_SIZES.FULL}
      >
        {name}
      </Box>
    </Box>
  );
};

Tab.propTypes = {
  activeClassName: PropTypes.string,
  className: PropTypes.string,
  'data-testid': PropTypes.string,
  isActive: PropTypes.bool, // required, but added using React.cloneElement
  name: PropTypes.string.isRequired,
  tabKey: PropTypes.string.isRequired, // for Tabs selection purpose
  onClick: PropTypes.func,
  tabIndex: PropTypes.number, // required, but added using React.cloneElement
};

Tab.defaultProps = {
  activeClassName: undefined,
  className: undefined,
  onClick: undefined,
};

export default Tab;
