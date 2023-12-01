let facultyScore = [
    {
        faculty: 'คณะวิทยาศาสตร์',
        Field_of_study: [
            {
                name: 'ชีววิทยา',
                Subject: ['Thai','English','Math','Science_and_technologye','Physic', 'Chemical', 'Biology'],
                wigth: [10, 15, 15, 15, 10, 15, 20],
            },
            {
                name: 'เคมี',
                Subject: ['Thai','English','Math','Science_and_technologye','Physic', 'Chemical', 'Biology'],
                wigth: [10, 10, 15, 20, 10, 25, 10],
            },
            {
                name: 'ฟิสิกส์',
                Subject: ['Thai','English','Math','Science_and_technologye','Physic', 'Chemical', 'Biology'],
                wigth: [10, 10, 15, 20, 20, 15, 10],
            },
            {
                name: 'คณิตศาสตร์',
                Subject: ['Thai','English','Math','Science_and_technologye','Physic', 'Chemical', 'Biology'],
                wigth: [10, 15, 35, 10, 10, 10, 10],
            },
            {
                name: 'สถิติและวิทยาการข้อมูล_สาขาวิชาเอกสถิติศาสตร์',
                Subject: ['Thai','English','Math','Science_and_technologye'],
                wigth: [10, 10, 40, 40],
            },
            {
                name: 'สถิติและวิทยาการข้อมูล_วิชาเอกสารสนเทศ_สถิติและวิทยาการข้อมูล',
                Subject: ['Thai','English','Math','Science_and_technologye'],
                wigth: [10, 10, 40, 40],
            },
            {
                name: 'ชีวะเคมี',
                Subject: ['Thai','English','Math','Science_and_technologye','Physic', 'Chemical', 'Biology'],
                wigth: [10, 15, 10, 15, 10, 20, 20],
            },
            {
                name: 'จุลชีววิทยา',
                Subject: ['Thai','English','Math','Science_and_technologye','Physic', 'Chemical', 'Biology'],
                wigth: [
                    10, //ไทย 
                    15, //อังกฤษ
                    15, //คณิต
                    15, //วิทเทค
                    10, //ฟิสิกส์
                    15, //เคมี
                    20 //ชีวะ
                ],
            },
            {
                name: 'วิทยาศาสตร์_สิ่งแวดล้อม',
                Subject: ['Thai','English','Math','Science_and_technologye','Physic', 'Chemical', 'Biology'],
                wigth: [
                    10, //ไทย 
                    15, //อังกฤษ
                    10, //คณิต
                    15, //วิทเทค
                    10, //ฟิสิกส์
                    20, //เคมี
                    20 //ชีวะ
                ],
            },
            {
                name: 'วัสดุศาสตร์และนาโนเทคโนโลยี',
                Subject: ['Thai','English','Math','Science_and_technologye','Physic', 'Chemical', 'Biology'],
                wigth: [
                    10, //ไทย 
                    10, //อังกฤษ
                    10, //คณิต
                    20, //วิทเทค
                    15, //ฟิสิกส์
                    15, //เคมี
                    15 //ชีวะ
                ],
            },
            {
                name: 'คณิตศาสตร์_(สค.วค.)',
                Subject: ['Thai','English','Math','Science_and_technologye','Physic', 'Chemical', 'Biology'],
                wigth: [
                    10, //ไทย 
                    15, //อังกฤษ
                    35, //คณิต
                    10, //วิทเทค
                    10, //ฟิสิกส์
                    10, //เคมี
                    10 //ชีวะ
                ],
            },
            {
                name: 'ชีววิทยา_(สค.วค.)',
                Subject: ['Thai','English','Math','Science_and_technologye','Physic', 'Chemical', 'Biology'],
                wigth: [
                    10, //ไทย 
                    15, //อังกฤษ
                    15, //คณิต
                    15, //วิทเทค
                    10, //ฟิสิกส์
                    15, //เคมี
                    20 //ชีวะ
                ],
            },
            {
                name: 'ฟิสิกส์_(สค.วค.)',
                Subject: ['Thai','English','Math','Science_and_technologye','Physic', 'Chemical', 'Biology'],
                wigth: [
                    10, //ไทย 
                    10, //อังกฤษ
                    15, //คณิต
                    20, //วิทเทค
                    20, //ฟิสิกส์
                    15, //เคมี
                    10 //ชีวะ
                ],
            },
            {
                name: 'วิทยาศาสตร์แบตเตอรี่และพลังงานใหม่',
                Subject: ['Thai','English','Math','Science_and_technologye','Physic', 'Chemical', 'Biology'],
                wigth: [
                    10, //ไทย 
                    10, //อังกฤษ
                    10, //คณิต
                    20, //วิทเทค
                    20, //ฟิสิกส์
                    20, //เคมี
                    10 //ชีวะ
                ],
            },
        ]
    },
    {
        faculty: 'คณะเกษตรศาสตร์',
        Field_of_study: [
            {
                name: 'เกษตรศาสตร์_วิชาเอกพืชไร่',
                Subject: ['Thai','English','Math','Science_and_technologye','Physic', 'Chemical', 'Biology'],
                wigth: [
                    10, //ไทย 
                    15, //อังกฤษ
                    15, //คณิต
                    15, //วิทเทค
                    10, //ฟิสิกส์
                    15, //เคมี
                    20 //ชีวะ
                ],
            },
            {
                name: 'การประมง',
                Subject: ['Thai','English','Math','Science_and_technologye','Physic', 'Chemical', 'Biology'],
                wigth: [
                    10, //ไทย 
                    15, //อังกฤษ
                    15, //คณิต
                    15, //วิทเทค
                    10, //ฟิสิกส์
                    15, //เคมี
                    20 //ชีวะ
                ],
            },
            {
                name: 'เกษตรศาสตร์วิชาเอกโรคพืชวิทยา',
                Subject: ['Thai','English','Math','Science_and_technologye','Physic', 'Chemical', 'Biology'],
                wigth: [
                    10, //ไทย 
                    15, //อังกฤษ
                    15, //คณิต
                    15, //วิทเทค
                    10, //ฟิสิกส์
                    15, //เคมี
                    20 //ชีวะ
                ],
            },
            {
                name: 'เกษตรศาสตร์วิชาเอกพืชสวน',
                Subject: ['Thai','English','Math','Science_and_technologye','Physic', 'Chemical', 'Biology'],
                wigth: [
                    10, //ไทย 
                    15, //อังกฤษ
                    15, //คณิต
                    15, //วิทเทค
                    10, //ฟิสิกส์
                    15, //เคมี
                    20 //ชีวะ
                ],
            },
            {
                name: 'เศรษฐศาสตร์เกษตรและธุรกิจเกษตร',
                Subject: ['Thai','English','Math','Science_and_technologye','Physic', 'Chemical', 'Biology'],
                wigth: [
                    10, //ไทย 
                    15, //อังกฤษ
                    25, //คณิต
                    15, //วิทเทค
                    10, //ฟิสิกส์
                    10, //เคมี
                    15 //ชีวะ
                ],
            },
            {
                name: 'เกษตรศาสตร์วิชาเอกกีฎวิทยา',
                Subject: ['Thai','English','Math','Science_and_technologye','Physic', 'Chemical', 'Biology'],
                wigth: [
                    10, //ไทย 
                    15, //อังกฤษ
                    15, //คณิต
                    15, //วิทเทค
                    10, //ฟิสิกส์
                    15, //เคมี
                    20 //ชีวะ
                ],
            },
            {
                name: 'เกษตรศาสตร์วิชาเอกการส่งเสริมและพัฒนาการเกษตร',
                Subject: ['Thai','English','Math','Science_and_technologye','Physic', 'Chemical', 'Biology'],
                wigth: [
                    10, //ไทย 
                    15, //อังกฤษ
                    15, //คณิต
                    15, //วิทเทค
                    10, //ฟิสิกส์
                    15, //เคมี
                    20 //ชีวะ
                ],
            },
            {
                name: 'เกษตรนวัตกรรม',
                Subject: ['Thai','English','Math','Science_and_technologye','Physic', 'Chemical', 'Biology'],
                wigth: [
                    15, //ไทย 
                    15, //อังกฤษ
                    15, //คณิต
                    20, //วิทเทค
                    10, //ฟิสิกส์
                    10, //เคมี
                    15 //ชีวะ
                ],
            },
            {
                name: 'เกษตรศาสตร์วิชาเอกปฐพีศาสตร์และสิ่งแวดล้อม',
                Subject: ['Thai','English','Math','Science_and_technologye','Physic', 'Chemical', 'Biology'],
                wigth: [
                    10, //ไทย 
                    15, //อังกฤษ
                    15, //คณิต
                    15, //วิทเทค
                    10, //ฟิสิกส์
                    15, //เคมี
                    20 //ชีวะ
                ],
            },
            {
                name: 'สัตวศาสตร์',
                Subject: ['Thai','English','Math','Science_and_technologye','Physic', 'Chemical', 'Biology'],
                wigth: [
                    10, //ไทย 
                    15, //อังกฤษ
                    15, //คณิต
                    15, //วิทเทค
                    10, //ฟิสิกส์
                    15, //เคมี
                    20 //ชีวะ
                ],
            },
        ]
    },
    {
        faculty: 'คณะวิศวกรรมศาสตร์',
        Field_of_study: [
            {
                name: 'วิศวกรรมโยธา',
                Subject: ['English','Math','Physic', 'ความถนัดทางวิศวะ'],
                wigth: [
                    10, //อังกฤษ
                    35, //คณิต
                    35, //ฟิสิกส์
                    20 // ความถนัดทางวิศวะ
                ],
            },
            {
                name: 'วิศวกรรมไฟฟ้า',
                Subject: ['English','Math','Physic', 'ความถนัดทางวิศวะ'],
                wigth: [
                    20, //อังกฤษ
                    30, //คณิต
                    30, //ฟิสิกส์
                    20 // ความถนัดทางวิศวะ
                ],
            },
            {
                name: 'วิศวกรรมเกษตร',
                Subject: ['English','Math','Physic', 'ความถนัดทางวิศวะ'],
                wigth: [
                    20, //อังกฤษ
                    30, //คณิต
                    30, //ฟิสิกส์
                    20 // ความถนัดทางวิศวะ
                ],
            },
            {
                name: 'วิศวกรรมอุตสาหการ',
                Subject: ['English','Math','Physic', 'ความถนัดทางวิศวะ'],
                wigth: [
                    25, //อังกฤษ
                    25, //คณิต
                    25, //ฟิสิกส์
                    25 // ความถนัดทางวิศวะ
                ],
            },
            {
                name: 'วิศวกรรมเครื่องกล',
                Subject: ['English','Math','Physic', 'Chemical', 'ความถนัดทางวิศวะ'],
                wigth: [
                    10, //อังกฤษ
                    25, //คณิต
                    25, //ฟิสิกส์
                    10, //เคมี
                    30 // ความถนัดทางวิศวะ
                ],
            },
            {
                name: 'วิศวกรรมสิ่งแวดล้อม',
                Subject: ['English','Math','Physic', 'Chemical', 'ความถนัดทางวิศวะ'],
                wigth: [
                    15, //อังกฤษ
                    25, //คณิต
                    25, //ฟิสิกส์
                    15, //เคมี
                    20 // ความถนัดทางวิศวะ
                ],
            },
            {
                name: 'วิศวกรรมเคมี',
                Subject: ['Thai', 'English','Math','Physic', 'Chemical', 'ความถนัดทางวิศวะ'],
                wigth: [
                    5, //ไทย
                    10, //อังกฤษ
                    25, //คณิต
                    25, //ฟิสิกส์
                    15, //เคมี
                    20 // ความถนัดทางวิศวะ
                ],
            },
            {
                name: 'วิศวกรรมคอมพิวเตอร์',
                Subject: ['English','Math','Physic','ความถนัดทางวิศวะ'],
                wigth: [
                    20, //อังกฤษ
                    30, //คณิต
                    20, //ฟิสิกส์
                    30 // ความถนัดทางวิศวะ
                ],
            },
            {
                name: 'วิศวกรรมระบบอิเล็กทรอนิกส์',
                Subject: ['Thai', 'English','Math','Physic','ความถนัดทางวิศวะ'],
                wigth: [
                    10, //ไทย
                    10, //อังกฤษ
                    30, //คณิต
                    30, //ฟิสิกส์
                    20 // ความถนัดทางวิศวะ
                ],
            },
            {
                name: 'วิศวกรรมระบบอัตโนมัติหุ่นยนต์_และ_ปัญญาประดิษฐ์',
                Subject: ['Thai', 'English','Math','Science_and_technologye','Physic','ความถนัดทางวิศวะ'],
                wigth: [
                    10, //ไทย
                    10, //อังกฤษ
                    20, //คณิต
                    20, //วิทเทค
                    20, //ฟิสิกส์
                    20 // ความถนัดทางวิศวะ
                ],
            },
            {
                name: 'วิศวกรรมโทรคมนาคม_หลักสูตรนานาชาติ',
                Subject: ['English','Math','Physic','ความถนัดทางวิศวะ'],
                wigth: [
                    30, //อังกฤษ
                    30, //คณิต
                    30, //ฟิสิกส์
                    10 // ความถนัดทางวิศวะ
                ],
            },
            {
                name: 'วิศวกรรมโลจิสติกส์_หลักสูตรนานาชาติ',
                Subject: ['English','Math','Physic','ความถนัดทางวิศวะ'],
                wigth: [
                    30, //อังกฤษ
                    30, //คณิต
                    20, //ฟิสิกส์
                    20 // ความถนัดทางวิศวะ
                ],
            },
            {
                name: 'วิศวกรรมกระบวนการเคมี_หลักสูตรนานาชาติ',
                Subject: ['English','Math','Science_and_technologye','Physic','Chemical','ความถนัดทางวิศวะ'],
                wigth: [
                    16, //อังกฤษ
                    16, //คณิต
                    16, //วิทเทค
                    16, //ฟิสิกส์
                    16, //เคมี
                    20 // ความถนัดทางวิศวะ
                ],
            },
            {
                name: 'วิศวกรรมสื่อดิจิทัล_หลักสูตรนานาชาติ',
                Subject: ['English','Math','Physic','ความถนัดทางวิศวะ'],
                wigth: [
                    30, //อังกฤษ
                    30, //คณิต
                    30, //ฟิสิกส์
                    10 // ความถนัดทางวิศวะ
                ],
            },
        ]
    },
    {
        faculty: 'คณะศึกษาศาสตร์',
        Field_of_study: [
            {
                name: 'ศึกษาศาสตร์บัณฑิตวิชาเอก_ศาสตรศึกษา',
                Subject: [
                    'Thai','English',
                    'Math','Science_and_technologye',
                    ],
                wigth: [
                    20, //ไทย 
                    20, //อังกฤษ
                    40, //คณิต
                    20, //วิทเทค
                ],
            },
            {
                name: 'ศึกษาศาสตรบัณฑิตวิชาเอก_วิทยาศาสตร์ศึกษา',
                Subject: [
                    'Thai','English',
                    'Math','Science_and_technologye',
                    'Physic','Chemical',
                    'Biology',
                ],
                wigth: [
                    15, //ไทย 
                    30, //อังกฤษ
                    15, //คณิต
                    19, //วิทเทค
                    7, //ฟิสิกส์
                    7, //เคมี
                    7 //ชีวะ
                ],
            },
            {
                name: 'ศึกษาศาสตรบัณฑิตวิชาเอก_การสอนภาษาไทย',
                Subject: [
                    'Thai','English',
                    'Math',
                ],
                wigth: [
                    65, //ไทย 
                    30, //อังกฤษ
                    5, //คณิต
                ],
            },
            {
                name: 'ศึกษาศาสตรบัณฑิตวิชาเอก_ศิลปศึกษา',
                Subject: [
                    'Thai','English',
                    'Math','ความถนัดทางศิลป์'
                ],
                wigth: [
                    30, //ไทย 
                    20, //อังกฤษ
                    10, //คณิต
                    40, //ความถนัดทางศิลป์
                ],
            },
            {
                name: 'ศึกษาศาสตรบัณฑิตวิชาเอก_พลศึกษา',
                Subject: [
                    'Thai','English',
                    'Math','Science_and_technologye',
                    'สรรมถนะทางกาย'
                ],
                wigth: [
                    15, //ไทย 
                    30, //อังกฤษ
                    15, //คณิต
                    20, //วิทเทค
                    20, //สรรมถนะทางกาย
                ],
            },
            {
                name: 'ศึกษาศาสตรบัณฑิตวิชาเอก_คอมพิวเตอร์ศึกษา',
                Subject: [
                    'Thai','English',
                    'Math','Science_and_technologye',
                ],
                wigth: [
                    20, //ไทย 
                    25, //อังกฤษ
                    25, //คณิต
                    30, //วิทเทค
                ],
            },
            {
                name: 'ศึกษาศาสตรบัณฑิตวิชาเอก_การสอนภาษาญี่ปุ่น',
                Subject: [
                    'Thai','English',
                    'Math','ญี่ปุ่น',
                ],
                wigth: [
                    20, //ไทย 
                    20, //อังกฤษ
                    20, //คณิต
                    40, //ญี่ปุ่น
                ],
            },
            {
                name: 'ศึกษาศาสตรบัณฑิตวิชาเอก_สังคมศึกษา',
                Subject: [
                    'Thai','English',
                    'Math','Science_and_technologye',
                ],
                wigth: [
                    20, //ไทย 
                    35, //อังกฤษ
                    15, //คณิต
                    30, //วิทเทค
                ],
            },
            {
                name: 'ศึกษาศาสตรบัณฑิตวิชาเอก_ดนตรีศึกษา',
                Subject: [
                    'Thai','English',
                    'Math','ดนตรี',
                ],
                wigth: [
                    20, //ไทย 
                    20, //อังกฤษ
                    10, //คณิต
                    50, //ดนตรี
                ],
            },
            {
                name: 'การสอนภาษาอังกฤษให้ผู้มีพื้นฐานภาษาอื่นนอกจากภาษาอังกฤษ(หลักสูตรนานาชาติ)',
                Subject: [
                    'Thai','English',
                ],
                wigth: [
                    10, //ไทย 
                    90, //อังกฤษ
                ],
            },
            {
                name: 'ศึกษาศาสตรบัณฑิตวิชาเอก_เดี่ยวการประถมศึกษา',
                Subject: [
                    'Thai','English',
                    'Math','Science_and_technologye',
                ],
                wigth: [
                    25, //ไทย 
                    25, //อังกฤษ
                    25, //คณิต
                    25, //วิทเทค
                ],
            },
        ]
    },
    {
        faculty: 'คณะพยาบาลศาสตร์',
        Field_of_study: [
            {
                name: 'พยาบาลศาสตรบัณฑิต',
                Subject: [
                    'Thai','English',
                    'Math','Physic',
                    'Chemical','Biology'
                ],
                wigth: [
                    10, //ไทย 
                    20, //อังกฤษ
                    20, //คณิต
                    15, //ฟิสิกส์
                    15, //เคมี
                    20 //ชีวะ
                ],
            },
        ]
    },{
        faculty: 'คณะแพทยศาสตร์',
        Field_of_study: [
            {
                name: 'รังสีเทคนิค',
                Subject: [
                    'Thai','English',
                    'Math',
                    'Physic','Chemical',
                    'Biology',
                ],
                wigth: [
                    10, //ไทย 
                    15, //อังกฤษ
                    15, //คณิต
                    22.5, //ฟิสิกส์
                    15, //เคมี
                    22.5 //ชีวะ
                ],
            },
            {
                name: 'เวชนิทัศน์',
                Subject: [
                    'Thai','English',
                    'Science_and_technologye','ศิลป์สำหรับเวชนิทัศน์',
                    'เทคโนโลยี',
                ],
                wigth: [
                    10, //ไทย 
                    15, //อังกฤษ
                    25, //วิทเทค
                    25, //ศิลป์สำหรับเวชนิทัศน์
                    25, //เทคโนโลยี
                ],
            },
            {
                name: 'แพทย์ศาสตร์บัณฑิต',
                Subject: [
                    'Thai','English',
                    'Math',
                    'Physic','Chemical',
                    'Biology',
                ],
                wigth: [
                    10, //ไทย 
                    30, //อังกฤษ
                    15, //คณิต
                    15, //ฟิสิกส์
                    15, //เคมี
                    15 //ชีวะ
                ],
            },
            
        ]
    },
    {
        faculty: 'คณะมนุษศาสตร์และสังคมศาสตร์',
        Field_of_study: [
            {
                name: 'หลักสูตรสารสนเทศศาสตร์บัณฑิต',
                Subject: [
                    'Thai','English',
                    'Math','Science_and_technologye',
                ],
                wigth: [
                    30, //ไทย 
                    40, //อังกฤษ
                    15, //คณิต
                    15, //วิทเทค
                ],
            },
            {
                name: 'ภาษาฝรั่งเศษเลือกสอบวิชาคณิตศาสตร์',
                Subject: [
                    'Thai','English',
                    'Math',
                ],
                wigth: [
                    30, //ไทย 
                    30, //อังกฤษ
                    40, //คณิต
                ],
            },
            {
                name: 'สังคมวิทยาและมานุษวิทยา',
                Subject: [
                    'Thai','English',
                    'Math','Science_and_technologye',
                ],
                wigth: [
                    40, //ไทย 
                    30, //อังกฤษ
                    15, //คณิต
                    15, //วิทเทค
                ],
            },
            {
                name: 'ภาษาเยอรมัน_เลือกสอบภาษาไทยและภาษาอังกฤษ',
                Subject: [
                    'Thai','English',
                ],
                wigth: [
                    50, //ไทย 
                    50, //อังกฤษ
                ],
            },
            {
                name: 'ภาษาสเปน_เลือกสอบภาษาไทยและภาษาอังกฤษ',
                Subject: [
                    'Thai','English',
                ],
                wigth: [
                    50, //ไทย 
                    50, //อังกฤษ
                ],
            },
            {
                name: 'ภาษาตะวันออก_วิชาเอกภาษาญี่ปุ่น',
                Subject: [
                    'Thai','English',
                    'ญี่ปุ่น',
                ],
                wigth: [
                    20, //ไทย 
                    40, //อังกฤษ
                    40, //ญี่ปุ่น
                ],
            },
            {
                name: 'ภาษาตะวันออก_วิชาเอกภาษาจีน_แผนA',
                Subject: [
                    'Thai','English',
                    'จีน',
                ],
                wigth: [
                    20, //ไทย 
                    40, //อังกฤษ
                    40, //จีน
                ],
            },
            {
                name: 'ภาษาตะวันออก_วิชาเอกภาษาจีน_แผนB',
                Subject: [
                    'Thai','English',
                    'จีน',
                ],
                wigth: [
                    20, //ไทย 
                    40, //อังกฤษ
                    40, //จีน
                ],
            },
            {
                name: 'ภาษาตะวันออก_วิชาเอกภาษาเกาหลี',
                Subject: [
                    'Thai','English',
                    'เกาหลี',
                ],
                wigth: [
                    20, //ไทย 
                    40, //อังกฤษ
                    40, //เกาหลี
                ],
            },
            {
                name: 'ภาษาอังกฤษ',
                Subject: [
                    'Thai','English',
                ],
                wigth: [
                    20, //ไทย 
                    80, //อังกฤษ
                ],
            },
            {
                name: 'ภาษาไทย_เลือกสอบภาษาไทยและภาษาอังกฤษ',
                Subject: [
                    'Thai','English',
                ],
                wigth: [
                    60, //ไทย 
                    40, //อังกฤษ
                ],
            },
            {
                name: 'ภาษาไทย_เลือกสอบวิชาต่างๆ',
                Subject: [
                    'Thai','English',
                    'วิชาต่างๆ'
                ],
                wigth: [
                    50, //ไทย 
                    30, //อังกฤษ
                    20, //วิชาต่างๆ
                ],
            },
            {
                name: 'เอเชียตะวันออกเฉียงใต้ศึกษา',
                Subject: [
                    'Thai','English',
                ],
                wigth: [
                    50, //ไทย 
                    50, //อังกฤษ
                ],
            },
            {
                name: 'เอเชียตะวันออกเฉียงใต้ศึกษา_เลือกสอบวิชาต่างๆ',
                Subject: [
                    'Thai','English',
                    'วิชาต่างๆ',
                ],
                wigth: [
                    40, //ไทย 
                    40, //อังกฤษ
                    20, //วิชาต่างๆ
                ],
            },
            {
                name: 'รัฐประศาสนศาสตร์',
                Subject: [
                    'Thai','English',
                    'Math','Science_and_technologye',
                ],
                wigth: [
                    25, //ไทย 
                    30, //อังกฤษ
                    15, //คณิต
                    30, //วิทเทค
                ],
            },
            {
                name: 'ภาษาสเปน_เลือกสอบวิชาต่างๆ',
                Subject: [
                    'Thai','English',
                    'วิชาต่างๆ',
                ],
                wigth: [
                    30, //ไทย 
                    30, //อังกฤษ
                    40, //วิชาต่างๆ
                ],
            },
            {
                name: 'ภาษาเยอรมัน_เลือกสอบวิชาต่างๆ',
                Subject: [
                    'Thai','English',
                    'วิชาต่างๆ',
                ],
                wigth: [
                    30, //ไทย 
                    30, //อังกฤษ
                    40, //วิชาต่างๆ
                ],
            },
            {
                name: 'ภาษาฝรั่งเศส_เลือกสอบภาษาไทยและอังกฤษ',
                Subject: [
                    'Thai','English',
                ],
                wigth: [
                    50, //ไทย 
                    50, //อังกฤษ
                ],
            },
            {
                name: 'ภาษาฝรั่งเสศ_เลือกสอบวิชาต่างๆ',
                Subject: [
                    'Thai','English',
                    'วิชาต่างๆ',
                ],
                wigth: [
                    30, //ไทย 
                    30, //อังกฤษ
                    40, //วิชาต่างๆ
                ],
            },
            {
                name: 'พัฒนาสังคม',
                Subject: [
                    'Thai','English',
                    'Math','Science_and_technologye',
                ],
                wigth: [
                    40, //ไทย 
                    30, //อังกฤษ
                    15, //คณิต
                    15, //วิทเทค
                ],
            },
        ]
    },
    {
        faculty: 'คณะเทคนิคการแพทย์',
        Field_of_study: [
            {
                name: 'เทคนิคการแพทย์',
                Subject: [
                    'Thai','English',
                    'Math','Science_and_technologye',
                    'Physic','Chemical',
                    'Biology',
                ],
                wigth: [
                    10, //ไทย 
                    10, //อังกฤษ
                    10, //คณิต
                    10, //วิทเทค
                    10, //ฟิสิกส์
                    25, //เคมี
                    25 //ชีวะ
                ],
            },
            {
                name: 'กายภาพบำบัด',
                Subject: [
                    'Thai','English',
                    'Math','Science_and_technologye',
                    'Physic','Chemical',
                    'Biology',
                ],
                wigth: [
                    10, //ไทย 
                    20, //อังกฤษ
                    20, //คณิต
                    10, //วิทเทค
                    15, //ฟิสิกส์
                    5, //เคมี
                    20 //ชีวะ
                ],
            },
        ]
    },
    {
        faculty: 'คณะสาธารณสุขศาสตร์',
        Field_of_study: [
            {
                name: 'สาธารณสุขศาสตร์_วิชาเอก_อนามัยสิ่งแวดล้อม',
                Subject: [
                    'Thai','English',
                    'Math','Science_and_technologye',
                    'Physic','Chemical',
                    'Biology',
                ],
                wigth: [
                    10, //ไทย 
                    15, //อังกฤษ
                    15, //คณิต
                    15, //วิทเทค
                    15, //ฟิสิกส์
                    15, //เคมี
                    15 //ชีวะ
                ],
            },
            {
                name: 'สาธารณสุขศาสตร์_อนามัยสิ่งแวดล้อม_อาชีวอนามัยและความปลอดภัย',
                Subject: [
                    'Thai','English',
                    'Math','Science_and_technologye',
                    'Physic','Chemical',
                    'Biology',
                ],
                wigth: [
                    10, //ไทย 
                    15, //อังกฤษ
                    15, //คณิต
                    15, //วิทเทค
                    15, //ฟิสิกส์
                    15, //เคมี
                    15 //ชีวะ
                ],
            },
            {
                name: 'สาธารณสุขศาสตร์_วิชาเอก_อาชีวอนามัยและความปลอดภัย',
                Subject: [
                    'Thai','English',
                    'Math','Science_and_technologye',
                    'Physic','Chemical',
                    'Biology',
                ],
                wigth: [
                    10, //ไทย 
                    15, //อังกฤษ
                    15, //คณิต
                    15, //วิทเทค
                    15, //ฟิสิกส์
                    15, //เคมี
                    15 //ชีวะ
                ],
            },
            {
                name: 'สาธารณสุขศาสตรบัณฑิต',
                Subject: [
                    'Thai','English',
                    'Math','Science_and_technologye',
                    'Physic','Chemical',
                    'Biology',
                ],
                wigth: [
                    10, //ไทย 
                    15, //อังกฤษ
                    10, //คณิต
                    15, //วิทเทค
                    10, //ฟิสิกส์
                    20, //เคมี
                    20 //ชีวะ
                ],
            },
        ]
    },
    {
        faculty: 'คณะทันตแพทย์ศาสตร์',
        Field_of_study: [
            {
                name: 'ทันตแพทย์ศาสตร์',
                Subject: [
                    'Thai','English',
                    'Math',
                    'Physic','Chemical',
                    'Biology',
                ],
                wigth: [
                    12, //ไทย 
                    25, //อังกฤษ
                    20, //คณิต
                    13, //ฟิสิกส์
                    15, //เคมี
                    15 //ชีวะ
                ],
            },
        ]
    },
    {
        faculty: 'คณะสัตวแพทย์ศาสตร์',
        Field_of_study: [
            {
                name: 'สัตวแพทย์ศาสตร์บัณฑิต',
                Subject: [
                    'Thai','English',
                    'Math',
                    'Physic','Chemical',
                    'Biology',
                ],
                wigth: [
                    15, //ไทย 
                    25, //อังกฤษ
                    15, //คณิต
                    15, //ฟิสิกส์
                    15, //เคมี
                    15 //ชีวะ
                ],
            },
        ]
    },
]