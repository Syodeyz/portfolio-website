function checkDriversAge(age){
    if(Number(age) === 18){
        alert("Congrats on your first year of driving.");
    } else if (Number(age) < 18){
        alert("Oh sweet heart your are not old enough to drive this.");
    } else{
        alert("Powering on and it's now under your control.");
    }
}

var checkDriversAge2 = function(age){
    if(Number(age) === 18){
        alert("Congrats on your first year of driving.");
    } else if (Number(age) < 18){
        alert("Oh sweet heart your are not old enough to drive this.");
    } else{
        alert("Powering on and it's now under your control.");
    }
}

checkDriversAge(18);
checkDriversAge2(22);

