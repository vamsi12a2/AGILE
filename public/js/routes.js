angular.module("agile").config(
['$routeProvider',function($routeProvider){

	$routeProvider
	.when('/login',{controller:'LoginCntrl',templateUrl:'../views/login.html'})
	.when('/register',{controller:'RegisterCntrl', templateUrl:'../views/register.html'})
	.when('/',{controller:'UserCntrl',templateUrl:'../views/temp.html'})
}
])
