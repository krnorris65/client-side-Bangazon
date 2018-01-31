angular.module("Bangazon").controller("CustomerNewCtrl",
function ($scope, CustomerFactory, $location) {

    $scope.newCustomer = {}

    $scope.addNewCustomer = () =>{
        const customer = {
            "firstName": $scope.newCustomer.firstName,
            "lastName": $scope.newCustomer.lastName
        }
        CustomerFactory.add(customer).then(() => {
            $location.url("/customer/list")
        })
    }

}
)