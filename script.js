function fizzbuzz() {
    for (let n = 1; n <= 100; n++) {
        if (n % 3 === 0 && n % 5 === 0) {
            console.log('fizzbuzz');
        }
        else if (n % 3 === 0) {
            console.log('fizz');
        }
        else if (n % 5 === 0) {
            console.log('buzz');
        }
        else {
            console.log(n)
        }
    }
}

function countChar(string, char) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] == char) {
            count++;
        }
    }
    return count;
}


const countB = string => countChar(string, 'B');