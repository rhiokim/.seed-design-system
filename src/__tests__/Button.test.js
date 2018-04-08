import React from 'react'
import Button from '../Button'
import renderer from 'react-test-renderer'

test('should render Button component', () => {
  const component = renderer.create(<Button />)
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
