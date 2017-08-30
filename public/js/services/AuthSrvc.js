angular.module("agile").
service("Auth",function($http)
{
	 var srv=this;
	 srv.login = function(username,password)
	 {
		
		return	 $http({
				 url:"/login",
				 method:"POST",
				 data: { username:username,password:password}
		 	})
		 
	 }
	 srv.register = function(username,password)
	 {
		 return $http({
			 url:"/register",
			 method:"POST",
			 data: { username:username,password:password}
		 })
	 }
	 return srv;
})