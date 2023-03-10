import { render, screen } from "@testing-library/react";

import Async from "./Async";

describe('Async component', () => {
    test('renders posts if request succeeds', async () => {
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async () => [{ id: 'p1', title: 'First post' }]
        });
        render(<Async />);

        //no acting necessary cause the request will be done without any interference

        // jest.setTimeout(10000) ?
        const listItemElements = await screen.findAllByRole('listitem', {}, {timeout: 10000});
        expect(listItemElements).not.toHaveLength(0);
    });
});