// on click function to store numbers into values

var inputVal = '';
var log_input = [];
var total = 0;
var screen = $('#screen')[0];

// clear input event
$('#clear').click(function(event){
  inputVal = '';
  screen.innerHTML = inputVal;
})

// Operator event
$('.operator').click(function(event){
  let operator = event.target.innerHTML

  // Operator should never be entered before numbers
  if (inputVal === '') {
    return screen.innerHTML = 'Numbers first'
  }

  // Translate division character to JS
  if (operator === 'x') {
    let char = '*';
    input(char);
    return
  }
  if (operator === '÷') {
    let char = '/';
    input(char);
    return
  }

  // EQUALS sends the entire string to be calculated
  if (operator === '='){
    return doMath()
  }

// Calls input when none of the conditionals are reached
  input(operator)
})
// Zero event
$('#zero').click(function(event){
  let zero = event.target.innerHTML
  console.log('reached ZER0')

  if (inputVal !== ''){
      screen.innerHTML = zero
      input(zero)
      return
  } else {
  screen.innerHTML = 'Zero cannot be first number'
  }
})

// Number event
$('.number').click(function(event){
  let number = event.target.innerHTML
  console.log('reached number')
  screen.innerHTML = number
  input(number)
})

// Combines the input numbers & math
function input(value){
  var locator = (inputVal.length -1)
  var previousInput = inputVal[locator]
  console.log('Input length is', inputVal.length)

  // Checks to see if the operator is being clicked multiple times
  var regexp = /\+|\÷|\/|\x|\*|\-/ig
  console.log(regexp)

  // if an operator is selected:
  if (value.match(regexp) !== null){
      console.log('this is a operator') ;

      // replace previous operator with current operator
      if (previousInput.match(regexp) !== null) {
        console.log('a previous operator has been used. Operator is:',value)
        previousInput = value
        console.log('new operator is:', value)
      }

    // basic concat of numbers
    else{
      inputVal = inputVal.concat(value)
      console.log(inputVal)
      screen.innerHTML = inputVal

    }

  } else{
    inputVal = inputVal.concat(value)
    console.log(inputVal)
    screen.innerHTML = inputVal
  }
}

// ****** eval() math_array ********
// function doMath(){
//   total = eval(inputVal);
//   screen.innerHTML = total
//   inputVal = total.toString()
// }

// NO EVAL the hard way
function doMath(){
  var num_before = 0
  var middle_operator
  var num_after = 0
  var active_num = 0
  var regexp = /\+|\÷|\/|\x|\*|\-/ig
  // loops from begining to end.
  for (let i = 0; i < inputVal.length; i++){

    // Case: Is there an operator?
    if (inputVal[i].match(regexp) !== null)) {
      // Case: value num_before has been modified
      if (num_before > 0){

      }
      num_before += parseInt(num_after)
      if
    }
    if (inputVal[i] === '+'){

      active_num = 0

    } else if (inputVal[i] === '-'){
      active_num = 0

    } else if (inputVal[i] === '*'){
      active_num = 0

    } else if (inputVal[i] === '/'){
      total += active_num
      active_num = 0

    }
    else {
      active_num = active_num.concat(inputVal[i])
      console.log(active_num)
    }
  }
}















  //final part of the process
  total = //??
  screen.innerHTML = total
  inputVal = total.toString()
}
