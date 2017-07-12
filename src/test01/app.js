export const test01 = {
    template: require('./app.html'),
    controller(dataService, $translate, $window) {
        "use strict";
        var vm = this;
      
      dataService
      .getData()
      .then(function(response){
      	vm.nameList = response.data;
      });

      vm.localeKey = function (key) {
          $translate.use(key);
      };

      vm.localeKey('en'); // locale key - change en to fr and viceverse

      vm.goBack = function() {
 		    $window.history.back();
	    };
    }
}
