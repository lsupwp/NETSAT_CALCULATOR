function calculate() {
    //Reset ข้อมูล
    alert_box.innerHTML = ''
    Score = []
    realScore = []

    //คะแนน * น้ำหนัก / 100 = คะแนนจริง

    
    let item = fackArray[0]
    for (let rows of item.Subject){
        let x = document.getElementById(rows).value
        Score.push(x)
    }
    for (i=0;i<item.wigth.length;i++){
        let a = item.wigth[i]
        let b = Score[i]
        z = (b * a) / 100
        realScore.push(z)
    }

    //รวมคะแนนจริงทั้งหมด
    const sum = realScore.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
    }, 0);

    //แสดงคะแนน
    const alertCon = `
    <div class="alert alert-success" role="alert">
        You score is `+sum+`
    </div>
    `
    alert_box.insertAdjacentHTML("beforeend", alertCon)
}