

function calc (a,b) {
    res1 = a+b;

    res2 = a-b;

    res3 = a*b;

    res4 = a/b;

    return [res1,res2,res3,res4];
}
res = calc(20,50);

for (data in res){
    document.write(`<h1>${res[data]}</h1>`);
}