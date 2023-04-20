//Write a program to check whether a string A is anagram of String B?
//Example : Input  : String A : angel, String B : glean


    let a="glean";
        let b="anelg";
        let c="";
        for(let i=0;i<a.length;i++){
            for(let j=0;j<b.length;j++){
                if(a[i]==b[j]){
                    c+=b[j];
                }
            }
        }
        // System.out.println(c);
        if(a==c){
            console.log("Anagram");
        }else{
            console.log("Not a anagram");
        }
