/**
 * @jest-environment jsdom
 */

jest.mock("../handleAnimation", () => jest.fn());
jest.mock("../playSound", () => jest.fn())
jest.spyOn(document, `getElementById`).mockImplementation((id) => id)


describe(`handleKeyPress`, () => {
    test("when Numpad1 is pressed, it should call animate and play sound ", () => {
    
        const handleAnimation = require("../handleAnimation");
        const handleKeyPress = require("../handleKeyPress");
        const playSound = require("../playSound");

        const mockEvent = {
            code: "Numpad1",
            keyId: `key-1`,
            soundName: `chirp`
        }

        handleKeyPress(mockEvent)

        expect(handleAnimation).toHaveBeenCalledWith("key-1");
        expect(playSound).toHaveBeenCalledWith("chirp")
    })
})
