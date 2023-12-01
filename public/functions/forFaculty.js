//สร้างคณะ
for (let item of facultyScore) {
    const card = `
        <option value=`+item.faculty+`>`+item.faculty+`</option>
        `
        facultyList.insertAdjacentHTML('beforeend', card)
}