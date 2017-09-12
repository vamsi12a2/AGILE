angular.module("agile").controller("UserCntrl",[
'$scope','$http','Alerts','Auth','$rootScope','$location',function($scope,$http,Alerts,Auth,$rootScope,$location){
  console.log("User")
  $scope.token = $rootScope.token
  $scope.alerts = []
  $scope.$watch('viewContentLoaded', function(){
    
   
    console.log($scope.token)
    if(!$scope.token)
    {
     
      $location.path("/error")
    }
    console.log($scope.alerts)
    if($scope.alerts.length === 0 )
    {
      $scope.alerts = Auth.alerts;
    }
    
})
  
  $scope.addAlert = function(alertname,curr_pair,filterBy,limit){
    
     $('#alertModal').modal('hide');
    Alerts.addAlert(alertname,curr_pair,filterBy,limit,$scope.token).then(function(res){
      
      console.log(res.data)
      $scope.alerts = res.data.Alert
      $location.path("/user")
      
    },function(res){
      
      $location.path("/error")
    })
    
  }

/*var init = function(){

  
  console.log($rootScope.token + "herll")
    if(!$rootScope.token){
     console.log($rootScope.token)
      $location.path("/error")
    }
  $scope.alerts = Auth.alerts;
}
init();*/

}])
