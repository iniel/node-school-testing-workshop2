'use strict';

const fs = require('fs');

/**
 * Считает function expression
 * 
 * @param {Number} file путь к файлу
 * @returns {Promise}
 */
function countExpressions(file) {
	return new Promise((resolve, reject) => {
		if (!file) {
			return reject(new Error('File name is missing'));
		}

		fs.readFile(file, 'utf8', (err, data) => {
			if (err) {
				return reject(err);
			}

			const functionRegexp = /function\s?(\([\w\s$,]*\))/g;
			const matches = data.match(functionRegexp);

			if (matches) {
				return resolve(matches.length);
			}

			return resolve();
		});
	});
}

module.exports = countExpressions;
