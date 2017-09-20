/**
 * Created by matheus on 04/09/17.
 */
angular.module('primeiraApp').controller('AuthCtrl', [
    '$location',
    'msgs',
    'auth',
    AuthController
])
function AuthController($location, msgs, auth) {
    const vm = this

    vm.loginMode = ""

    vm.changeMode = () => {
        if(auth.loginMode){
             vm.loginMode = false
        }else {
            vm.loginMode = true
        }
    }

    vm.login = () => {
        auth.login(vm.user, (err) =>{
            if (err){
                msgs.addError(err)
            }else{
                $location.path('/')
                vm.changeMode()
            }
        })

    }

    vm.signup = () => {
        auth.signup(vm.user, err => err ? msgs.addError(err) : $location.path('/'))

    }

    vm.getUser = () => auth.getUser()

    vm.logout = () => {
        auth.logout(() =>{
            $location.path('/')
            vm.changeMode()
        })

    }

    vm.changeMode()
}