// import React from 'react';
// import { configure, shallow } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
// import toJson from 'enzyme-to-json';

// import Layout from './layout';

// configure({ adapter: new Adapter() });

// describe('<Layout />', () => {
//   let props;

//   beforeEach(() => {
//     props = {};
//   });

//   it('renders without exploding', () => {
//     const layout = shallow(<Layout {...props} />);

//     expect(layout).toHaveLength(1);
//   });

//   it('matches the current snapshot', () => {
//     const layout = shallow(<Layout {...props} />);

//     expect(toJson(layout)).toMatchSnapshot();
//   });
// });
