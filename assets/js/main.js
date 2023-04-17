
/* Inputs */

const billNumber = document.querySelector(".bill__number");
const customTip = document.querySelector(".custom__tip");
const peopleNumber = document.querySelector(".people__number");


/* Buttons */

const btnTips = document.querySelectorAll(".btn-tip");
const btnReset = document.querySelector(".btn-reset");

/* Results */

const tipAmountResult = document.querySelector(".tip-amount-result");
const totalResult = document.querySelector(".total-result");

/* Alerts */

const alertError = document.querySelector(".alert__error");


btnTips.forEach((btn) => {

    btn.addEventListener('click', (e) => {
        const tipValue = e.target.innerText;
        const billNumber = document.querySelector(".bill__number").value;
        const peopleNumber = document.querySelector(".people__number").value;

        if (billNumber !=="" && peopleNumber !=="") {

            if (tipValue == "5%") {
                    
            let tipPersonValue = (billNumber * 5 / 100) / peopleNumber;
            let totalPersonValue = (billNumber / peopleNumber) + tipPersonValue;
    
            tipAmountResult.innerHTML = `\$ ${tipPersonValue.toFixed(2)}`;
            totalResult.innerHTML = `\$ ${totalPersonValue.toFixed(2)}`;

            } else if (tipValue == "10%") {

                let tipPersonValue = (billNumber * 10 / 100) / peopleNumber;
                let totalPersonValue = (billNumber / peopleNumber) + tipPersonValue;
    
                tipAmountResult.innerHTML = `\$ ${tipPersonValue.toFixed(2)}`;
                totalResult.innerHTML = `\$ ${totalPersonValue.toFixed(2)}`;

            } else if (tipValue == "15%") {
                    
                let tipPersonValue = (billNumber * 15 / 100) / peopleNumber;
                let totalPersonValue = (billNumber / peopleNumber) + tipPersonValue;
    
                tipAmountResult.innerHTML = `\$ ${tipPersonValue.toFixed(2)}`;
                totalResult.innerHTML = `\$ ${totalPersonValue.toFixed(2)}`;

            } else if (tipValue == "25%") {

                let tipPersonValue = (billNumber * 25 / 100) / peopleNumber;
                let totalPersonValue = (billNumber / peopleNumber) + tipPersonValue;

                tipAmountResult.innerHTML = `\$ ${tipPersonValue.toFixed(2)}`;
                totalResult.innerHTML = `\$ ${totalPersonValue.toFixed(2)}`;

            } else if (tipValue == "50%") {
                    
                let tipPersonValue = (billNumber * 50 / 100) / peopleNumber;
                let totalPersonValue = (billNumber / peopleNumber) + tipPersonValue;
    
                tipAmountResult.innerHTML = `\$ ${tipPersonValue.toFixed(2)}`;
                totalResult.innerHTML = `\$ ${totalPersonValue.toFixed(2)}`;
    
            } else {
    
                alertError.style.display = "block";
            }
        }
    })
})

btnReset.addEventListener('click', () => {
    
    billNumber.value = "";
    customTip.value = "";
    peopleNumber.value = "";
    tipAmountResult.innerHTML = "$ 0.00";
    totalResult.innerHTML = "$ 0.00";
    alertError.style.display = "none";
})

customTip.addEventListener('click', () => {
    const billNumber = document.querySelector(".bill__number").value;
    const peopleNumber = document.querySelector(".people__number").value;
    
    if (billNumber !=="" && peopleNumber !=="") {
        
        let tipPersonValue = (billNumber * customTip.value / 100) / peopleNumber;
        let totalPersonValue = (billNumber / peopleNumber) + tipPersonValue;

        tipAmountResult.innerHTML = `\$ ${tipPersonValue.toFixed(2)}`;
        totalResult.innerHTML = `\$ ${totalPersonValue.toFixed(2)}`;
    }
})