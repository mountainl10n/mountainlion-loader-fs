var fs = require('fs');
var Promise = require('lie');
module.exports = function(value) {
	if(typeof value == "string") {
		return new Promise(function(resolve, reject) {
			fs.readFile(value, function(err, content) {
				if(err) {
					reject(err);
					return;
				}
				resolve(content.toString());
			});
		});
	}
	else {
		return Promise.reject("Invalid path to load");
	}
};
