


function calculate() {
    // income 
    let inputIncome = document.getElementById("income-input");
    let inputFood = document.getElementById("input-food");
    let inputRent = document.getElementById("input-rent");
    let inputClothes = document.getElementById("input-clothes");

    if (inputIncome.value <= 0 || inputIncome.value == "" || inputFood.value == "" || inputRent.value == "" || inputClothes.value == "") {
        document.getElementById("errorMsg").innerText = "Enter a positive Number in all field";
    }
    else{
        let inputIncomeText = parseFloat(inputIncome.value);
        let inputFoodText = parseFloat(inputFood.value);
        let inputRentText = parseFloat(inputRent.value);
        let inputClothesText = parseFloat(inputClothes.value);

        let totalExpenses = document.getElementById("total-expenses");
        let balance = document.getElementById("balance");
    
        const sum =  inputFoodText + inputRentText + inputClothesText;
        const subtraction = inputIncomeText - sum;
        
        totalExpenses.innerText = sum;
        balance.innerText = subtraction;

        
        inputFood.value = ' ';
        inputRent.value = ' ';
        inputClothes.value = ' ';
    }
   
}

// saving money
// saving money 

function save() {
    

    // saving parsent 
    let saveInput = document.getElementById("save-input");
    if (saveInput.value == "") {
        document.getElementById("errorMsg").innerText = "required Save field";
    }
    else{
        let inputIncome = document.getElementById("income-input");
        let inputIncomeText = parseFloat(inputIncome.value);
            
        let savingBalance = document.getElementById("saving-balance");
        let RemainingBalance = document.getElementById("Remaining-balance");

        let saveInputText = parseFloat(saveInput.value);
        let multiply = inputIncomeText * saveInputText ;
        
        let divide = multiply / 100 ;

        savingBalance.innerText = divide;
        
        RemainingBalance.innerText = inputIncomeText - divide;
        saveInput.value = ' ';
    }
    

    
    
}
