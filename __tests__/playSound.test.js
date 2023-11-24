describe("playSound", () => {
    const playSound = require("../playSound").default

    test("should play sound when no sound is playing", () => {

        const mockFirstSound = {
            currentTime: 0,
            play: jest.fn()
        }

        expect(mockFirstSound.currentTime).toBe(0)

        playSound(mockFirstSound)

        expect(mockFirstSound.currentTime).toBe(0)
        expect(mockFirstSound.play).toHaveBeenCalled()

    })

    test("should play sound from 0 when sound is already playing", () => {

        const mockSecondSound = {
            currentTime: 2,
            play: jest.fn()
        }

        expect(mockSecondSound.currentTime).not.toBe(0)
        expect(mockSecondSound.currentTime).toBe(2)

        playSound(mockSecondSound)

        expect(mockSecondSound.currentTime).toBe(0)
        expect(mockSecondSound.play).toHaveBeenCalled()

    })
})