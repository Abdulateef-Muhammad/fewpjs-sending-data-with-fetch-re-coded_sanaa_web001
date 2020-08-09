// // Add your code here
// submitData('john Doe', 'johndoe@example.com')
// .then(function(response){
//   return response.json();
// })
// .then(function(json){
//   let infoBox = document.createElement('div');
//   infoBox.setAttribute('id', 'info-box');
//   document.body.appendChild(infoBox);
//   // infoBox.innerHTML += '<p>' + json.name + '</p>';
//   // infoBox.innerHTML += '<p>' + json.email + '</p>';
//   infoBox.innerHTML = json.id;
// 
// }).catch(function(error){
//   document.body.innerHTML = error.message;
// });
// 
// 
// 
// function submitData(name, email) {
//   let url = 'http://localhost:3000/users';
//   let data = {
//     "name": name,
//     "email": email
//   }
//   let configObj = {
//     method: 'POST',
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json"
//     },
//     body: JSON.stringify(data)
//   };
// 
//   return fetch(url, configObj);
// }

function submitData( name, email ) {
  return fetch( 'http://localhost:3000/users', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify( {
        name,
        email
      } )
    } )
    .then( function ( response ) {
      return response.json()
    } )
    .then( function ( object ) {
      document.body.innerHTML = object[ "id" ]
    } )
    .catch( function ( error ) {
      document.body.innerHTML = error.message
    } )
}