'use strict';

describe('javascript koans', function() {
  describe('callbacks vs linear code', function() {
    it('you should know how to write callbacks', function(done) {
      var reader = function(response) {
        var abstract = response.Abstract;
        expect(abstract).not.toBe('');
        done();
      };
      koans().makeIOCall(reader);
    });
  });
});
