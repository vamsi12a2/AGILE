angular.module("agile").config(
['$routeProvider',function($routeProvider){

	$routeProvider
	.when('/',{controller:'LoginCntrl',templateUrl:'../views/login.html'})
	.when('/login',{controller:'RegisterCntrl', templateUrl:'/session'})
	.when('/register',{controller:'RegisterCntrl', templateUrl:'../views/register.html'})
}
])
