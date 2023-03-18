import { render, screen, within } from '@testing-library/react';
import { expect, it } from 'vitest';
import Heading from '.';

it('should render Heading with text Hello world', () => {
  render(<Heading text="Hello world" />);
  const heading = within(screen.getByRole('heading', { name: /Hello world/ }));
  expect(heading).toBeDefined();
  expect(heading).toMatchSnapshot();
});
