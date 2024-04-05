let t;
//functions to choose degree of temperature
        function print1(){
            let val = " :Input in fahrenheit";
            document.getElementById("enter").innerHTML = val;
            t = "fahrenheit";
        }
        function print2(){
            let val = " :Input in celsius";
            document.getElementById("enter").innerHTML = val;
            t = "celsius";
        }
        function print3(){
            let val = " :Input in kelvin";
            document.getElementById("enter").innerHTML = val;
            t = "kelvin";  
        }
//function used for temperature conversion
        function temp(){
            let deg = document.getElementById('tem').value;
            if(t=="fahrenheit")
            {
                let c = ((parseFloat(deg)-32)*5)/9;
                document.getElementById('conversion1').innerHTML = "The temperature in celsius is "+  parseFloat(c.toFixed(2));
                let k = (parseFloat(deg)-32)*5/9 + 273.15;
                document.getElementById('conversion2').innerHTML = "The temperature in kelvin is "+parseFloat(k.toFixed(2));
            }
          else if(t=="celsius")  
            {
                let f = (parseFloat(deg)*9)/5+32;
                document.getElementById('conversion1').innerHTML = "The temperature in fahrenheit is "+ parseFloat(f.toFixed(2));
                let k = (parseFloat(deg)+273.15);
                document.getElementById('conversion2').innerHTML = "The temperature in kelvin is "+ 
                parseFloat(k.toFixed(2));
            }      
           else if(t=="kelvin")
            {
                let f = (parseFloat(deg)-273.15)*9/5+32;
                document.getElementById('conversion1').innerHTML= "The temperature in fahrenheit is "+ parseFloat(f.toFixed(2));
                let c = (parseFloat(deg)-273.15);
                document.getElementById('conversion2').innerHTML = "The temperature in celsius is " + parseFloat(c.toFixed(2));
            }
        }