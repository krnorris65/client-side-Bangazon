angular.module("Bangazon")
.factory("CustomerFactory", function($http){

    return Object.create(null, {
        "allCustomers": {
            value: function () {
                return $http({
                    "url": "http://localhost:5000/api/customer",
                    "method": "GET"
                }).then(response =>{
                    return response.data
                })

            }
        },
        "single": {
            value: function (id) {
                return $http({
                    "url": `http://localhost:5000/api/customer/${id}`,
                    "method": "GET"
                }).then(response =>{
                    return response.data
                })
            }
        },
        "update": {
            value: function (customerInfo, id) {
                return $http({
                    "url": `http://localhost:5000/api/customer/${id}`,
                    "method": "PUT",
                    "data": JSON.stringify(customerInfo),
                    "headers": {
                        "Content-Type": "application/json"
                    }
                })
            }
        },
        "add": {
            value: function (customerInfo) {
                return $http({
                    "url": "http://localhost:5000/api/customer",
                    "method": "POST",
                    "data": JSON.stringify(customerInfo),
                    "headers": {
                        "Content-Type": "application/json"
                    }
                })
            }
        }
    })
})