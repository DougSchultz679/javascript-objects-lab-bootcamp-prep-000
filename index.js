const recipes = {};

function updateObjectWithKeyAndValue(obj,key,value){
  let result=Object.assign(obj,key,value);console.log(result);return result;}

let testObj={samp:0,samp2:1};
console.log(testObj);
console.log(updateObjectWithKeyAndValue(testObj,'samp3',2));