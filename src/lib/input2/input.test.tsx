import renderer from 'react-test-renderer'
import { describe, expect, test } from 'vitest'
import { Input } from './Input'

describe('Input', () => {
  test('Input component renders correctly', () => {
    const component = renderer.create(
      <Input />
    )

    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })
})