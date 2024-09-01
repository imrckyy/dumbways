
function getData() {
    event.preventDefault();

    let name = document.getElementById(`nameInput`).value;
    let email = document.getElementById(`emailInput`).value;
    let number = document.getElementById(`phoneNumber`).value;
    let option = document.getElementById(`subject`).value;
    let pesan = document.getElementById(`massage`).value;

    if (!name.length) {
        return alert(`enter ur name!!`)
    } else if (!email.length) {
        return alert(`enter ur email!!`)
    }
    else if (!number.length) {
        return alert(`enter ur number!!`)
    }
    else if (!option.length) {
        return alert(`choose ur option!!`)
    } else if (!pesan.length) {
        pesan = "-";  // Setel nilai default jika kosong
    }

    alert(`name : ${name}\nemail : ${email}\nnumber : ${number}\noption : ${option}\nmassage : ${pesan}`)
    
    
    alert(`ur data is sent. thank uu`)
    
    console.log(name);
    console.log(email);
    console.log(number);
    console.log(option);
    console.log(pesan);

    document.getElementById(`nameInput`).value = ``;
    document.getElementById(`emailInput`).value = ``;
    document.getElementById(`phoneNumber`).value = ``;
    document.getElementById(`subject`).value = ``;
    document.getElementById(`massage`).value = ``;

    let a = document.createElement(`a`);
    a.href = `mailto:${email}?subject=${option}&body=name: ${name}%0D%0Anumber: ${number}%0D%0Amassage: ${pesan}`;
    a.click();
    
    let data = {
        nama: name,
        gmail: email,
        nomor: number,
        subject: option,
        massage: pesan,
    };
    console.log(data);
}



