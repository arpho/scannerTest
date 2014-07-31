// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic']).controller('MainCtrl',['$scope',
'QRScanService',function($scope,QRScanService){
    $scope.ciao = "ciao";
    $scope.click = function(){
        console.log('click');
        QRScanService.scan();
    }
    }]).factory("QRScanService", [function () {

  return {
    scan: function(success, fail) {
        
      /*QRScanService.scan(
        function (result) { success(result); },
        function (error) { fail(error); }
      );*/
      //console.log("servizio attivo");
      cordova.plugins.barcodeScanner.scan(
      function (result) {
          alert("We got a barcode\n" +
                "Result: " + result.text + "\n" +
                "Format: " + result.format + "\n" +
                "Cancelled: " + result.cancelled);
      }, 
      function (error) {
          alert("Scanning failed: " + error);
      }
   );
   //console.log("servizio stop")
    }
  };

}])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
