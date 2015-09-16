(function() {
    'use strict';

	Hal9000.controller('NavbarCtrl', NavbarCtrl);
	
	NavbarCtrl.$inject = ['$scope', '$location', '$anchorScroll'];


	function NavbarCtrl($scope, $location, $anchorScroll){
		var init = function() {

			$(".parallax").scroll(function() {
				var windowPosition = $(".parallax").scrollTop();
				if(100 > windowPosition) {
					$(".navbar").removeClass("navbarBg");
					$(".navbar").removeClass("shadow-z-2");

				} else {
					$(".navbar").addClass("navbarBg");
					$(".navbar").addClass("shadow-z-2");

				}

		  	});
			
		}

		$scope.scrollTo = function(name){
			// $location.hash(name);
		 //    $anchorScroll();
	  // 		$scope.activeAnchor = $location.hash();
		}


		init();
	};

})();