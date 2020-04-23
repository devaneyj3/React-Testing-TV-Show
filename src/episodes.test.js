import React from 'react';
import { render, rerender } from '@testing-library/react';
import Episodes from './components/Episodes';

test('renders episode data from api when episodes are passed through', () => {
    const data = [{image: 'Chapter One', summary: 'Chapter One', runtime: 'Chapter One', number: 'Chapter One', name: 'Chapter One', season: 'Chapter One 1'}]
    const { queryAllByText, rerender } = render(<Episodes episodes={[]}/>);

    expect(queryAllByText(/chapter/i)).toHaveLength(0);

    rerender(<Episodes episodes={data}/>)

    expect(queryAllByText(/chapter/i)).toHaveLength(4);

})