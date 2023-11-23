/**
 * @jest-environment jsdom
 */
jest.spyOn(document , `getElementById` ).mockImplementation((id) => id);
import handleAnimation from "../handleAnimation"
import playSound from "../playSound"
const module = require(`../handleKeyPress`)

jest.mock("../handleAnimation", () => jest.fn());
jest.mock("../playSound", () => jest.fn())


describe(`handleKeyPress`, () => {
    test("when NumpadX is pressed, it should animate and play sound ", () => {

        const mockEvents = [
            {
                code: "Numpad1",
                keyId: "key-1",
                soundName: "chirp"
            },
            {
                code: "Numpad2",
                keyId: "key-2",
                soundName: "clap"
            },
            {
                code: "Numpad3",
                keyId: "key-3",
                soundName: "kick"
            },
            {
                code: "Numpad4",
                keyId: "key-4",
                soundName: "laser"
            },
            {
                code: "Numpad5",
                keyId: "key-5",
                soundName: "fuzz"
            },
            {
                code: "Numpad6",
                keyId: "key-6",
                soundName: "tom"
            },
            {
                code: "Numpad7",
                keyId: "key-7",
                soundName: "hit"
            },
            {
                code: "Numpad8",
                keyId: "key-8",
                soundName: "metronome"
            },
            {
                code: "Numpad9",
                keyId: "key-9",
                soundName: "whistle"
            }
        ]

        mockEvents.forEach((mockEvent) => {

            module.handleKeyPress(mockEvent)
            expect(handleAnimation).toHaveBeenCalledWith(mockEvent.keyId);
            expect(playSound).toHaveBeenCalledWith(mockEvent.soundName)
        })
    })
})
