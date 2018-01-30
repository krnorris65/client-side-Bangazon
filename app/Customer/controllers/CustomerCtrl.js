angular.module("Bangazon").controller("CustomerCtrl",
function ($scope, CustomerFactory) {

    const outputEl = document.getElementById("customers")
    const inputEl = document.getElementById("input")
    
    $scope.listCustomers = () => {
        outputEl.html("")
        inputEl.hide()
        
        let custArray = CustomerFactory.allCustomers().then(
            theCustomers => {
                let cString = ""
                theCustomers.forEach(c => {
                    cString += `<h3 id="c${c.customerId}">${c.firstName} ${c.lastName}</h3> <button class="editButton customer_${c.customerId}">Edit</button>`
                })
                outputEl.html(cString)
            }
        ).then( c => {

            $(".editButton").on("click", editCustomer)
        }
        )

    }

    $("#singleCustomer").on("click", function(){
        outputEl.html("")
        inputEl.show();
        $("#updateButton").hide()
        $("#searchButton").show()
        $("#addButton").hide()

        const getSingleCustomer = function(){
            let firstInput= $("#firstName").val().toLowerCase();
            let lastInput= $("#lastName").val().toLowerCase();


            if(firstInput !== "" && lastInput !== ""){
                customerInterface.allCustomers().then(c => {
                    let custArray = c.filter(filteredItem => {
                        let first = filteredItem.firstName.toLowerCase();
                        let last = filteredItem.lastName.toLowerCase();
                        let custId = filteredItem.customerId

                        if(first === firstInput && last === lastInput){
                            customerInterface.single(custId).then(c => {
                                let cString = `<h3 id="c${c.customerId}">${c.firstName} ${c.lastName}</h3> <button class="editButton customer_${c.customerId}">Edit</button>`
                                outputEl.html(cString)
                                
                            }).then(x =>{
                                $("#firstName").val("")
                                $("#lastName").val("")
                            })
                        }
                    })
                    if(custArray.length === 0){
                        let cString = "<h3>Customer Not Found</h3>"
                        outputEl.html(cString)
                    }
                })
            } else {
                alert("Please Enter Both First and Last Name")
            } 

            }

        $("#searchButton").on("click", getSingleCustomer)
        
        }
    )

    $("#newCustomer").on("click", function(){
        outputEl.html("")
        $("#input").show();

        $("#updateButton").hide()
        $("#searchButton").hide()
        $("#addButton").show()

        const addnewCustomer = function(){
            let firstInput= $("#firstName").val();
            let lastInput= $("#lastName").val();


            if(firstInput !== "" && lastInput !== ""){
                const newCustomer = {
                    "firstName": firstInput,
                    "lastName": lastInput
                }
                customerInterface.add(newCustomer)
                $("#firstName").val("")
                $("#lastName").val("")
            } else {
                alert("Please Enter Both First and Last Name")
            } 

            }

        $("#addButton").on("click", addnewCustomer)
        }

    )


    const editCustomer = function(event){
        const currentId = parseInt(
            Array.from(event.target.classList).find(custClass => { 
            if (custClass.startsWith("customer_")) 
            return custClass
            })
            .split("_")[1]
        )
        const currentName = $(`#c${currentId}`)[0].innerHTML
        const firstName = currentName.split(" ")[0]
        const lastName = currentName.split(" ")[1]
        inputEl.show()
        $("#firstName").val(firstName)
        $("#lastName").val(lastName)
        
        $("#updateButton").show()
        $("#searchButton").hide()
        $("#addButton").hide()
        
        outputEl.html("")
        const updateCustomer = function(){
            let firstInput= $("#firstName").val();
            let lastInput= $("#lastName").val();


            if(firstInput !== "" && lastInput !== ""){
                const newCustomer = {
                    "customerId": currentId,
                    "firstName": firstInput,
                    "lastName": lastInput
                }
                customerInterface.update(newCustomer, currentId)
            } else {
                alert("Please Enter Both First and Last Name")
            } 

            }

        $("#updateButton").on("click", updateCustomer)

    }

}
)