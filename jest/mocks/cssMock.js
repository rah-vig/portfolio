const cssMock = {
    process() {
        return 'export default {};';
    },
    getCacheKey() {
        return 'cssTransform';
    },
}

module.exports = cssMock;