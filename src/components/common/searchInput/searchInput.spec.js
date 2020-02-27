import React from 'react';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MockAppWrapper from 'mocks';
import TestRenderer from 'react-test-renderer';
import SearchInput from './searchInput';

configure({ adapter: new Adapter() });

describe('SearchInput', () => {
    const mockSelectHandler = jest.fn();
    const collection = [
        { name: 'Ho Chi Minh', population: '500000' },
        { name: 'An Giang', population: '500000' }
    ];

    const mockProps = {
        placeholder: 'Test',
        source: collection,
        onSelect: mockSelectHandler
    };

    const component = (<SearchInput {...mockProps} />);
    const wrapper = mount(<MockAppWrapper>{component}</MockAppWrapper>);

    it('matches the snapshot', () => {
        const tree = TestRenderer.create(
            <MockAppWrapper>
                <React.Fragment>
                    <SearchInput />
                </React.Fragment>
            </MockAppWrapper>
        );
        expect(tree).toMatchSnapshot();
    });

    it('renders contain input', () => {
        expect(wrapper.exists('input')).toBe(true);
    });

    it('renders with loading status is false', () => {
        const wrapper = shallow(component);
        const searchInput = wrapper.find('Search');
        expect(searchInput.prop('loading')).toEqual(false);
    });

    it('show noResultsMessage', () => {
        const wrapper = shallow(component);
        const searchInput = wrapper.find('Search');
        expect(searchInput.prop('noResultsMessage')).toEqual('No results found.');
    });

    it('detects option select', () => {

        // going from 'H' to 'Ho Chi Minh' simulates the selection of the 'Ho Chi Minh' option
        wrapper.find('input').simulate('change', { target: { name: '', value: 'H' } });
        wrapper.find('input').simulate('change', { target: { name: '', value: 'Ho Chi' } });
        wrapper.find('input').simulate('change', { target: { name: '', value: 'Ho Chi Minh' } });

        expect(mockSelectHandler).toHaveBeenCalledWith('Ho Chi Minh');

        // going from 'AN gIAng' to 'An Giang' simulates the selection of the 'An Giang' option
        wrapper.find('input').simulate('change', { target: { name: '', value: 'A' } });
        wrapper.find('input').simulate('change', { target: { name: '', value: 'aN gia' } });
        wrapper.find('input').simulate('change', { target: { name: '', value: 'An Giang' } });

        expect(mockSelectHandler).toHaveBeenCalledWith('An Giang');
    });

    it('selects a custom user input on Enter', () => {
        wrapper.find('input').simulate('change', { target: { name: '', value: 'H' } });
        wrapper.find('input').simulate('change', { target: { name: '', value: 'Ho Chi' } });
        wrapper.find('input').simulate('change', { target: { name: '', value: 'Ho Chi Minh' } });

        wrapper.find('input').simulate('keypress', { key: 'Enter' });

        expect(mockSelectHandler).toHaveBeenCalledWith('Ho Chi Minh');
    });
});

