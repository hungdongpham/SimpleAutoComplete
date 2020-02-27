import React from 'react';
import getText from 'context/language/getText';
import { Alert, alertTypes } from 'components/common/alerts';
import { StyledHomePageContainer } from './styledHomePage';
import Link from 'components/common/links/Link';
import { urlMap } from 'routes/urlMap';


const HomePage = () => {

  return (
    <StyledHomePageContainer>
      <Alert
        type={alertTypes.INFO}
        header={getText('home.header')}
        content={getText('home.content')}
      />
      <Link to={urlMap.SEARCH_PAGE}>
        {getText('searchPage.title')}
      </Link>
    </StyledHomePageContainer>
  );
};

export default HomePage;
