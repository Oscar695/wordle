import {getLetterResult} from "../wordlelogic"

describe("wordle", () => {

    describe("get letter result", () => {

        it("should return 'green' if correct", () => {
            const result = getLetterResult(1, "HELLO", "E" )
            expect(result).toBe("green")
        })

        it("should return 'yellow' if letter is present but not in correct location", () => {
            const result = getLetterResult(3, "HELLO", "E" )
            expect(result).toBe("yellow")
        })

        it("should return 'grey' if letter is not present", () => {
            const result = getLetterResult(1, "HELLO", "B" )
            expect(result).toBe("grey")
        })

    })

})