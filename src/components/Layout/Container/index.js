import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export function Container({ children, className, full = true, style }) {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setHeight(window.innerHeight);
    window.addEventListener('resize', () => {
      setHeight(window.innerHeight);
    });
  }, []);

  const styles = full
    ? { minHeight: `${height}px`, height: 'auto' }
    : { ...style };

  return (
    <div className={`container ${className} pr-3 pl-3`} style={styles}>
      {children}
    </div>
  );
}

Container.defaultProps = {
  full: true,
  style: {},
};

Container.propTypes = {
  children: PropTypes.element.isRequired,
  className: PropTypes.string.isRequired,
  full: PropTypes.bool,
  style: PropTypes.shape,
};
