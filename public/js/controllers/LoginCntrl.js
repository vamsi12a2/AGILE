angular.module("agile").controller("LoginCntrl",['$scope','$http','Auth','$location',function($scope,$http,Auth,$location){
	
	
	$scope.title ="Signin";
	$scope.login = function(username,password){
	Auth.login(username,password).then(function(res){
				console.log(res.data)	
		})
	}
		
}])