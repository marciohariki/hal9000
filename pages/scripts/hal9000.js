
var Hal9000 = angular.module('Hal9000', []);

Hal9000.config(function($httpProvider) {
    //console.log("Enable cross domain calls");
	delete $httpProvider.defaults.headers.common['X-Requested-With'];
	$httpProvider.defaults.useXDomain = true;
});

