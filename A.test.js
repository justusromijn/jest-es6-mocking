// Import the classes
import A from "./A.js";
import B from "./B.js";

// Trigger jest to replace the imported B to use the one in the __mocks__ folder.

// Note: this is done under the hood with the transformation using Babel.
// Jest is able to hoist the mock calls, so when it encounters an import pointing to the same path, it will swap out the code with the mocked version.
jest.mock("./B");

describe("A", () => {
    it("returns an instance of B", () => {
        // The init function returns a new instance of B
        let b = A.init();

        // Even though we get another instance from the B mock, it points to the same mock function (jest.fn).
        // So you can do some proper assertions, even though you don't have direct access to the instance.
        expect(B().foo).toHaveBeenCalledWith("baz");
    });
});