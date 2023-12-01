//เลือกคณะแล้วให้ทำ ดังต่อไปนี้
facultyList.addEventListener('change', ()=>{

    //สร้างตัวแปรรับค่าSELECT (facultyList)
    let val = facultyList.value;

    //Reset value
    Field_of_study_val = []
    fackArray = []
    Field_of_study_S.innerHTML = ''
    Field_of_study_list = ''

    //for เพื่อหาค่าfacultyScore
    for (let i = 0; i < facultyScore.length; i++) {
        if (facultyScore[i].faculty == val) {

            //รับค่า สาขาวิชาทั้งหมด
            Field_of_study_list = facultyScore[i].Field_of_study

            const optionStart = `
                    <option selected>Open this select Field of study</option>
                `
            Field_of_study_S.insertAdjacentHTML('beforeend', optionStart)

            //สร้างตัวเลือก สาขาวิชา
            for (let item of Field_of_study_list) {
                
                const card = `
                    <option value=`+item.name+`>`+item.name+`</option>
                `
                Field_of_study_S.insertAdjacentHTML('beforeend', card)
            }

            //เมื่อเลือกสาขาวิชาแล้วจะแสดง ดังต่อไปนี้
            Field_of_study_S.addEventListener('change', ()=>{

                //รับค่าของ สาขาวิชา
                let val = Field_of_study_S.value;

                for (let i = 0; i < Field_of_study_list.length; i++) {

                    //เช็คว่ามีชื่อสาขาไหม
                    if (Field_of_study_list[i].name == val) {

                        //Reset ค่าต่างๆ
                        fackArray = []
                        let rows = Field_of_study_list[i]
                        cards.innerHTML = ''
                        button_box.innerHTML = ''
                        
                        //แสดงแบบฟรอมในการกรอกคะแนน
                        for (let item of rows.Subject) {
                            const card = `
                            <div class="mb-3">
                                <label for=`+item+` class="form-label">`+item+`</label>
                                <input type="number" class="form-control" id=`+item+` placeholder="Enter your score (`+item+`)">
                            </div>
                            `
                            cards.insertAdjacentHTML('beforeend', card)
                        }
                        //สร้างปุ่ม เพื่อคำนวณคะแนน
                        const button = `
                        <button class="btn btn-primary" onclick="calculate()">Send</button>
                        `
                        button_box.insertAdjacentHTML('beforeend', button)
                        fackArray.push(rows)
                        return
            
                    }else {
                        cards.innerHTML = ''
                        button_box.innerHTML = ''
                    }
                }
            })   

            return     
        }else {
            cards.innerHTML = ''
            button_box.innerHTML = ''
            continue
        }
    }
})