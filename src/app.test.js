import React from 'react';
import App from './App';
import { render, rerender } from '@testing-library/react';

test('app renders', () => {
    render(<App/>)
});
