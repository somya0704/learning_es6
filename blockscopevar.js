for (let i=0; i<a.length; i++){
    let x = a[i]
    console.log(a[i]);
}
for (let i = 0; i < b.length; i++) {
    let y = b[i]
}

let callbacks = []
for (let i = 0; i <= 2; i++) {
    callbacks[i] = function () { return i * 2 }
}
