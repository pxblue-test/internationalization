import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('Close menu functions correctly', () => {
    const wrapper = shallow(<App />).dive();
    wrapper.state().selectedItems = ['apple', 'banana', 'blueberry'];
    wrapper.instance().onCancel();
    let selectedItemsLength = wrapper.state().selectedItems.length;
    expect(selectedItemsLength).toBe(0);
});

it('Page title displays correctly', () => {
    const wrapper = shallow(<App />).dive();
    expect(wrapper.instance().getLangObject('en').I18N).toBe('Internationalization');
    expect(wrapper.instance().getLangObject('es').I18N).toBe('Internacionalización');
    expect(wrapper.instance().getLangObject('de').I18N).toBe('Internationalisierung');
    expect(wrapper.instance().getLangObject('ar').I18N).toBe('تدويل');
});

it('String objet properly selected by state variable', () => {
    const wrapper = shallow(<App />).dive();
    wrapper.state().lang = 'ar';
    let testObj = wrapper.instance().getLangObject(wrapper.state().lang);
    expect(testObj).toBe(wrapper.instance().getLangObject('ar'));
});
