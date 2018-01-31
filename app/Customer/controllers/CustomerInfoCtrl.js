angular.module("Bangazon").controller("CustomerInfoCtrl",
function ($scope, CustomerFactory, $routeParams, $timeout, $location) {

    $scope.customer = {}
    
    CustomerFactory.single($routeParams.customerId).then(customer => {        
        $scope.customer = customer

    })


    $scope.updateCustomer = () => {
        if($scope.editCustomer.firstName !== undefined && $scope.editCustomer.lastName !== undefined) {
            const customer = {
                "customerId": $scope.customer.customerId,
                "firstName": $scope.editCustomer.firstName,
                "lastName": $scope.editCustomer.lastName
            }
            debugger
            CustomerFactory.update(customer, customer.customerId).then(() => {
                $location.url("/customer/list")
            })
        } else {
            alert("Please enter first and last name")
        }
    }

}
)