const assert = require('assert');

const buildMessage = require('../utils/buildMessage');

describe.only('utils - buildMessage', function () {
  describe('when receives an entity and an action', function () {
    it('should return the respective message', function () {
      const result = buildMessage('movie', 'create');
      const expected = 'movie created';
      assert.strictEqual(result, expected);
    });
  });
  describe('when recives an entity and an action and the action is a list', function () {
    it('should return de respective message with the entity in plural', function () {
      const result = buildMessage('movie', 'list');
      const expected = 'movies listed';
      assert.strictEqual(result, expected);
    });
  });
});
