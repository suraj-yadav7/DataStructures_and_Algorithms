import PromptSync from "prompt-sync";

const prompt = PromptSync()
//1. simple star pattern
function simplePattern(n){
    let str='*'
    for(let i=0; i<n ; i++){
            console.log(str.repeat(4))
    }
}
// simplePattern(2);

// 2.linear increase pattern
function linearPattern(){
    let n = parseInt(prompt("enter num: "))
    let str="* "
    for(let i=1; i<=n; i++){
        console.log(str.repeat(i))
    }
}
// linearPattern()

// 3.number pattern
function numPattern(){
    let n = parseInt(prompt("enter num: "))
    let str=''
    for(let i=1; i<=n; i++){
        for(let j=1; j<=i;j++){
            str+=j+' '
        }
        str+="\n"
    }

    console.log(str);
};
// numPattern(4)

// 4.same number eachline pattern
function sameNumPattern(){
    let n = parseInt(prompt("enter num: "))
    let str=''
    for(let i=1; i<=n ; i++){
        for(let j=1; j<=i; j++){
            str +=i
        }
        str+="\n"
    }
    console.log(str)
}
// sameNumPattern()

// 5.Continues number pattern
function contNumPattern(){
    let n = parseInt(prompt("enter num: "))
    let str=''
    let count =1
    for(let i=1; i<=n; i++){
        for(let j=1; j<=i; j++){
            str +=(count)+' '
            count++
        }
        str+='\n'
    }
    console.log(str);
};
// contNumPattern()

// 6. Reverse number pattern
function revNumPattern(){
    let n = parseInt(prompt("enter num: "))
    let str=''
    for(let i=1; i<=n; i++){
        for(let j=1; j<=n-i+1; j++){
            str +=(j)+' '
        }
        str+='\n'
    }
    console.log(str)
}
// revNumPattern(6)

// Pyramid = number pattern
function pyNumPattern(){
    let n = parseInt(prompt("enter num: "))
    let str=''
    for(let i=1; i<=n; i++){
        for(let j=1; j<=n-i; j++){
            str+=' '
        }
        for(let k=1; k<=2*i-1; k++){
            str+=k
        }
        str +="\n"
    }
    console.log(str)
}
// pyNumPattern()

// Pyramid - continues number pattern

function contPyNumPattern(){
     let n = parseInt(prompt("enter num: "))
    let str=''
    let count =1
    for(let i=1; i<=n; i++){
        for(let j=1; j<=n-i;j++){
            str+=" "
        }
        for(let k=1; k<=2*i-1; k++){
            str+=count+" "
            count++
        }
        str+="\n"
    }
    console.log( str)
}
contPyNumPattern();