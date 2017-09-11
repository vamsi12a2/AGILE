angular.module("agile").config(
['$routeProvider',function($routeProvider){

	$routeProvider
<<<<<<< HEAD
	.when('/',{controller:'LoginCntrl',templateUrl:'/login'})
	.when('/user',{controller:'RegisterCntrl', templateUrl:'/user'})
	.when('/register',{controller:'RegisterCntrl', templateUrl:'register.html'})
=======
	.when('/',{controller:'LoginCntrl',templateUrl:'../views/login.html'})
	.when('/register',{controller:'RegisterCntrl', templateUrl:'../views/register.html'})
<<<<<<< HEAD
>>>>>>> 4e58fd4b351ae212686bd55797c814c6551469ee
=======
	.when('/user',{controller:'UserCntrl',templateUrl:'../views/user.html'})
>>>>>>> 410d6b7f6628e669751e4c44f512aab95a0ab11f
}
])
