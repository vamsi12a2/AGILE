angular.module("agile").config(
['$routeProvider',function($routeProvider){

	$routeProvider
<<<<<<< HEAD
	.when('/',{controller:'LoginCntrl',templateUrl:'/login'})
	.when('/user',{controller:'RegisterCntrl', templateUrl:'/user'})
	.when('/register',{controller:'RegisterCntrl', templateUrl:'register.html'})
=======
	.when('/',{controller:'LoginCntrl',templateUrl:'../views/login.html'})
	.when('/login',{controller:'RegisterCntrl', templateUrl:'/session'})
	.when('/register',{controller:'RegisterCntrl', templateUrl:'../views/register.html'})
>>>>>>> 4e58fd4b351ae212686bd55797c814c6551469ee
}
])
