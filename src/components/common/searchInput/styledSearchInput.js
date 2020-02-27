import styled from 'styled-components';

export const StyledSearchInputContainer = styled.div`
    font-size: 16px;
    .ui.input{
        min-width: 35%;
        height: 50px;
    }
    .ui.search .prompt {
        border-radius: 5px;
        font-weight: bold;
    }
    .ui.input>input{
        background-color: ${({ theme }) => theme.colors.searchBox.input.background};
        color: ${({ theme }) => theme.colors.searchBox.input.font};
    }
    .ui.search{
        left: 33%;
    }
    .ui.search>.results{
        margin-top: -2px;
        min-width: 35%;
        border-top: 0px;
        border-radius: 0px 0px 5px 5px;
        border: 1px solid rgba(34,36,38,.15);
        background-color: ${({ theme }) => theme.colors.searchBox.results.background};
    }
    .ui.label {
        background-color: transparent;
        padding: 0px;
        font-weight: normal;
        color: ${({ theme }) => theme.colors.searchBox.results.font};
    }
    .ui.search>.results .result{
        padding-top: 10px;
        padding-bottom: 10px;
        border-bottom: 0px;
        &:hover{
            background-color: #e6e6e6;
        }
    }
    .ui.icon.input>i.icon{
        color: ${({ theme }) => theme.colors.searchBox.input.font};
    }
    .ui.label, .ui.labels .label{
        font-size: 15px;
    }
    .ui.input>input:focus{
        border: 1px solid rgba(34,36,38,.15);
        background-color: ${({ theme }) => theme.colors.searchBox.input.background_focus};
        border-radius: 5px 5px 0px 0px;
        color: ${({ theme }) => theme.colors.searchBox.input.font};
    }

    /* Mobile mode */
    @media (max-width: 676px) {
        .ui.search{
            left: 0;
            top: 20%;
        }
        .ui.input{
            min-width: 100%;
        }
    }
`;