const counters = document.querySelectorAll(".counter");


counters.forEach((counters) => {
    counters.innerText = "0";
  
    incrementCount()

    function incrementCount() {
        let currentNum = +counters.innerText;

        const dataCeil = counters.getAttribute("data-ceil");
         
       const increment = dataCeil / 15;

             currentNum = Math.ceil(currentNum + increment)

       if (currentNum < dataCeil){
        counters.innerText = currentNum;
        setTimeout(incrementCount, 50 );
       }else{
        counters.innerText = dataCeil
       }
    }
})
 