
/* Scopes Of Function */

/* let & const global-variables hon tw block-scopes me mil jaty hain let & const */

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

var c = 80; // var hamy scopes kay under bi milega or bhr bi
if (true) {
    let a = 20;  
    const b = 40;
    var c = 60; // chahy var scopes ky ander ho ya bhr ye var mil jata hai 
}
console.log(a);
console.log(b);
console.log(c); // var scopes wali value print hogi