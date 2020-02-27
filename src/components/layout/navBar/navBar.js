import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import getText from 'context/language/getText';
import { urlMap } from 'routes/urlMap';
import { StyledNavbarContainer }from 'components/layout/navBar/styledNavbarContainer';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import ThemeSwitch from 'components/layout/themeSwitch/themeSwitch';

const NavBar = (props) => {
  const { className } = props;

  const navObjects = {
    [urlMap.BECOME_HOST]: {
      label: getText('navbar.becomeAHost'),
      icon: null
    },
    [urlMap.HELP]: {
      label: getText('navbar.help'),
      icon: null
    },
    [urlMap.SIGN_UP]: {
      label: getText('navbar.signup'),
      icon: null
    },
    [urlMap.LOG_IN]: {
      label: getText('navbar.login'),
      icon: null
    }
  }

  const renderNavItems = () => {
    const arr = [];
    Object.entries(navObjects).forEach(([key, value]) => {
      arr.push(<BottomNavigationAction
        key={key}
        component={Link}
        to={key}
        value={value.label}
        label={value.label}
        icon={value.icon}
      />);
    });
    return arr;
  }

  const navObj = navObjects[window.location.pathname];
  const [value, setValue] = navObj ? React.useState(navObj.label) : '';

  return (
    <StyledNavbarContainer className={className}>
      <ThemeSwitch />
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
      >
        {renderNavItems()}
      </BottomNavigation>
    </StyledNavbarContainer>
  );
};

NavBar.propTypes = {
  className: PropTypes.string,
};
NavBar.defaultProps = {
  className: ''
};

function mapStateToProps(state) {
}

export default connect(mapStateToProps)(NavBar);
