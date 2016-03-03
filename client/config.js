/**
 * Created by yangyang on 3/2/16.
 */
(function () {
    angular
        .module("LessonApp")
        .config(configuration);

    function configuration($routeProvider) {
        $routeProvider
            .when("/", {
                redirectTo: "/lesson"
            })
            .when("/lesson", {
                templateUrl: "views/lesson/lesson.view.html",
                controller: "LessonController"
            })
            .when("/lesson/:id", {
                templateUrl: "views/lesson/lesson.view.html",
                controller: "LessonController"
            })
            .otherwise({
                templateUrl: "views/error/error.view.html",
            });
    }
})();