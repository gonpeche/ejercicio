import React from 'react';
import App from './App';
import renderer from 'react-test-renderer'

describe('Main component', () => {
  it('renderea Ok', () => {
    const tree = renderer
      .create(<App />)
      .toJSON();
      expect(tree).toMatchSnapshot();
  })
})


