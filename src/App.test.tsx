import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import Adapter from 'enzyme-adapter-react-16';
import './resources/i18n';

import Enzyme from 'enzyme';
Enzyme.configure({ adapter: new Adapter() });
import { createMount, createShallow } from '@material-ui/core/test-utils';

Enzyme.configure({ adapter: new Adapter() });
let mount: any;
let shallow: any;

describe('Internationalization', () => {
    beforeEach(() => {
        mount = createMount({ strict: true });
        shallow = createShallow({ dive: true });
    });

    afterEach(() => {
        mount.cleanUp();
    });

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});
