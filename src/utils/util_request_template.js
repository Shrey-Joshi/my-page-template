const request = require('request')

const util_request_template = (input, callback) => {
	/**
	 * This is a template for a function.
	 * Inputs are 
	 * Outputs are
	 */

	url = '' + input

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to the service!', undefined)
        } else if (body.error) {
            callback('The requested service did not work', undefined)
        } else {
            callback(undefined, [
                "Whatever there is to return based on body"
            ])
        }
    })
}

module.exports = util_request_template