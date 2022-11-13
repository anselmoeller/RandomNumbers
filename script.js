let showNumberArea= document.querySelector('.showNumber');
let mainValidator = true;

    document.querySelector('.btnRandomNumber').addEventListener('click', ()=>{

        let showNumMin = parseFloat(document.querySelector('.showNumMin').value);
        let showNumMax = parseFloat(document.querySelector('.showNumMax').value);
    
        let typeOfNumberToRandom = document.querySelector('.selectTypeNumbers').value;
        teste (showNumMax, showNumMin);

        if(mainValidator){
            switch(typeOfNumberToRandom){
                case 'normal': 
                    showNumberArea.innerText = Math.floor(Math.random() * (showNumMax - showNumMin +1)) + showNumMin;
                break;
                case 'even': 
                    evenNumberToShow(showNumMin, showNumMax);            
                break;
                case 'odd':
                    oddNumberToShow(showNumMin, showNumMax);  
                break;
            }
            colorNumberToShow();      
        }   
})

function evenNumberToShow(showNumMin, showNumMax){
    let evenNumber = Math.floor(Math.random() * (showNumMax - showNumMin +1)) + showNumMin;
    if(evenNumber % 2 == 0){
        showNumberArea.innerText = evenNumber;
    } else {
        evenNumberToShow(showNumMin, showNumMax);
    }
}

function oddNumberToShow(showNumMin, showNumMax){
    let oddNumber = Math.floor(Math.random() * (showNumMax - showNumMin +1)) + showNumMin;
    if(oddNumber % 2 !== 0){
        showNumberArea.innerText = oddNumber;
    } else {
        oddNumberToShow(showNumMin, showNumMax);
    }
}

function colorNumberToShow(){

    let valuetocolor = parseFloat(showNumberArea.innerText)

    if(valuetocolor < 0){
        showNumberArea.style.color = "red";
    } else if(valuetocolor === 0){
        showNumberArea.style.color = "black";
    } else {
        showNumberArea.style.color = "green";
    }
}

function teste (showNumMax, showNumMin){
    if(showNumMax > 9999999999999 || showNumMin < -9999999999999){
        mainValidator = false;
        alert('Numbers must be lesser than 13 digits.');        
    } else if (showNumMax < showNumMin){
        mainValidator = false;
        alert('The minimum number must be lesser than the maximum number.')
    } else if(isNaN(showNumMax) || isNaN(showNumMin)){
        mainValidator = false;
        alert('All fields must be filled.');
    } else if(showNumMax === showNumMin){
        mainValidator = false;
        showNumberArea.innerText = showNumMax;
    } else {
        mainValidator = true;
    }
}


function clearAllFields(){
    document.querySelector('.showNumMin').value = '';
    document.querySelector('.showNumMax').value = '';
    document.querySelector('.showNumber').innerHTML = 0;
    colorNumberToShow();
}