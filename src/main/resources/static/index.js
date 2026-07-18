// alert("Hello Guys")
console.log("Hello Guys")

// {
//     "name" :"John"
 
// }
var users =[
    {
        "name" :"John Doe",
        "gender" : "Male",
        "img" :"john.png"
    },
    {
        "name" :"Jane Doe",
        "gender" : "Female",
        "img" :"jane.png"

    }
]

var id =0;
function toggleuser(){
    id= (id+1)%2
    var userimage=document.getElementById("user-image");
    userimage.src=users[id].img;

    var username=document.getElementById("user-name");
    username.innerHTML=users[id].name;

    var usergender=document.getElementById("user-gender");
    usergender.innerHTML=users[id].gender;
}
function randomUser(){
    fetch('https://randomuser.me/api/')
         .then(function(response){
            return response.json();
         })
         .then(function(data){
            var userData=data.results[0];

            var userImage=document.getElementById("user-image");
            userImage.src=userData.picture.large;

            var userName=document.getElementById("user-name");
            userName.innerHTML=userData.name.first+""+userData.name.last;

            var userGender=document.getElementById("user-gender");
            userGender.innerHTML=userData.gender;

         })
         .catch(function(err){
            console.log(err);
         })
}