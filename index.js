var fs = require('fs');
module.exports = function(value, callback) {
	if(typeof value == "string") {
		fs.readFile(value, function(err, content) {
			if(err) {
				callback(err);
				return;
			}
			callback(null, content.toString());
		});
	}
	else {
		callback("Invalid path to load");
	}
};
