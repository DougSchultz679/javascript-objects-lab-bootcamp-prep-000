const recipes = {};

function updateObjectWithKeyAndValue(object,key,value){
  let result=Object.assign(object,key,value);return result;}

let testObj={samp:0,samp2:1};
console.log(updateObjectWithKeyAndValue(testObj,samp3,2));