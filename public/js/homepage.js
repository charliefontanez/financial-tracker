var IncomeData;

    fetch('/api/income', {
        method: 'GET',
        headers:{'Content-Type': 'application/json'}
    }) .then(response => response.json()) .then(data => {
        for(var i = 0;i< data.length;i++) {
            loadData(data[i].name,data[i].income,'income');
        }
    });
   

    fetch('/api/expense', {
        method: 'GET',
        headers:{'Content-Type': 'application/json'}
    }) .then(response => response.json()) .then(data => {
        for(var i = 0;i< data.length;i++) {
            loadData(data[i].name,data[i].expense,'expense');
        }
    });



const incomeFormHandler = async (event) => {
event.preventDefault();
const name = document.querySelector('.income-name').value.trim();
const income = document.querySelector('.income-value').value.trim();

const response = await fetch('/api/income', {
    method: 'POST',
    body: JSON.stringify({name,income}),
    headers:{'Content-Type': 'application/json'}
})
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
    })
    if (response.ok) {
    console.log(response)
    console.info(response)
    } else {
        console.log('wrong')
    }
}

function loadData(name,value,type) {
    // const card = document.querySelector('income-card');
    const list = document.querySelector(`.${type}-list`);
    const liEl = document.createElement('li');
    liEl.textContent = name + ' ' + value
    if (list != null) {
        list.appendChild(liEl);
    } else {
        return;
    }

}
document.querySelector('.income-form')
.addEventListener('submit', incomeFormHandler);


document.querySelector('.expense-form')
.addEventListener('submit', expenseFormHandler);

loadData();
