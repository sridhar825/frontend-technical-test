export default matchHeight;

function matchHeight($timeout, $q, $window) {  
  return {
    restrict: 'CAD',
  
    link: function(scope, element,attrs) {
      var selectedElements;

      scope.height = null;

      $timeout(function() {
        if (!attrs.targetEl) {
          // if an element is not defined, it will look for the next available element
          selectedElements = element.children();
        } else {
          selectedElements = angular.element(element).find(attrs.targetEl);
        }

        scope.checkMobileView();
      });

      // sets height of element
      scope.calculateHeight = function() {
        return $q(function(resolve) {
          var height = 0;

          for (var i = 0; i < selectedElements.length; i++) {
            var offsetHeight = selectedElements[i].offsetHeight;

            if (height < offsetHeight) {
              height = offsetHeight;
              scope.height = height;
            }
          }
          for (var i = 0; i < selectedElements.length; i++) {
            angular.element(selectedElements[i]).css('height', height + 'px');
          }
          resolve();
        });
      };

      // resets height to auto
      scope.resetHeight = function () {
        return $q(function(resolve) {
          for (var i = 0; i < selectedElements.length; i++) {
            angular.element(selectedElements[i]).css('height', 'auto');
          }
          resolve();
        });
      };

      // checks to see if mobile and applies class and styles
      scope.checkMobileView = function() { 
      if ($window.innerWidth <= 767) {
       scope.resetHeight();
    } else {
      scope.resetHeight().then(function() {
            scope.calculateHeight();
          });  
    }       
               
      };

      // watches screen resize and re-calculates the height of the elements
      scope.$on('window-resize', function() {
        $timeout(function() {
          scope.checkMobileView();
        });
      });
    }
  }
};
