const btn = document.getElementById('calculate');

btn.addEventListener('click', function() {

    let height = document.querySelector('#height').value;
    let weight = document.querySelector('#weight').value;

    if(height == '' || weight == ''){
        alert('Please fill out the input fields!');
        return;
    }
    
    height = height / 100

    let BMI = (weight/ (height * height));

    BMI = BMI.toFixed(2);

    document.querySelector('#result').innerHTML = BMI;

    let status = '';

    if(BMI < 18.5){
        status = "Underweight😕"
    }
    if(BMI >=18.5 && BMI < 25.0){
        status = "Normalweight😄"
    }
    if(BMI >=25.0 && BMI < 30.0){
        status = "Overweight☹️"
    }
    if(BMI >=30.0 && BMI < 40.0){
        status = "Obese😣"
    }
    if(BMI >= 40.0){
        status = "Extremely Obese😫"
    }
    document.querySelector('.comment').innerHTML = `Comment: you are <span id="comment">${status}</span>`;
});