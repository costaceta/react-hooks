import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import "@testing-library/jest-dom";

import App from './App';

describe('App component', () => {
    test('Should render title', () => {
        render(<App />);

        const title = screen.getByRole('heading', { name: 'React hooks - aulas' });

        expect(title).toBeInTheDocument();
    })
})


