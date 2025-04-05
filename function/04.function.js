function calc(a, b) {
    res1 = a + b;
    res2 = a - b;
    res3 = a * b;
    res4 = a / b;
    return [res1, res2, res3, res4];
}
res = calc(20, 10);

for (data in res) {
    console.log(res[data]);

}

