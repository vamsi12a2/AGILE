angular.module("agile").controller("UserCntrl",[
'$scope','$http','Alerts',function($scope,$http,Alerts){
  console.log("User")
  $scope.alerts = []
  $scope.$on('viewContentLoaded', function(){
  Alerts.getAlerts().then(function(res){
      $scope.alerts = res.data
    })

})

/*var init = function(){

  Alerts.getAlerts().then(function(res){
      $scope.alerts = res.data
    })
}
init();*/

}])
