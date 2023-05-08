//Write a program to check if a given year is a leap year or not?

let num=200;
        if(num<=100)
        {
            if(num%4==0){
                console.log("Leap year");
            }
        }else if(num>100)
        {
            if((num%100!=0) && (num%400!=0) && (num%4==0))
            {
                console.log("leap year");
            }else{
                console.log("Not a Leap Year");
            }
        }
    

