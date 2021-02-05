//kode sama dengan yg ada di suwitjawa1, kita ubah comp menjadi return, agar kode lebih simpel.
function getpilihanKomputer(){
    const comp = Math.random();
    if(comp <0.34) return 'gajah';
    if( comp >=0.34 && comp <0.67) return 'orang';
    return 'semut';
}

//membuat parameter untuk menampung nilai hasil
function getHasil(comp, player) {
    if ( player == comp) return 'SERI';
    if ( player == 'gajah')return (comp == 'orang') ? 'MENANG' : 'KALAH';
    if ( player == 'orang') return (comp == 'semut') ? 'MENANG' : 'KALAH';
    if ( player == 'semut') return (comp == 'gajah') ? 'MENANG' : 'KALAH';
}


function putar(){
    const imgkomputer = document.querySelector('.img-komputer');
    const gambar = ['gajah','semut','orang'];
    let i = 0;
    //untuk mendapatkan waktu realtime yg di hitung saat itu juga,lalu berhenti setelah 1 detik.
    const waktuMulai = new Date().getTime();
    //function set interval digunkan untuk melakukan sesuatu secara berulang" selama interval tertentu 
    setInterval(function(){
        //menghitung waktu mulai lalu ketika 1000 ml second/1 detik maka waktu di hapus dan kembalikan nilai
        if(new Date().getTime() - waktuMulai >1000){
        //function clearinterval berfungsi untuk menghapus waktu yg sudah di jalankan.
            clearInterval;
            return;
        }
        //atribut akan terus bertambah sebanyak index gambar dan mengulang terus selama 0,1 detik/100ml second
        imgkomputer.setAttribute('src', 'img/' + gambar[i++] + '.jpg');
        if( i == gambar.length ) i = 0;
    } ,100)
}


//penulisan lebih sederhana menggunakan looping
//menangkap nilai img yg ada di tag li, lalu menampungnya di const pilihan
const pilahan = document.querySelectorAll('li img');
//melakukan perulangan menggunakan function forEach yg nilainya di simpan ke dalam parameter pil
pilahan.forEach(function(pil){
    //pil di panggil dan di berikan event
    pil.addEventListener('click', function(){
        //jalankan function dari event click
        const pilihanKomputer = getpilihanKomputer();
        const pilihanPlayer = pil.className;
        const hasil = getHasil(pilihanKomputer, pilihanPlayer);

        putar();
        setTimeout(function(){
            const imgkomputer = document.querySelector('.img-komputer');
             imgkomputer.setAttribute('src', 'img/' + pilihanKomputer + '.jpg');
    
             const info = document.querySelector('.info');
              info.innerHTML = hasil;
        }, 1000)
      
        
    });
});

/*
//membuat event pada gambar saat di clik
//menangkap parameter gajah ke dlm pGajah
const pGajah = document.querySelector('.gajah');
pGajah.addEventListener('click', function(){
//membuat parameter untuk menampung nilai getpilihankomputer ke pilihkomputer
    const pilihanKomputer = getpilihanKomputer();
    //membuat parameter pilihanplayer untuk menampung nilai pGajah pd gambar gajah menggunakan className
    const pilihanPlayer = pGajah.className;
    //menampung nilai dri hasil membandingkan pilihan komputer dengan pilihan player
    const hasil = getHasil(pilihanKomputer, pilihanPlayer);
   
    //membuat setAtribut untuk gambar komputer agar berubah sesuai pilihan random dr komputer
    //mengambil parameter img-komputer untuk di tampung di imgkomputer
    const imgkomputer = document.querySelector('.img-komputer');
    //menambahkan setAtribut sesuai pilihan random dr komputer
    imgkomputer.setAttribute('src', 'img/' + pilihanKomputer + '.jpg');
    //mengambil nilai dari info yang nilai atributnya sudah di simpan
    const info = document.querySelector('.info');
    //merubah nilai atribut yang sudah di simpan mengunakan innerHTML
    info.innerHTML = hasil;
});

const pOrang = document.querySelector('.orang');
pOrang.addEventListener('click', function(){
    const pilihanKomputer = getpilihanKomputer();
    const pilihanPlayer = pOrang.className;
    const hasil = getHasil(pilihanKomputer, pilihanPlayer);
  
    const imgkomputer = document.querySelector('.img-komputer');
    imgkomputer.setAttribute('src', 'img/' + pilihanKomputer + '.jpg');

    const info = document.querySelector('.info');
    info.innerHTML = hasil;
});

const pSemut = document.querySelector('.semut');
pSemut.addEventListener('click', function(){
    const pilihanKomputer = getpilihanKomputer();
    const pilihanPlayer = pSemut.className;
    const hasil = getHasil(pilihanKomputer, pilihanPlayer);
  
    const imgkomputer = document.querySelector('.img-komputer');
    imgkomputer.setAttribute('src', 'img/' + pilihanKomputer + '.jpg');

    const info = document.querySelector('.info');
    info.innerHTML = hasil;
});
*/





