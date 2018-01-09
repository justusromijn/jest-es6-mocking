const stub = {
    foo: jest.fn().mockImplementation(() => "bar")
};

module.exports = () => stub;