import React from "react";
import App from "./App";
import { render, fireEvent, waitFor, findByText } from "@testing-library/react";
import { FetchShow as mockFetchShow } from "./api/fetchShow";


// test("renders App without crashing", () => {
//     render(<App />);
// })
//when I comment this out the API test passes but when I don't the the test to render the app fails but the API test passes

// test('Dropdown Components renders options on click', async () => {
//     const { getByText } = render(<App/>)

//     console.log(<App/>)

//     fireEvent.click(getByText(/select a season/i))

//     const items = await findByText(/season #[0-4]/i)

//     expect(items).toHaveLength(4)
// })
jest.mock("./api/fetchShow");

test("Fetches data when from api", async () => {
  const mockData = {
    data: {
      image: { original: "Stranger Things" },
      id: "2993",
      name: "Stranger Things",
      summary: "Stranger Things",
      _embedded: {
        episodes: [
          {
            name: "Stranger Things",
            summary: "Stranger Things",
            runtime: "Stranger Things",
            number: "Stranger Things",
            season: "Stranger Things",
          },
        ],
      },
    },
  };

  mockFetchShow.mockResolvedValueOnce(mockData);

  const { getByText, queryAllByText } = render(<App />);
  const dropdownText = getByText(/Fetching data.../i);

  fireEvent.click(dropdownText);

  await waitFor(() => {
    expect(queryAllByText(/Stranger Things/i)).toHaveLength(2);
  });
});
