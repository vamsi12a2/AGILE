angular.module("agile").config(
['$routeProvider',function($routeProvider){
	
	$routeProvider
	.when('/',{controller:'LoginCntrl',templateUrl:'/'})
	.when('/user',{controller:'RegisterCntrl', templateUrl:'/user'})
}
])