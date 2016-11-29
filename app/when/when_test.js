'use strict';

describe('myApp.when module', function() {

  beforeEach(module('myApp.when'));

  describe('when controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var whenCtrl = $controller('WhenCtrl');
      expect(whenCtrl).toBeDefined();
    }));

  });
});
