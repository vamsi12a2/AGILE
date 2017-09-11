angular.module("agile").config(
['$routeProvider',function($routeProvider){
	
	$routeProvider
	.when('/',{controller:'LoginCntrl',templateUrl:'/login'})
	.when('/user',{controller:'RegisterCntrl', templateUrl:'/user'})
	.when('/register',{controller:'RegisterCntrl', templateUrl:'register.html'})
}
])