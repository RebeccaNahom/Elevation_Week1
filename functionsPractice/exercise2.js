const calAge = function(currentYear, currentMonth, personBirthYear, PersonBirthMonth){
  let innerAge = currentYear-personBirthYear //2
  if(currentMonth-PersonBirthMonth >= 0){
    return innerAge}
  else{
      innerAge--    
      return innerAge
    }
  } 


const age = calAge(2017, 1, 2015, 3)
console.log(age);

