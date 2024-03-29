import React from 'react';
import PropTypes from 'prop-types';

/**
 * @deprecated This has been deprecated in favour of the `<Icon />` component in ./ui/components/component-library/icon/icon.js
 * See storybook documentation for Icon here https://metamask.github.io/metamask-storybook/?path=/docs/components-componentlibrary-icon--default-story#icon
 */

const Swap = ({ className, size, color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 34 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17 33C25.8366 33 33 25.8366 33 17C33 8.16344 25.8366 1 17 1C8.16344 1 1 8.16344 1 17C1 25.8366 8.16344 33 17 33Z"
      stroke={color}
    />
    <path
      d="M21.4444 21.2214C21.4444 21.4147 21.2877 21.5714 21.0944 21.5714H12.9056C12.7123 21.5714 12.5556 21.4147 12.5556 21.2214V19.6907C12.5556 19.3765 12.1736 19.2214 11.9546 19.4467L9.2372 22.2417C9.10513 22.3776 9.10513 22.5938 9.2372 22.7297L11.9546 25.5247C12.1736 25.75 12.5556 25.595 12.5556 25.2808V23.75C12.5556 23.5567 12.7123 23.4 12.9056 23.4H22.8722C23.0655 23.4 23.2222 23.2433 23.2222 23.05V18.2643C23.2222 18.071 23.0655 17.9143 22.8722 17.9143H21.7944C21.6011 17.9143 21.4444 18.071 21.4444 18.2643V21.2214ZM12.5556 13.9214C12.5556 13.7281 12.7123 13.5714 12.9056 13.5714H21.0944C21.2877 13.5714 21.4444 13.7281 21.4444 13.9214V15.4522C21.4444 15.7664 21.8264 15.9214 22.0454 15.6962L24.7628 12.9011C24.8949 12.7653 24.8949 12.549 24.7628 12.4132L22.0454 9.61812C21.8264 9.39284 21.4444 9.5479 21.4444 9.8621V11.3929C21.4444 11.5862 21.2877 11.7429 21.0944 11.7429H11.1278C10.9345 11.7429 10.7778 11.8996 10.7778 12.0929V16.8786C10.7778 17.0719 10.9345 17.2286 11.1278 17.2286H12.2056C12.3989 17.2286 12.5556 17.0719 12.5556 16.8786V13.9214Z"
      fill={color}
    />
  </svg>
);

Swap.defaultProps = {
  className: undefined,
};

Swap.propTypes = {
  /**
   * Additional className
   */
  className: PropTypes.string,
  /**
   * Size of the icon should adhere to 8px grid. e.g: 8, 16, 24, 32, 40 and is required
   */
  size: PropTypes.number.isRequired,
  /**
   * Color of the icon should be a valid design system color and is required
   */
  color: PropTypes.string.isRequired,
};

export default Swap;
