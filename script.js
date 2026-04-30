
const textInput = document.getElementById("text-input"); 
const button = document.getElementById("check-btn");
const result = document.getElementById("result"); 

function regex(input){
  let array = input.split(""); 
  const regex = /[a-z0-9]/
  let arrayBaru = array.filter(function(item){
   return regex.test(item.toLowerCase());
  })
  let string = arrayBaru.join("").toLowerCase(); 
  let stringReverse = arrayBaru.reverse().join("").toLowerCase();
  if(string === stringReverse){
    return true;
  } else{
    return false;
  }
  
  
}

console.log(regex("A man, a plan, a canal. Panama."))


button.addEventListener("click", () => {
  if(textInput.value === ""){
    alert("Please input a value")
  } else if(regex(textInput.value)){
    result.textContent = `${textInput.value} is a palindrome`
  } else if(!regex(textInput.value)){
    result.textContent = `${textInput.value} is not a palindrome`
  }
  

})
