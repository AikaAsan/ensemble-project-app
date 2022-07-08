import { describe, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

describe('Header component', () => {
    test('Should render OMDB Movies', () => {
        render(<Header />);
        expect(screen.getByText('OMDB Movies')).toBeDefined();
    });
});
