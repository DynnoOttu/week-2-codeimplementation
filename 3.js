const deretAngka = (angka) => {
    let hasil = angka.toString().split(0).map((item) => item.split('').sort().join(''));
    console.log(hasil.join(''));
}

deretAngka(5956560159466056);