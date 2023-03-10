import { render, screen, fireEvent } from "@testing-library/react";
// import userEvent from '@testing-library/user-event';
import Greeting from "./Greeting";

describe('Greeting component', () => {
    test('renders "Hello World" as a text', () => {
        //Arrange
        render(<Greeting />);
    
        //Act
        // ... nothing
    
        //Assert
        const helloWorldElement = screen.getByText('Hello World', { exact: false });
        expect(helloWorldElement).toBeInTheDocument();
    });

    test('renders "good to see you" if the button was NOT clicked', () => {
        render(<Greeting />);

        const messageElement = screen.getByText('good to see you', { exact: false });
        expect(messageElement).toBeInTheDocument();
    });

    test('renders "Changed!" if the button was clicked', () => {
        render(<Greeting />);

        //Act
        const buttonElement = screen.getByRole('button'); //could get with getByText too
        fireEvent.click(buttonElement); 
        //could also use userEvent but it would be async (await in this line)
        // await userEvent.click(buttonElement);

        const messageElement = screen.getByText('Changed!');
        expect(messageElement).toBeInTheDocument();
    });

    test('does not render "good to see you" when the button was clicked', () => {
        render(<Greeting />);

        const buttonElement = screen.getByRole('button');
        fireEvent.click(buttonElement);

        const greetingElement = screen.queryByText('good to see you', { exact: false });
        expect(greetingElement).toBeNull();
    });
});
