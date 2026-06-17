//input data
function showPage(pageId){

    document
        .querySelectorAll("section")
        .forEach(section => {
            section.classList.add("hidden");
        });

    document
        .getElementById(pageId)
        .classList.remove("hidden");
}

document
.getElementById("studentForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    const nama = document.getElementById("nama").value;
    const kelas = document.getElementById("kelas").value;

    console.log({
        nama,
        kelas
    });

    alert("Data siswa berhasil disimpan");
});

document
.getElementById("pertemuanKelas")
.addEventListener("change", function(){

    const pertemuan = this.value;

    document.getElementById("hasilKelas").innerHTML =
    `
        <h3>Pertemuan ${pertemuan}</h3>
        <p>Data ringkasan kelas akan tampil di sini.</p>
    `;
});
//monitoring
document
.getElementById("pertemuanIndividu")
.addEventListener("change", function(){

    const nama =
    document.getElementById("namaMonitoring").value;

    const pertemuan =
    this.value;

    document.getElementById("hasilIndividu").innerHTML =
    `
        <h3>${nama}</h3>
        <p>Pertemuan ${pertemuan}</p>
        <p>Data siswa akan tampil di sini.</p>
    `;
});