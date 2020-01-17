import React from 'react';
import PropTypes from 'prop-types';

export const Row = ({
  children,
  className,
  align = 'start',
  justify = 'start',
}) => {
  const alignment = `align-items-${align}`;
  const content = `justify-content-${justify}`;

  return (
    <div className={`row ${alignment} ${content} ${className}`}>{children}</div>
  );
};
Row.defaultProps = {
  className: '',
  align: 'start',
  justify: 'start',
};

Row.propTypes = {
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
  align: PropTypes.oneOf(['start', 'center', 'end']),
  justify: PropTypes.oneOf(['start', 'center', 'end', 'around', 'between']),
};
