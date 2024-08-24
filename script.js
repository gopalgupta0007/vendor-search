let table = document.querySelector(".table")
(
    async()=>{
        let workbook = XLSX.read(await(await fetch("./newVender.xlsx")).arrayBuffer())
        console.log(workbook);
    }
)()