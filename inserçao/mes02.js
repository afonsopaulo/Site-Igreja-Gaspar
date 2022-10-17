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

escala("Pregadores (Sabado)",   "05","M.pessoal",
                                "12","Luana",
                                "19","Mordomia",
                                "26","Enos")


escala5("Pregadores (Quarta)",  "02","Alacangela", 
                                "09","Raimundinho",
                                "16","Teresa",
                                "23","M.Criaça",
                                "30","M.Mulher")

escala("Pregadores (Domingo)",  "06","Mada", 
                                "13","Santa",
                                "20","Antonio Lopez",
                                "27","Francisca")

escala_dia("Diaconato",         "Dom","Yara", 
                                "Qua","Francisca",
                                "Sab","leonardo")

escala("Parte Especial (Sabado)",   "05","Luana", 
                                    "12","Isabella",
                                    "19","Leia",
                                    "26","Karine")

escala5("Parte Especial (Quarta)",  "02","Yara", 
                                    "09","Manu",
                                    "16","Karine",
                                    "23","Yara",
                                    "30","Santa")

escala("Parte Especial (Domingo)",  "06","Yara", 
                                    "13","Luana",
                                    "20","Bia",
                                    "27","Santa")

escala_dia("Trabalho de Cantico",   "Dom","Bia e Luzidete", 
                                    "Qua","Santa",
                                    "Sab","Karine e Mada")

escala_dia("Recepção",              "Dom","leonardo", 
                                    "Qua","Francisca",
                                    "Sab","Leia")

escala_dia("Sonosplatia",           "Dom","Luana", 
                                    "Qua","Leo",
                                    "Sab","Paulo")


escala("Adoração Infantil",         "05","Santa", 
                                    "12","Bia",
                                    "19","Teresa",
                                    "26","Francisca")

escala("Escola Sabatina",           "05","M.Mulher", 
                                    "12","M.Homens",
                                    "19","M.Criaça",
                                    "26","M.jovens")
