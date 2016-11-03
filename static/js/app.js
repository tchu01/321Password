var app = angular.module("app", []);

app.controller("AppCtrl", function($http) {
    var app = this;

    app.message = "Am I working yet?";
    $http.get("/api/entry").success(function(data) {
        app.entries = data.objects;
    })

})