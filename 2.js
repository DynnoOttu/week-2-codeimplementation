const aplikasiPijarFood = (harga, voucher, jarak, pajak) => {
    if(voucher == "PIJARFOOD5"){
        if(harga > 50000){
            potongan = (harga * 50) / 100;

            if(potongan > 50000){
                potongan = 50000;
            }
        } 
    } else if (voucher == "DITRAKTIRPIJAR"){
        if(harga > 25000){
            potongan = (harga * 60) / 100;

            if (potongan > 30000){
                potongan = 30000
            }
        }
    }

    if (jarak > 2){
            pengiriman = (jarak - 2) * 3000 + 5000;
    } else {
        pengiriman = 5000;
    }

    if(pajak == true){
        hargaPajak = (harga * 5) / 100;
    } else {
        hargaPajak = 0;
    }

    console.log(`Harga : ${harga}`);
    console.log(`Potongan : ${potongan}`);
    console.log(`Biaya antar : ${pengiriman}`);
    console.log(`Pajak: ${hargaPajak}`);

    console.log(`Sub total: ${harga - potongan + pengiriman + hargaPajak}`);
}

aplikasiPijarFood(75000, "PIJARFOOD5", 5, true);