import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'rsg-components/Styled';
import logo from './logo.svg';

const styles = ({ fontFamily }) => ({
  logo: {
    display: 'flex',
    alignItems: 'center',
    margin: 0,
    fontFamily: fontFamily.base,
    fontSize: 18,
    fontWeight: 'normal',
    color: '#6e6e6e',
  },
  image: {
    width: '2.5em',
    marginLeft: '-0.5em',
  },
});

export function LogoRenderer({ classes, children }) {
  return (
    <h1 className={classes.logo}>
      <img className={classes.image} src={logo} alt="React logo" />
      {children}
    </h1>
  );
}

LogoRenderer.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node,
};

export default Styled(styles)(LogoRenderer);
