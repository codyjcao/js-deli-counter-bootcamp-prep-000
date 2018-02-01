var katzDeliline = []

katzDeliline = [{name : "andrew", time : "4:50"}]


function takeANumber(array, name){
  var customer = {}
  customer['name'] = name
  customer['time'] = Date.now()
  array.push(customer)
  return `Welcome, ${name}. You are number ${array.length} in line.`
}


function nowServing(array){
  if (array.length === 0){
    return "There is nobody waiting to be served!"
  } else{
    return `Currently serving ${array.length}.`
  }
} 


function currentLine(array){
  if (array.length === 0){
    return "The line is currently empty."
  } else {
    var result = "The line is currently: "
    
    for (var i = 0; i < array.length;i++){
      if (i === array.length-1){
        result += `${i+1}. ${array[i]}`
      } else{
        result += `${i+1}. ${array[i]}, `
      }
    }
   return result
  }
}