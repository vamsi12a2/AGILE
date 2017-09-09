angular.module("agile").controller("RegisterCntrl",['$scope','$http','Auth','$location',function($scope,$http,Auth,$location){
	
	$scope.title="Register"
	
	$scope.register = function(username,password){
	Auth.register(username,password).then(
			function(res)
			{
					console.log(res.data)
					if(res.data.status === "true")
					{
						$scope.user = res.data.user;
						$location.path("/user")
					}
			},
			function(res)
			{
				$location.path("/error")
			}
		)
	}
		
}])