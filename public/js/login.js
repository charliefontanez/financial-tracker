console.log('stuff');
var testUser = {
    'username': 'Ortaylo'
}
const email = 'owentaylor60@yahoo.com';
const password = '123456'
const login = async (event) => {
    event.preventDefault();
    const response = await fetch('/api/user/login',{
        method: 'POST',
        body: JSON.stringify({email,password}),
        headers: {'Content-Type': 'application/json'}
    });
    
    if(response.ok){
        document.location.replace('/')
    } else {
        console.log('Failed to log in')
    }      
}
document
    .querySelector('.btn')
    .addEventListener('click', login)
