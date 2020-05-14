'use strict';

module.exports = function (it, expect) {
  it('should return true when ...', function () {
    expect(true).to.eql(true);
  });
  it('should return false when ...', function () {
    expect(false).to.eql(false);
  });
};