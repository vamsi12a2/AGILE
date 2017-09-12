angular.module("agile").
service("Alerts",['$http','$rootScope',function($http,$rootScope){

  this.addAlert = function(alertname,curr_pair,filterBy,limit,token){

      return $http({
        url : "/addAlert",
        method : "POST",
        headers : {'x-auth' : token},
        data :{name:alertname,pair:curr_pair,filter:filterBy,limit:limit}
      })
  }

}])
