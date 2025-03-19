let url = document.referrer;
let certo = document.getElementById('certo');
let errado = document.getElementById('errado');

if (url != "https://thalestm.tech/" ){
    certo.classList.add('hidden');
    errado.classList.remove('hidden');
}else{
    certo.classList.remove('hidden');
    errado.classList.add('hidden');
}