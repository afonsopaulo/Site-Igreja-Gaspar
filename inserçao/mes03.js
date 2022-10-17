function escala(a,b,c,d,e,f,g,h,l){
    document.write( `
        <div class="escala">
            <div class="escala-item1 r">
                <p>${a}</p>
            </div>

            <div class="escala-item2 r">
                <p>${b}</p>
            </div>
            <div class="escala-item3 r">
                <p>${c}</p>
            </div>

            <div class="escala-item4 r">
                <p>${d}</p>
            </div>
            <div class="escala-item5 r">
                <p>${e}</p>
            </div>

            <div class="escala-item6 r">
                <p>${f}</p>
            </div>

            <div class="escala-item7 r">
                <p>${g}</p>
            </div>

            <div class="escala-item8 r">
                <p>${h}</p>
            </div>
            <div class="escala-item9 r">
                <p>${l}</p>
            </div>


        </div>`)
}

function escala5(a,b,c,d,e,f,g,h,l,p,o){
    document.write( `
        <div class="escala">
            <div class="escala-item1 r">
                <p>${a}</p>
            </div>

            <div class="escala-item2 r">
                <p>${b}</p>
            </div>
            <div class="escala-item3 r">
                <p>${c}</p>
            </div>

            <div class="escala-item4 r">
                <p>${d}</p>
            </div>
            <div class="escala-item5 r">
                <p>${e}</p>
            </div>

            <div class="escala-item6 r">
                <p>${f}</p>
            </div>

            <div class="escala-item7 r">
                <p>${g}</p>
            </div>

            <div class="escala-item8 r">
                <p>${h}</p>
            </div>
            <div class="escala-item9 r">
                <p>${l}</p>
            </div>

            <div class="escala-item8 r">
                <p>${p}</p>
            </div>
            <div class="escala-item9 r">
                <p>${o}</p>
            </div>


        </div>`)
}

function escala_dia(a,b,c,d,e,f,g){
    document.write( `
        <div class="escala">
            <div class="escala-item1 r">
                <p>${a}</p>
            </div>

            <div class="escala-item2 r">
                <p>${b}</p>
            </div>
            <div class="escala-item3 r">
                <p>${c}</p>
            </div>

            <div class="escala-item4 r">
                <p>${d}</p>
            </div>
            <div class="escala-item5 r">
                <p>${e}</p>
            </div>

            <div class="escala-item6 r">
                <p>${f}</p>
            </div>

            <div class="escala-item7 r">
                <p>${g}</p>
            </div>

        </div>`)
}

escala5("Pregadores (Sabado)",  "03","M.Pessoal",
                                "10","Karine",
                                "17","Mordomia",
                                "24","Luana",
                                "31","Raimundo")


escala("Pregadores (Quarta)",   "07","Maria do Amparo", 
                                "14","Gabi",
                                "21","M.Criança",
                                "28", "M.Mulher")

escala("Pregadores (Domingo)",  "04","Antonio Filho", 
                                "11","Enos",
                                "18","Paulo",
                                "25", "Luzidete")

escala_dia("Diaconato",         "Dom","Santa", 
                                "Qua","Eduardo",
                                "Sab","Enos")

escala("Parte Especial (Sabado)",   "03","Leia", 
                                    "10","Santa",
                                    "17","Isabelly",
                                    "24", "Karine")

escala("Parte Especial (Quarta)",   "07","Yara", 
                                    "11","Luana",
                                    "21","Manu",
                                    "28", "Santa")

escala("Parte Especial (Domingo)",  "04","Bia", 
                                    "11","Karine",
                                    "18","Bia",
                                    "26", "Luana")

escala_dia("Trabalho de Cantico",   "Dom","Karine e Bia", 
                                    "Qua","Karol",
                                    "Sab","Luana e Francisca")

escala_dia("Recepção",              "Dom","Santa", 
                                    "Qua","Luzidete",
                                    "Sab","Alcangela")

escala_dia("Sonosplatia",           "Dom","Paulo", 
                                    "Qua","Karine",
                                    "Sab","Luana")


escala5("Adoração Infantil",        "03","Gabi", 
                                    "10","Yara",
                                    "17","Bia",
                                    "24","Luzidete",
                                    "31","Alcangela")

escala5("Escola Sabatina",          "01","Santa e Leia", 
                                    "08","Alcangela e Leo",
                                    "15","Francisca e Raimundo",
                                    "22","Jovens",
                                    "29","M.Infantil")
