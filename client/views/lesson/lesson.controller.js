/**
 * Created by yangyang on 3/2/16.
 */
(function () {
    angular
        .module("LessonApp")
        .controller("LessonController", LessonController);

    function LessonController($scope, $http, $location, $sce){
        var vm = this;
        vm.renderHtml = renderHtml;
        vm.submit = submit;

        $http.get("https://essentials24.net/api.php?a=less_info&i=4.1.2")
            .success(function (data) {
                vm.lesson = data;
                var lessId = vm.lesson.lessID;
                $location.url('/lesson/'+lessId);
            });


        function renderHtml(html_code) {
            return $sce.trustAsHtml(html_code);
        }

        function submit(btn) {
            console.log(btn + " button clicked");
            console.log(vm.form);
        }
    }
})();