/**
 * Created by yangyang on 3/22/16.
 */
(function () {
    angular
        .module("LessonApp")
        .controller("LoginController", LoginController);

    function LoginController($scope, $location, $sce, UserService) {
        var vm = this;
        vm.oneAtATime = true;

        vm.status = {
            isFirstOpen: true,
            isSecondOpen: false,
            isThirdOpen: false,
            isFourthOpen:false
        };

        vm.PASSWORD_PATTERN = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{7,}$/;
        vm.EMAIL_PATTERN = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
        vm.USERNAME_PATTERN= /^[a-zA-Z0-9\.@_]{6,30}$/;

        vm.loginByCredential = loginByCredential;
        vm.getCodeByEmail = getCodeByEmail;
        vm.renderHtml = renderHtml;
        vm.showLogin = showLogin;

        function showLogin(){
            vm.createUser=true;
            vm.status.isSecondOpen = false;
            vm.status.isFourthOpen = true;
        }


        function renderHtml(html_code) {
            return $sce.trustAsHtml(html_code);
        }

        function loginByCredential(credential) {
            UserService
                .loginByCredential(credential)
                .then(function (response) {
                    console.log(response.data);
                    if (response.data.success) {
                        console.log("login successfully!");
                        $location.url("/");
                    }
                    else {
                        vm.pdErrorMsg = response.data.error;
                    }
                });
        }

        function getCodeByEmail(email) {
            console.log(email);
            UserService
                .getCodeByEmail(email)
                .then(function (response) {
                    console.log(response.data);
                    if (response.data.success) {
                        console.log("get code successfully!");

                    }
                    else {
                        vm.emlErrorMsg = response.data.error;
                    }
                });
        }

    }
})();