angular.module("Bangazon").controller("CustomerCtrl",
function ($scope, CustomerFactory, $location) {

    $scope.testing = "Testing Header"

    $scope.listCustomers = () =>{
        $location.url("/customer/list")
    }
    

    $scope.newCustomer= () =>{
        $location.url("/customer/new")
    }

    $scope.clearCustomers= () => {
        $location.url("/customer")
    }


}
)