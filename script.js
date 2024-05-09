const output = document.querySelector('.displayInput');
const buttons = document.querySelectorAll('.button');


function display(input){
    output.value+=input;

}

function result(){
    try{
      let solution = eval(output.value.replace(/^[/*]/g, ""));
      output.value= eval(solution);
    }catch(error){
        output.value = 'Error';
    }
}