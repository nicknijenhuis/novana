import { render, screen } from '@testing-library/react';

import HomePage from '@/app/page';

describe('Homepage', () => {
  it('renders the Components', () => {
    render(<HomePage />);
    const email = screen.getByText(/nick@novana.nl/i);

    expect(email).toBeInTheDocument();
  });
});
