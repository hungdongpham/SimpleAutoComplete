import styled from 'styled-components';

export const StyledNavbarContainer = styled.div`
  display: block;
  background-color: transparent;
  padding-top: 10px;
  padding-right: 10px;

  -webkit-box-pack: end;
  -ms-flex-pack: end;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: flex-end;
  justify-content: flex-end;
  background: -webkit-linear-gradient(180deg, rgba(0, 0, 0, 0.224) 0%, rgba(0, 0, 0, 0) 100%) ;
  background: -moz-linear-gradient(180deg, rgba(0, 0, 0, 0.224) 0%, rgba(0, 0, 0, 0) 100%) ;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.224) 0%, rgba(0, 0, 0, 0) 100%) ;

  .MuiBottomNavigation-root{
    background-color: ${({ theme }) => theme.colors.panel.navigation.background};
  }
  .MuiBottomNavigationAction-root{
    max-width: inherit;
    min-width: inherit;
    padding: 0 16px;
  }
  .MuiBottomNavigationAction-root.Mui-selected{
    font-size: initial;
    padding-top: 0px;
  }
  .MuiBottomNavigationAction-label{
    white-space: nowrap;
    height: 100% ;
    color: ${({ theme }) => theme.colors.panel.navigation.foreground};
    line-height: 70px;
    display: inline-block;
    border-bottom: 2px solid transparent;
    font-size: 14px;
    &:hover{
      border-bottom: 2px solid ${({ theme }) => theme.colors.panel.navigation.foreground};
    }
  }
  .MuiBottomNavigationAction-label.Mui-selected{
    font-size: 14px;
  }
`;
