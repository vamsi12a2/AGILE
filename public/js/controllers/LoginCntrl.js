app.module("agile").controller("LoginCntrl",['$scope','$http','Auth','$location',function($http,Auth,$scope,$location){
	
	$scope.login = function(username,password){
	Auth.login(username,password).then(
			function(user)
			{
				$scope.user=user;
				$location.path("/posts");
			},
			function(res)
			{
				$location.path("/")
			}
		)
	}
		
}])