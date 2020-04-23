import React from 'react';
import App from './App';
import { render, rerender, fireEvent, waitFor } from '@testing-library/react';
import { FetchShow as mockFetchShow } from './api/fetchShow';

test('app renders', () => {
    render(<App/>)
});

jest.mock('./api/fetchShow');
console.log(mockFetchShow);


// test('Fetches data when interacting with the Dropdown', async () => {
//     const mockData = {data: {id: '2993', name: 'Stranger Things'}}
//     mockFetchShow.mockResolvedValueOnce(mockData);
//{_embedded: {episodes: [{name: 'Chapter One', summary: 'Chapter One', runtime: 'Chapter One', number: 'Chapter One', season: 'Chapter One 1'}]}}
    // const { getByText, queryAllByText } = render(<App/>);
    // const dropdownText = getByText(/season/i);

    // fireEvent.click(dropdownText);

    // await waitFor(() => {
    //     expect(queryAllByText(/chapter/i)).toHaveLength(4);
    // })
// })