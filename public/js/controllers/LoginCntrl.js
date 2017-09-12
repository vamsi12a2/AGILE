angular.module("agile").controller("LoginCntrl",['$scope','$http','Auth','$location','$window',function($scope,$http,Auth,$location,$window){


	$scope.title ="Signin";
	$scope.login = function(username,password){
	Auth.login(username,password).then(function(res){
				if(res.data)
				{
					console.log(res.data.Alert)
					Auth.alerts = res.data.Alert
					$location.path("/user")
				}
		},
		function(res)
		{
			$location.path("/error")
		})
	}

}])
