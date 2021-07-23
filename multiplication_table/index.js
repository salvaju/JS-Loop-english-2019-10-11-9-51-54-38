var arr = [];

for(var i = 1; i < 10; i++){

    for (var j = 1; j <= i; j++) {
        arr.push(i + "*" + j + '=' + (i*j));
    }
    console.log(arr);
    arr.length = 0;
}