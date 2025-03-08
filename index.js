function scuberGreetingForFeet(distance){
  if(distance <= 400) {return "This one is on me!"} 
  else if (distance >= 400 && distance<= 2000) 
    { return 'That will be twenty bucks.'}
  else if (distance >= 2000 && distance <=2500) 
    { return 'I will gladly take your thirty bucks.'}
  else if (distance > 2500) {return 'No can do.'}
  
  


}
// console.log(scuberGreetingForFeet(2503));

function ternaryCheckCity(city){
  return city === 'NYC'?'Ok, sounds good.' :'No go.'
}
// console.log(ternaryCheckCity("NYC"));


function switchOnCharmFromTip(tip){
switch(tip){
  case "generous" : return "Thank you so much."
  case "not as generous": return "Thank you."
  default: 
  return "Bye."

}
}
console.log(switchOnCharmFromTip(""));
