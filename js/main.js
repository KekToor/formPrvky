const tlacitko = document.getElementById('vypocetMeny')
tlacitko.addEventListener('click',function(){
    let options = parseFloat(document.getElementById('moznosti').value);
    let cur = parseFloat(document.getElementById('meny').value);
    let cur2 = parseFloat(document.getElementById('meny2').value);
    console.log(options);
    console.log(cur);
    console.log(cur2);
    function vypocetPrevodu(value, o1, o2){
        console.log(o1);
        console.log(o2);
        switch(o1){
            case 1:
                switch(o2){
                    case 1:
                        return(value);
                    case 2:
                        return((value / 22.34).toFixed(2)); 
                    case 3:
                        return((value / 26.52).toFixed(2));  
                    case 4:
                        return((value / 5.90).toFixed(2));   
                    case 5:
                        return((value / 29.61).toFixed(2));  
                    case 6:
                        return((value * 3.42).toFixed(2));  
                }
            case 2:
                switch(o2){
                    case 1:
                        return(value * 22.34);
                    case 2:
                        return(value); 
                    case 3:
                        return((value * 0.84).toFixed(2));  
                    case 4:
                        return((value * 3.78).toFixed(2));   
                    case 5:
                        return((value * 0.75).toFixed(2));  
                    case 6:
                        return((value * 76.27).toFixed(2));  
                }    
            case 3:
                switch(o2){
                    case 1:
                        return(value * 26.52);
                    case 2:
                        return((value / 0.84).toFixed(2)); 
                    case 3:
                        return (value);  
                    case 4:
                        return((value * 4.49).toFixed(2));   
                    case 5:
                        return((value * 0.9).toFixed(2));  
                    case 6:
                        return((value * 76.27).toFixed(2));  
                    }    
            default:
                return 0;
        }
    }
    let res = vypocetPrevodu(options,cur,cur2);
    console.log(res);
    let vypis = document.getElementById('vypis');
    vypis.innerHTML = `${res}`;
});