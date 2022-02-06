

function generate_n_ruts(n) {
    let result = []
    for (let x = 0; x < n; x++) {
        result.push(generate_rut())
    }
    document.getElementById("show_ruts").value = result.join("    ");
    return 0;
}


function generate_rut() {
    let rut = []
    for (let step = 0; step < 8; step++) {
        number = Math.floor(Math.random() * 10);
        rut.push(number)
    }
    let rut_copy = [...rut];
    rut.push(generate_dv(rut_copy))
    rut.splice(8, 0, "-");
    return rut.join("");
}

function generate_dv(rut) {
    // variables
    let serie = [2, 3, 4, 5, 6, 7, 2, 3]
    let rut_inverted = rut.reverse()

    let suma = 0
    for (let x = 0; x < 8; x++) {
        suma += rut_inverted[x] * serie[x]
    }
    let helper = Math.floor(suma / 11) * 11
    result = 11 - (Math.abs(suma - helper))
    if (result == 11) {
        return 0;
    }
    else if (result == 10) {
        return "k";
    }
    else {
        return result
    }
}