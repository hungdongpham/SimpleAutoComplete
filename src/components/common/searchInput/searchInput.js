import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyledSearchInputContainer } from './styledSearchInput';
import { Search, Label } from 'semantic-ui-react';
import _ from 'lodash';

const SearchInput = ({ placeholder, source, onSelect
}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [results, setResults] = useState([]);
    const [value, setValue] = useState('');

    const resultRenderer = ({ id , name }) => <Label key={id} content={name} />

    const handleResultSelect = (e, { result }) => {
        setValue(result.name);
        onSelect(result.name);
    };

    const handleSearchChange = (e, { value }) => {
        setIsLoading(true);
        setValue(value);
    onSelect(value);

        if (value.length < 1) {
            setIsLoading(false);
            setResults([]);
            setValue('');
            return;
        }

        const re = new RegExp(_.escapeRegExp(value), 'i');
        const isMatch = (result) => re.test(result.name);
        setIsLoading(false);
        setResults(_.filter(source, isMatch));
    };

    return (
        <StyledSearchInputContainer>
            <Search
                input={{ icon: 'search', iconPosition: 'left' }}
                loading={isLoading}
                onResultSelect={handleResultSelect}
                onSearchChange={_.debounce(handleSearchChange, 500, {
                    leading: true,
                })}
                results={results}
                value={value}
                resultRenderer={resultRenderer}
                placeholder={placeholder}
            />
        </StyledSearchInputContainer>
    )
};

SearchInput.defaultProps = {
    placeholder: '',
    source: [],
    onSelect: () => { },
};

SearchInput.propTypes = {
    placeholder: PropTypes.string,
    onSelect: PropTypes.func,
    source: PropTypes.array
};

export default SearchInput;