for(let i = 1; i <= 31; i++){
    dia.innerHTML += `<option>${i}</option>`;
}


let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
for(let i = 0; i < 12; i++){
    mes.innerHTML += `<option value="${i}">${meses[i]}</option>`;
}


let data = new Date();
let dataAno = data.getFullYear();

for(let i = dataAno; i >= (dataAno - 100); i--){
    ano.innerHTML += `<option>${i}</option>`;
}

mes.onchange = () => {
    let numeroDias;
    let mesesDias31 = [0, 2, 4, 6, 7, 9, 11];
    if(mesesDias31.includes(Number(mes.value))){
        numeroDias = 31;
    } else if (mes.value == 1){
        if(ano.value % 4 == 0){
            numeroDias = 29;           
        }else{
            numeroDias = 28;
        }
    } else {
        numeroDias = 30;
    }

    dia.innerHTML = '';
    for(let i = 1; i <= numeroDias; i++){
        dia.innerHTML += `<option>${i}</option>`;
    }
}