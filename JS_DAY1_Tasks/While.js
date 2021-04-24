//

// 3. the Flip Coin problem till either Heads or Tails wins 11 times.
function flipCOin(){
    while ( head != 11 && tail != 11){
        let random = Math.floor(Math.random() * 10 ) % 2;
            if (random === 0 )
                head++;
            else
                tail++;
    }
    }
    let head = 0;
    let tail = 0;
    flipCOin();
    
    if (head === 11 ) 
        console.log("Head Won"); 
    else
        console.log("Tail Won");

// 1. the powers of 2 that are less than or equal to 2^n till 256 is reached..
let number = window.prompt("enter the number ");

function powerOfTwo(number)
{
    for (let index=0; index<=16; index++)
    {
        let power = (Math.pow(number, index));
        if(power <= 256 )
        {
            console.log(power)
        }
    }
}
   powerOfTwo(number);

// 4. gambler starts with Rs 100 and places Re 1 bet until he/she goes broke i.e. no more money to gamble or reaches the
// goal of Rs 200. Keeps track of number of times won and number of bets made.
function gamblersBet()
{
    while (cash != 0)
    {
        let random = Math.floor(Math.random() * 10) % 2;
            if (random % 2 === 0) {
                cash += 10;
                goal = cash;
            }else{
                cash -= 10; 
                goal = cash; 
    	     }
            if (goal === 0){
                console.log("You win the bet");
                break;
	     }
            else if (goal === 200) {
                console.log("You Lost the bet");
                break;
	    }
    }
}
let cash=100; 
gamblersBet();