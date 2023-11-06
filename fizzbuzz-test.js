for (let i = 1; i <= 100; i++) {

    let numb = "";

    if (i % 3 === 0) numb += "Fizz";
    if (i % 5 === 0) numb += "Buzz";

    console.log(numb || i);
}