(function() {
    'use strict';

	Hal9000.controller('HomeCtrl', HomeCtrl);
	
	HomeCtrl.$inject = ['$scope', '$location', '$anchorScroll'];


	function HomeCtrl($scope, $location, $anchorScroll){
		var init = function() {

			$(".slider_block_back").vegas({
			    slides: [
			        { src: "/static/images/landing-bg.jpg" },
			        { src: "/static/images/landing-bg-2.jpg" }
			    ]
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