'use strict';

const countExpressions = require('../index');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

chai.should();
chai.use(chaiAsPromised);

describe('countExpressions', () => {
	describe('callback', () => {
		it('should reject with param error', (done) => {
			//
		});

		it('should successfully count expressions', (done) => {
			//
		});
	});

	describe('promise', () => {
		it('should reject with param error', () => {
			//
		});

		it('should successfully count expressions', () => {
			//
		});
	});
});
