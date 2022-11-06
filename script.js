var par = document.querySelector("#par");
    let temprature = () => {
        let opt1 = document.querySelector("#unit1");
        let opt2 = document.querySelector("#unit2");
        let display = document.querySelector(".value");
        var a = document.querySelector(".takval").value;
        if (opt1.value == "Celsius" && opt2.value == "Fahrenheit") {
            console.log(a, "C to F", opt1.value)
            let F = a * (9 / 5) + 32
            display.innerHTML = F.toFixed(4) + " F"

        } 
        else if (opt1.value == "Fahrenheit" && opt2.value == "Celsius") {
            console.log(a, "F to C", opt1.value)
            let C = (a - 32) * (5 / 9)
            display.innerHTML = C.toFixed(4) + " ºC"
        }
        else if(opt1.value == "Celsius" && opt2.value == "Kelvin") {
            console.log(a, "C to K", opt1.value)
            let k= (a-0)+273
            display.innerHTML = k + " K"
        }
        else if(opt1.value == "Kelvin" && opt2.value == "Celsius") {
            console.log(a, "K to C", opt1.value)
            let j = a -273
            display.innerHTML = j + " ºC"
        }
       else if(opt1.value == "Fahrenheit" && opt2.value == "Kelvin") {
            console.log(a, "F to K", opt1.value)
            let t= (a - 32) * 5/9 + 273.15 
            display.innerHTML = t + " K"
        }
        else if(opt1.value == "Kelvin" && opt2.value == "Fahrenheit") {
            console.log(a, "K to F", opt1.value)
            let h = (a - 273.15) * 9/5 + 32
            display.innerHTML = h.toFixed(4) + " F"
        }
        else {
            display.innerHTML = a 
        }
    }