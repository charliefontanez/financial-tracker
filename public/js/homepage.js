
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


document.querySelector('.income-form')
.addEventListener('submit', incomeFormHandler);


document.querySelector('.expense-form')
.addEventListener('submit', expenseFormHandler);