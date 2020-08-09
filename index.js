// Add your code here
function submitData(name, email) {
  let url = 'http://localhost:3000/users';
  let data = {
    name,
    email
  }
  let configObj = {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(data)
  };

  return fetch(url, configObj)
  .then(function(response){
    return response.json();
  })
  .then(function(json){
    document.body.innerHTML = json['id'];
  }).catch(function(error){
    document.body.innerHTML = error.message;
  });
}