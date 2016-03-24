/**
 * Created by yangyang on 3/22/16.
 */
(function(){
    angular
        .module("LessonApp")
        .controller("LoginController", LoginController);

    function LoginController($http){
        var vm = this;
        vm.oneAtATime = true;


        vm.status = {
            isFirstOpen: true,
            isSecondOpen: false,
            isThirdOpen: false,
        };
    }
})();