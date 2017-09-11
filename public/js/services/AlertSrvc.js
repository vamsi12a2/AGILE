angular.module("agile").
service("Alerts",['$http','$rootScope',function($http,$rootScope){

  this.getAlerts = function(){

      return $http({
        url : "/getData",
        method : "GET",
        headers : {'x-auth' : $rootScope.token}
      })
  }

}])
