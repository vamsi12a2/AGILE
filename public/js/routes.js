angular.module("agile").config(
['$routeProvider',function($routeProvider){

	$routeProvider
	.when('/',{controller:'LoginCntrl',templateUrl:'../views/login.html'})
	.when('/register',{controller:'RegisterCntrl', templateUrl:'../views/register.html'})
	.when('/user',{controller:'RegisterCntrl',templateUrl:'../views/user.html'})
}
])
