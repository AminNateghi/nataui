import renderer from 'react-test-renderer';
import { render, screen, cleanup } from '@testing-library/react';
import { afterEach, describe, expect, test } from 'vitest';
import { Button } from '../button';

describe('Button - Unit test', () => {
  test('renders correctly', () => {
    const component = renderer.create(<Button />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('size prop', () => {
    const component = renderer.create(<Button size={'md'} />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('variant prop', () => {
    const component = renderer.create(<Button variant={'solid'} />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('shadow prop', () => {
    const component = renderer.create(<Button shadow={'md'} />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('color prop', () => {
    const component = renderer.create(<Button color={'info'} />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('disabled prop', () => {
    const component = renderer.create(<Button disabled />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('onClick prop', () => {
    const component = renderer.create(<Button onClick={() => {}} />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe('Button - Integration test', () => {
  afterEach(cleanup);

  test('label', () => {
    const label = 'Hello, button';
    render(<Button>{label}</Button>);
    expect(screen.getByText(label));
  });

  test('disabled', () => {
    const label = 'btn';
    render(<Button disabled>{label}</Button>);
    const btn = screen.getByText(label);
    expect(btn).toHaveProperty('disabled', true);
  });

  test('onClick', () => {
    const host = document.createElement('div');
    document.body.appendChild(host);
    const label = 'btn';
    render(
      <Button
        onClick={() => {
          host.append('button clicked');
        }}
      >
        {label}
      </Button>
    );
    const btn = screen.getByText(label);
    btn.click();
    expect(host.innerHTML).toContain('button clicked');
  });
});
