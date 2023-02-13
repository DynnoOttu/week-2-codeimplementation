const palindrom = (cek) => {
    if(cek === cek.toLowerCase().split('').reverse('').join('')){
        console.log('palindrom')
    } else {
        console.log('bukan palindrom');
    }
}

palindrom('malam')


const reverse = (buatReverse)  => {
    console.log(buatReverse)
}
reverse(`Saya belajar javascript`.split(" ").reverse().join(' '))