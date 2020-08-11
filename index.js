// Add your code here

function submitData(name, email) {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: { 
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify({
      name: name,
      email: email
    })
  })
  .then(response => response.json())
  .then(object => renderId(object))
  .catch(error => document.body.innerHTML = error.message )
}

function renderId(object) {
  document.body.innerHTML = object[ "id" ]
}


/*
fetch("http://localhost:3000/dogs", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify({
    dogName: "Byron",
    dogBreed: "Poodle"
  })
});
*/

/* Same thing:

let formData = {
  dogName: "Byron",
  dogBreed: "Poodle"
};
 
let configObj = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify(formData)
};
 
fetch("http://localhost:3000/dogs", configObj);

*/
