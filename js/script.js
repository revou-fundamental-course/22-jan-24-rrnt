let nameInput = document.getElementById('name')

document.getElementById('kirim').addEventListener("click", function() {
    const name = nameInput.value

    if (name == "") {
        document.getElementById("error-name").innerHTML = "Nama Tidak Boleh Kosong!"
    } else {

  

    document.getElementById('name').innerHTML = nama

}
})