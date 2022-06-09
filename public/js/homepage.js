var IncomeData;
const fetchIncome = async () => {
await fetch('/api/income', {
    method: 'GET',
    headers:{'Content-Type': 'application/json'}
}) .then(response => response.json()) .then(data => {
    for(var i = 0;i< data.length;i++) {
        loadData(data[i].id,data[i].name,data[i].income,'income');
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
    liEl.textContent = name + ' ' + value
    if (list != null) {
        list.appendChild(liEl);
        liEl.appendChild(deleteBtn);
    } else {
        return;
    }

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
loadData();
