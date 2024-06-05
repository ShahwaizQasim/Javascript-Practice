
/* Scopes Of Function */

/* let & const global-variables hon tw block-scopes me mil jaty hain */

// let a = 10;
// const b = 20;
// var c = 30; // var global-variables hon or hum block-scopes me call krwayen

if (true) {
//   console.log(a);
//   console.log(b);
//   console.log(c);   
}

/* agr hum local-variables me let & const banaega tw hum inko block-scopes ky ander hi use kr sakte hain agr hum block-scopes ky bhr call krwaengy
 tw error ayega */
// easy words = let & const scopes ky ander banaega tw ye scopes kay bhr nhi milengy

// var c = 80; // var hamy scopes kay under bi milega or bhr bi
// if (true) {
//     let a = 20;   / let => bahar wali chez andar mile gyi andar wali bahar nhi mile gyi
//     const b = 40;
//     var c = 60; // chahy var scopes ky ander ho ya bhr ye var mil jata hai 
// }
// console.log(a);
// console.log(b);
// console.log(c); // var scopes wali value print hogi


let x = 5;
{
    x = 6;
}
x += 1;
//console.log(x); // 7


// chai our code series practice

function one(){

    const username = "Shahwaiz";
    
    function two(){
        const website = "Youtube";
        //console.log(username);
    }

    // console.log(website); // error website is not defined

    two()

}

one();



if (true) {
    const username = "Qasim";
    if (username === "Qasim") {
        const website = "Youtube";
       // console.log(`${username} ${website}`);
    }
    // console.log(website); // error
}


// ++++++++++++++++++++++++++++++++++interesting++++++++++++++++++++++++++++++++

// console.log(addone(5));
function addone(num){  // is function ko hum is function se pehly bi print karwa sakty hain  beacuse humne is function ko sirf decalre kiya hai
   return num + 1;
}


// Hoisting

console.log(addTwo(5)); // Error
/* is function ko hum is function se pehly access nhi kar sakte because humne is funcyion ko sirf decalar nhi kiya 
is function ko humne ak variable me store krdia */
const addTwo = function(nums){  
    return nums + 2;
}