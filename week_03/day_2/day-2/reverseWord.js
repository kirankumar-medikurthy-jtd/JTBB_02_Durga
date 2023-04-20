//Write a program to check and reverse all words present in a string?
//Example : input : “Welcome to the JTBB bootcamp”;
  //               Output : “emoclew ot eht bbtj pmactoob”;
//



let str = "madam speak malayalam fluently";
let start  = 0;
let prePoint = 0;
while(start < str.length)
{
    while(start < str.length && str[start] != ' ')
    {
      
   	 start ++;
   	 }
    
   	 let temp = str.substring(prePoint,start);
   	 // if(Palindrome(temp)){
   		//  console.log(temp+" ");
   		//  }
      console.log(reverseWord(temp));
      
   		 start = start + 1;
   		 prePoint = start;
    
}
function reverseWord(str){
  let bag=""
  for(let i=str.length-1;i>=0;i--){
    bag=bag+str[i]
  }
  console.log(bag)
}
