/**
 * @jest-environment jsdom
 */

jest.useFakeTimers();

describe("handleAnimation", () => {
    
    const mockedDOMElement = {
        classList: {
            add: jest.fn(),
            remove: jest.fn(),
        }
    }

    test("should add a class to the DOM element and remove it after 100ms", () => {
        const handleAnimation = require("../handleAnimation")

        handleAnimation(mockedDOMElement)

        expect(mockedDOMElement.classList.add).toHaveBeenCalledWith("played")
        expect(mockedDOMElement.classList.remove).not.toHaveBeenCalled()

        jest.runAllTimers()

        expect(mockedDOMElement.classList.remove).toHaveBeenCalledWith("played")
    }) 
})