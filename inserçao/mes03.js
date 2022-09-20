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

escala("Pregadores (Sabado)",   "03","ministerio da familia",
                                "10","mordomia",
                                "17","Ministerio Familia",
                                "24","Ministerio Jovens")


escala("Pregadores (Quarta)",   "07","Maria do Amparo", 
                                "14","Franscisca",
                                "21","Ministerio Infantil",
                                "28", "Ministerio da mulher")

escala("Pregadores (Domingo)",  "04","George", 
                                "11","Antonio Filho",
                                "18","Enos",
                                "25", "Karol")

escala_dia("Diaconato",         "Dom","Francisca", 
                                "Qua","Yara",
                                "Sab","Enos")

escala("Parte Especial (Sabado)",   "03","Leia", 
                                    "10","Santa",
                                    "17","Isabelly",
                                    "24", "Luana")

escala("Parte Especial (Quarta)",   "07","Karol", 
                                    "11","Luana",
                                    "21","Manu",
                                    "28", "Karol")

escala("Parte Especial (Domingo)",  "04","Karine", 
                                    "11","Luana",
                                    "18","Bia",
                                    "25", "Yara")

escala_dia("Trabalho de Cantico",   "Dom","Bia e Mada", 
                                    "Qua","Karine",
                                    "Sab","Luzidete e Karol")

escala_dia("Recepção",              "Dom","Luzidete", 
                                    "Qua","Alcangela",
                                    "Sab","Santa")

escala_dia("Sonosplatia",           "Dom","Karine", 
                                    "Qua","----",
                                    "Sab","Luana")


escala("Adoração Infantil",         "03","Gabi", 
                                    "10","Yara",
                                    "17","Bia",
                                    "24","Alcangela")

escala("Escola Sabatina",           "07","Ministerio Pessoal", 
                                    "14","Ministerio da Familia",
                                    "21","Ministerio Mordomia",
                                    "28","Jovens")
