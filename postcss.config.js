const postCssMediaQuery = require('postcss-easy-media-query')
const postCssNested = require('postcss-nested')

module.exports = {
    plugins: [
        postCssNested(),
        postCssMediaQuery()
    ]
}