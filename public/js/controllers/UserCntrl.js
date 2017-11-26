angular.module("agile").controller("UserCntrl",[
'$scope','$http','Alerts','$timeout',function($scope,$http,Alerts,$timeout){
  console.log("User")
  $scope.alerts = []

  Alerts.getAlerts().then(function(res){
      $scope.alerts = res.data
    })

$scope.addAlert = function(){
console.log("In add alert function..")
$http({
  url : "/addData",
  method : "POST",
  data : {marketName:$scope.curr_pair,threshold:$scope.limit,number:$scope.number}
}).then(function(res){
  console.log(res.data)
  $scope.reload();
},
function(res){
    console.log("error:"+res)
})

}


$scope.reload = function(){
  Alerts.getAlerts().then(function(res){
      $scope.alerts = res.data
    })
}
/*var init = function(){

  Alerts.getAlerts().then(function(res){
      $scope.alerts = res.data
    })
}
init();*/

}])
