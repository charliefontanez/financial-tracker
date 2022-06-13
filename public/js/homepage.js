
var IncomeData;

var totalIncomeEl = $("#total_income");
var totalExpenseEl = $("#total_expense");
var totalCashEl = $("#total_cash");

var incomeTotal =0;
var expenseTotal=0;
var cashTotal=0;

const fetchIncome = async () => {
await fetch('/api/income', {
    method: 'GET',
    headers:{'Content-Type': 'application/json'}
}) .then(response => response.json()) .then(data => {
    for(var i = 0;i< data.length;i++) {
        loadData(data[i].id,data[i].name,data[i].income,'income');
        incomeTotal += parseFloat(data[i].income);
        UpdateTotal();
    }
});
}
    
   
const fetchExpense = async () => {

    fetch('/api/expense', {
        method: 'GET',
        headers:{'Content-Type': 'application/json'}
    }) .then(response => response.json()) .then(data => {
        for(var i = 0;i< data.length;i++) {
            loadData(data[i].id,data[i].name,data[i].expense,'expense');
            expenseTotal += parseFloat(data[i].expense);
            console.log(data[i].expense)
            UpdateTotal();
        }
    });
}

const deleteItem = () => {
    console.log('111111111')
}
const incomeFormHandler = async (event) => {
event.preventDefault();
const name = document.querySelector('.income-name').value.trim();
const income = document.querySelector('.income-value').value.trim();

const response = await fetch('/api/income', {
    method: 'POST',
    body: JSON.stringify({name,income}),
    headers:{'Content-Type': 'application/json'}
}).then(response => response.json()) .then(data => {
    loadData(data.id,data.name,data.income,'income');
});
if (response.ok) {
console.log(response)
console.info(response)
} else {
    console.log('wrong')
}
}


const expenseFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('.expense-name').value.trim();
    const expense = document.querySelector('.expense-value').value.trim();

    const response = await fetch('/api/expense', {
        method: 'POST',
        body: JSON.stringify({name,expense}),
        headers:{'Content-Type': 'application/json'}
    }).then(response => response.json()) .then(data => {
        console.log(data)
        loadData(data.id,data.name,data.expense,'expense');
    });
    if (response.ok) {
    console.log(response)
    console.info(response)
    } else {
        console.log('wrong')
    }
}

function loadData(id,name,value,type) {
    // const card = document.querySelector('income-card');
    const list = document.querySelector(`.${type}-list`);
    const liEl = document.createElement('li');
    const deleteBtn = document.createElement('button');
    const nameTextarea = document.createElement('textarea');
    const valueTextarea = document.createElement('textarea');
    nameTextarea.value = name;
    valueTextarea.value = value;
    deleteBtn.setAttribute('type', 'click');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', async function() {
        const response = await fetch(`/api/${type}/${id}`, {
                    method: 'DELETE',
                    headers:{'Content-Type': 'application/json'}
                })
                if (response.ok) {
                console.log(response)
                console.info(response)
                liEl.setAttribute('style','display:none')
                } else {
                    console.log('wrong')
                }
    })
    const updateBtn = document.createElement('button');
    updateBtn.setAttribute('type', 'click');
    updateBtn.textContent = 'Update';
    updateBtn.addEventListener('click', async function() {
        var parsed = JSON.parse('{"' + type + '" : "' + valueTextarea.value + '"}')
        
        const response = await fetch(`/api/${type}/${id}`, {
                    method: 'PUT',
                    body: JSON.stringify({name , parsed}),
                    headers:{'Content-Type': 'application/json'}
                })
                if (response.ok) {
                console.log(response)
                console.info(response)
                
                } else {
                    console.log('wrong')
                }
        // console.log(arr)
    })
    if (list != null) {
        list.appendChild(liEl);
        liEl.appendChild(nameTextarea);
        liEl.appendChild(valueTextarea);
        liEl.appendChild(deleteBtn);
        liEl.appendChild(updateBtn)
    } else {
        return;
    }

}

var UpdateTotal = function(){
    cashTotal = incomeTotal - expenseTotal;
    console.log(incomeTotal);
    console.log(expenseTotal);
    console.log(cashTotal);
    totalIncomeEl.text (incomeTotal);
    totalExpenseEl.text(expenseTotal);
    totalCashEl.text(cashTotal);
}

// async function(type) {
//     const response = await fetch('/api/income', {
//         method: 'DELETE',
//         headers:{'Content-Type': 'application/json'}
//     })
//     if (response.ok) {
//     console.log(response)
//     console.info(response)
//     } else {
//         console.log('wrong')
//     }
// }
document.querySelector('.income-form')
.addEventListener('submit', incomeFormHandler);

document.querySelector('.expense-form')
.addEventListener('submit', expenseFormHandler);
fetchExpense();
fetchIncome();
//UpdateTotal();
loadData();
