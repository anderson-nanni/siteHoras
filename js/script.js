function gerar () {
    const dropdown = document.getElementById('dropdown');
    const pNumero = document.getElementById('numero');
    let item = document.getElementById('option');
    

    if (pNumero.value.length == 0) {
        alert('Digite um numero no campo!');
    } else{
        let n = Number(pNumero.value);
        dropdown.innerText = '';
        for (i = 1;i <= 10; i++) {

            let item = document.createElement('option');
            item.text += `${n} X ${i} = ${n*i}`;
            dropdown.appendChild(item);

        }   
    }

    
}