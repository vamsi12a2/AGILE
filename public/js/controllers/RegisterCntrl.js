app.module("agile").controller("RegisterCntrl",['$scope','$http','Auth','$location',function($http,Auth,$scope,$location){
	
	$scope.register = function(username,password){
	Auth.register(username,password).then(
			function(user)
			{
				$scope.user=user;
				$location.path("/loginPage");
			},
			function(res)
			{
				$location.path("/")
			}
		)
	}
		
}])