//a function that checks if a word is a palindrome
//a palindrome is a word that is the same backwards and forwards
//example: racecar is a palindrome

//let word = 'madam';
//let word = 'civic';
//let word = 'taco cat';
//let word = 'hannah';
let word = 'level';
//let word = 'rotator';
//let word = 'stats';
//let word = 'tenet';
//let word = 'was it a car or a cat I saw';
function isPalindrome(word){
    let reverseWord = '';
    for (let i = word.length - 1; i >= 0; i--){
        reverseWord = reverseWord + word[i];
    }
    if (word === reverseWord){
        return true
    }else{
        return false
    }
}
console.log(isPalindrome(word));

//a function that greets people depending on their nationality
//if they are American, say "Hello"
//if they are French, say "Bonjour"
//if they are Spanish, say "Hola"
//if they are Italian, say "Ciao"
//if they are German, say "Hallo"
//if they are Russian, say "Privet"
//if they are Japanese, say "Konnichiwa"
//if they are Chinese, say "Ni hao"
//if they are Hindi, say "Namaste"
//if they are Arabic, say "Salam"
//if they are Swahili, say "Jambo"

function greetByNationality(nationality){
    switch(nationality){
        case 'American':
            return 'Hello';
        case 'French':
            return 'Bonjour';
        case 'Spanish':
            return 'Hola';
        case 'Italian':
            return 'Ciao';
        case 'German':
            return 'Hallo';
        case 'Russian':
            return 'Privet';
        case 'Japanese':
            return 'Konnichiwa';
        case 'Chinese':
            return 'Ni hao';
        case 'Hindi':
            return 'Namaste';
        case 'Arabic':
            return 'Salam';
        case 'Swahili':
            return 'Jambo';
        default:
            return 'Hello';
    }
}
console.log("Greetings by Nationality");
console. log();
console.log(greetByNationality('American'));
console.log(greetByNationality('French'));
console.log(greetByNationality('Spanish'));
console.log(greetByNationality('Italian'));
console.log(greetByNationality('German'));
console.log(greetByNationality('Russian'));
console.log(greetByNationality('Japanese'));
console.log(greetByNationality('Chinese'));
console.log(greetByNationality('Hindi'));
console.log(greetByNationality('Arabic'));
console.log(greetByNationality('Swahili'));

//3 mathemtical functions using the 3 ways of writing functions(declaration, expression, arrow)

