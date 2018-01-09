import B from "./B";

module.exports = {
    init: () => {
        // Here we create an instance from the B module. Since this instance is not exposed anymore, it becomes hard to test.
        // Jest mocking has a solution for this.
        let privateVar = new B();
        privateVar.foo("baz");
    }
};