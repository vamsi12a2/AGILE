angular.module("agile").
service("Auth",['$http','$rootScope',function($http,$rootScope)
{
	 var srv=this;
	var alerts= [];
	 srv.login = function(username,password)
	 {

		 return $http({
				 url:"/session",
				 method:"POST",
				 data: { username:username,password:password}
		 	}).then(function(res){

					var token = res.data;
					$rootScope.token = token;
					return $http({
						url:"/user",
						method:"GET",
						headers:{
							"x-auth":token
						}
					})
					
			})

	 }
	 srv.register = function(username,password)
	 {
			return $http({
			 url:"/user",
			 method:"POST",
			 data: {username:username,password:password}
		 })
	 }
	 return srv;
}])
