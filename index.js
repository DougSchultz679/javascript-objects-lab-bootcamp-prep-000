const recipes = {};

function updateObjectWithKeyAndValue(anObject,starfish,value){
  var result=Object.assign({},anObject,{starfish:value});
  console.log(result);
  return result;}

var testObj={samp:0,samp2:1};
console.log(testObj);
console.log(updateObjectWithKeyAndValue(testObj,samp3,2));