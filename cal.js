

// display

function display(num){
    output.value +=num; //id.value=to get value
}

// clear= CL

function clearAll(){
    output.value=''
}

function evaluateExp(){

    // method 1
    // exp=output.value //exp=7+7
    // result=eval(exp) //result=14
    // output.valu=result //display=14'

    // method 2
    output.value=eval(output.value)
}

// remove last item

function removeLast(){
    currentExp=output.value
    output.value=currentExp.slice(0,-1)

}