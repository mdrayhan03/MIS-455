fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(data => userShow(data)) ;

function userShow(data) {
    for (var i = 0 ; i < data.length ; i ++) {
        console.log(`User ID: ${data[i].id}; User Name: ${data[i].username}; Full Name: ${data[i].name}`) ;
    }
}