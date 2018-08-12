const top10 = document.getElementById("btnTopTen");
const level = document.getElementById("btnAllPlayers");
const phoneNumber = document.getElementById("phoneNumber");
const btnSearch = document.getElementById("search player");

var array = [
    {firstName:"Steven", level:100, phoneNumber:3053104780},
    {firstName:"Angie", level:92, phoneNumber:3053104781},
    {firstName:"Juan", level:53, phoneNumber:3053104782},
    {firstName:"Claudia", level:74, phoneNumber:3053104783},
    {firstName:"Esteban", level:18, phoneNumber:3053104784},
    {firstName:"Eli", level:45, phoneNumber:3053104785},
    {firstName:"Fanny", level:100, phoneNumber:3053104786},
    {firstName:"Nico", level:5, phoneNumber:3053104787},
    {firstName:"Eric", level:63, phoneNumber:3053104788},
    {firstName:"Carlos", level:1, phoneNumber:3053104789},
    {firstName:"Oliva", level:98, phoneNumber:3053104790}
];


// btnSearch.addEventListener("click", function() {
//     document.getElementById("btnAllPlayers").addEventListener("click");
//     var level = phoneNumber.value
//     $.ajax({
//         dataType : 'json',
//         success : function(data) {
//             console.log(data)
//         }
//     })

//  })
