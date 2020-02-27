import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import { SHOW_LOCATIONS_FINGERPRINT } from 'constants/fingerprintConstants';
import { getIsLoading, getLocations } from 'selectors';
import FullPageLoader from 'components/common/loaders/FullPageLoader';
import { loadAllLocationsRequest } from 'actions';
import SearchInput from 'components/common/searchInput/searchInput';
import { StyledSearchPageContainer } from './styledSearchPage';
import getText from 'context/language/getText';

class LocationsList extends Component {
    componentDidMount() {
        const { loadLocations, locations } = this.props;

        if (isEmpty(locations)) {
            loadLocations();
        }
    }

    render() {
        const { isLoading, locations } = this.props;

        if (isLoading) return <FullPageLoader />;

        return (
            <StyledSearchPageContainer>
                <SearchInput
                    placeholder={getText('searchPage.placeHolder')}
                    source={locations}
                />
            </StyledSearchPageContainer>
        );
    }
}


LocationsList.propTypes = {
    loadLocations: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    locations: PropTypes.array.isRequired
};

const fingerprint = SHOW_LOCATIONS_FINGERPRINT;
const meta = {
    fingerprint
};

function mapStateToProps(state) {
    return {
        locations: getLocations(state),
        isLoading: getIsLoading(state)[fingerprint] || false,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        loadLocations: () => {
            dispatch(loadAllLocationsRequest({ meta }));
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LocationsList);
