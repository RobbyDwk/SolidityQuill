// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders SolidityQuill title', () => {
    render(<App />);
    const titleElement = screen.getByText(/SolidityQuill/i);
    expect(titleElement).toBeInTheDocument();
});
