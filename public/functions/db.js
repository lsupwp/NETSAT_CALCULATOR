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
                Subject: ['English','Math','Physic', 'Pat3'],
                wigth: [
                    10, //อังกฤษ
                    35, //คณิต
                    35, //ฟิสิกส์
                    20 // Pat3
                ],
            },
            {
                name: 'วิศวกรรมไฟฟ้า',
                Subject: ['English','Math','Physic', 'Pat3'],
                wigth: [
                    20, //อังกฤษ
                    30, //คณิต
                    30, //ฟิสิกส์
                    20 // Pat3
                ],
            },
            {
                name: 'วิศวกรรมเกษตร',
                Subject: ['English','Math','Physic', 'Pat3'],
                wigth: [
                    20, //อังกฤษ
                    30, //คณิต
                    30, //ฟิสิกส์
                    20 // Pat3
                ],
            },
            {
                name: 'วิศวกรรมอุตสาหการ',
                Subject: ['English','Math','Physic', 'Pat3'],
                wigth: [
                    25, //อังกฤษ
                    25, //คณิต
                    25, //ฟิสิกส์
                    25 // Pat3
                ],
            },
            {
                name: 'วิศวกรรมเครื่องกล',
                Subject: ['English','Math','Physic', 'Chemical', 'Pat3'],
                wigth: [
                    10, //อังกฤษ
                    25, //คณิต
                    25, //ฟิสิกส์
                    10, //เคมี
                    30 // Pat3
                ],
            },
            {
                name: 'วิศวกรรมสิ่งแวดล้อม',
                Subject: ['English','Math','Physic', 'Chemical', 'Pat3'],
                wigth: [
                    15, //อังกฤษ
                    25, //คณิต
                    25, //ฟิสิกส์
                    15, //เคมี
                    20 // Pat3
                ],
            },
            {
                name: 'วิศวกรรมเคมี',
                Subject: ['Thai', 'English','Math','Physic', 'Chemical', 'Pat3'],
                wigth: [
                    5, //ไทย
                    10, //อังกฤษ
                    25, //คณิต
                    25, //ฟิสิกส์
                    15, //เคมี
                    20 // Pat3
                ],
            },
            {
                name: 'วิศวกรรมคอมพิวเตอร์',
                Subject: ['English','Math','Physic','Pat3'],
                wigth: [
                    20, //อังกฤษ
                    30, //คณิต
                    20, //ฟิสิกส์
                    30 // Pat3
                ],
            },
            {
                name: 'วิศวกรรมระบบอิเล็กทรอนิกส์',
                Subject: ['Thai', 'English','Math','Physic','Pat3'],
                wigth: [
                    10, //ไทย
                    10, //อังกฤษ
                    30, //คณิต
                    30, //ฟิสิกส์
                    20 // Pat3
                ],
            },
            {
                name: 'วิศวกรรมระบบอัตโนมัติหุ่นยนต์_และ_ปัญญาประดิษฐ์',
                Subject: ['Thai', 'English','Math','Science_and_technologye','Physic','Pat3'],
                wigth: [
                    10, //ไทย
                    10, //อังกฤษ
                    20, //คณิต
                    20, //วิทเทค
                    20, //ฟิสิกส์
                    20 // Pat3
                ],
            },
            {
                name: 'วิศวกรรมโทรคมนาคม_หลักสูตรนานาชาติ',
                Subject: ['English','Math','Physic','Pat3'],
                wigth: [
                    30, //อังกฤษ
                    30, //คณิต
                    30, //ฟิสิกส์
                    10 // Pat3
                ],
            },
            {
                name: 'วิศวกรรมโลจิสติกส์_หลักสูตรนานาชาติ',
                Subject: ['English','Math','Physic','Pat3'],
                wigth: [
                    30, //อังกฤษ
                    30, //คณิต
                    20, //ฟิสิกส์
                    20 // Pat3
                ],
            },
            {
                name: 'วิศวกรรมกระบวนการเคมี_หลักสูตรนานาชาติ',
                Subject: ['English','Math','Science_and_technologye','Physic','Chemical','Pat3'],
                wigth: [
                    16, //อังกฤษ
                    16, //คณิต
                    16, //วิทเทค
                    16, //ฟิสิกส์
                    16, //เคมี
                    20 // Pat3
                ],
            },
            {
                name: 'วิศวกรรมสื่อดิจิทัล_หลักสูตรนานาชาติ',
                Subject: ['English','Math','Physic','Pat3'],
                wigth: [
                    30, //อังกฤษ
                    30, //คณิต
                    30, //ฟิสิกส์
                    10 // Pat3
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
    {
        faculty: 'คณะเภสัชศาสตร์',
        Field_of_study: [
            {
                name: 'เภสัชศาสตร์บัณฑิต',
                Subject: [
                    'Thai','English',
                    'Math',
                    'Physic','Chemical',
                    'Biology',
                ],
                wigth: [
                    10, //ไทย 
                    20, //อังกฤษ
                    10, //คณิต
                    15, //ฟิสิกส์
                    25, //เคมี
                    20 //ชีวะ
                ],
            },
        ]
    },
    {
        faculty: 'คณะเทคโนโลยี',
        Field_of_study: [
            {
                name: 'เทคโนโลยีระบบการผลิตและการจัดการอุตสาหกรรม',
                Subject: [
                    'Thai','English',
                    'Math','Science_and_technologye',
                    'Physic',
                ],
                wigth: [
                    20, //ไทย 
                    20, //อังกฤษ
                    20, //คณิต
                    20, //วิทเทค
                    20, //ฟิสิกส์
                ],
            },
            {
                name: 'เทคโนโลยีการอาหาร',
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
                name: 'เทคโนโลยีชีวภาพ',
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
                    20, //วิทเทค
                    10, //ฟิสิกส์
                    20, //เคมี
                    20 //ชีวะ
                ],
            },
            {
                name: 'เทคโนโลยีธรณี',
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
                    20, //วิทเทค
                    15, //ฟิสิกส์
                    15, //เคมี
                    10 //ชีวะ
                ],
            },
        ]
    },
    {
        faculty: 'คณะสถาปัตยกรรมศาสตร์',
        Field_of_study: [
            {
                name: 'การออกแบบ',
                Subject: [
                    'English',
                    'Math','Science_and_technologye',
                    'ความถนัดทางการออกแบบ',
                ],
                wigth: [
                    10, //อังกฤษ
                    25, //คณิต
                    25, //วิทเทค
                    40, //ความถนัดทางการออกแบบ
                ],
            },
            {
                name: 'สถาปัตยกรรมศาสตร์บัณฑิต',
                Subject: [
                    'English',
                    'Math','Science_and_technologye',
                    'ความถนัดทางสถาปัตย์',
                ],
                wigth: [
                    15, //อังกฤษ
                    20, //คณิต
                    25, //วิทเทค
                    40, //ความถนัดทางสถาปัตย์
                ],
            },
        ]
    },
    {
        faculty: 'คณะบริหารธุรกิจและบัญชี',
        Field_of_study: [
            {
                name: 'บัญชีบัณฑิต(หลักสูตรนานาชาติ)',
                Subject: [
                    'Thai','English',
                    'Math',
                ],
                wigth: [
                    35, //ไทย 
                    35, //อังกฤษ
                    30, //คณิต
                ],
            },
            {
                name: 'บริหารธุรกิจบัณฑิต_วิชาเอกการจัดการ_การประกอบการพาณิชย์และนวัฒกรรม',
                Subject: [
                    'Thai','English',
                    'Math','Science_and_technologye',
                ],
                wigth: [
                    25, //ไทย 
                    30, //อังกฤษ
                    25, //คณิต
                    20, //วิทเทค
                ],
            },
            {
                name: 'บริหารธุรกิจบัณฑิต_วิชาเอกการเงิน',
                Subject: [
                    'Thai','English',
                    'Math','Science_and_technologye',
                ],
                wigth: [
                    20, //ไทย 
                    35, //อังกฤษ
                    35, //คณิต
                    10, //วิทเทค
                ],
            },
            {
                name: 'การจัดการธุรกิจบริการและอีกเว้นท์',
                Subject: [
                    'Thai','English',
                    'Math','Science_and_technologye',
                ],
                wigth: [
                    25, //ไทย 
                    35, //อังกฤษ
                    25, //คณิต
                    15, //วิทเทค
                ],
            },
            {
                name: 'การจัดการธุรกิจบริการและอีกเว้นท์(กลุ่มนักเรียนภาษาไทยและภาษาอังกฤษ)',
                Subject: [
                    'Thai','English',
                    'Math','Science_and_technologye',
                ],
                wigth: [
                    20, //ไทย 
                    40, //อังกฤษ
                    25, //คณิต
                    15, //วิทเทค
                ],
            },
            {
                name: 'การจัดการนวัฒกรรมการท่องเที่ยว',
                Subject: [
                    'Thai','English',
                    'Math','Science_and_technologye',
                ],
                wigth: [
                    25, //ไทย 
                    40, //อังกฤษ
                    25, //คณิต
                    10, //วิทเทค
                ],
            },
            {
                name: 'การจัดการนวัฒกรรมการท่องเที่ยว(กลุ่มเรียนภาษาอังกฤษ)',
                Subject: [
                    'Thai','English',
                    'Math','Science_and_technologye',
                ],
                wigth: [
                    25, //ไทย 
                    40, //อังกฤษ
                    25, //คณิต
                    10, //วิทเทค
                ],
            },
            {
                name: 'บัญชีบัณฑิต',
                Subject: [
                    'Thai','English',
                    'Math','Science_and_technologye',
                ],
                wigth: [
                    10, //ไทย 
                    40, //อังกฤษ
                    40, //คณิต
                    10, //วิทเทค
                ],
            },
            {
                name: 'บริหารธุรกิจบัณฑิต_วิชาเอก_ผู้ประกอบการดิจิทัล',
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
            {
                name: 'บริหารธุรกิจบัณฑิต_วิชาเอก_เทคโนโลยีการตลาด',
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
        faculty: 'คณะนิติศาสตร์',
        Field_of_study: [
            {
                name: 'นิติศาสตร์',
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
        faculty: 'คณะศิลปกรรมศาสตร์',
        Field_of_study: [
            {
                name: 'ทัศนศิลป์',
                Subject: [
                    'Thai','English',
                    'Math','Science_and_technologye',
                    'ทดลองทางทัศนศิลป์','วาดเส้น',
                ],
                wigth: [
                    15, //ไทย 
                    10, //อังกฤษ
                    10, //คณิต
                    15, //วิทเทค
                    25, //ทดลองทางทัศนศิลป์
                    25, //วาดเส้น
                ],
            },
            {
                name: 'ออกแบบนิเทศศิลป์',
                Subject: [
                    'Thai','English',
                    'Math','Science_and_technologye',
                    'ออกแบบนิเทศศิลป์','วาดเส้นเพื่อการสื่อสาร',
                ],
                wigth: [
                    15, //Thai 
                    10, //English
                    10, //Math
                    15, //Science_and_technologye
                    25, //ออกแบบนิเทศศิลป์
                    25, //วาดเส้นเพื่อการสื่อสาร
                ],
            },
            {
                name: 'ดุริยางคศาสตร์บัณฑิต_กลุ่มวิชาดนตรีพื้นเมือง',
                Subject: [
                    'Thai','English',
                    'Math','Science_and_technologye',
                    'ดนตรี',
                ],
                wigth: [
                    10, //Thai 
                    10, //English
                    10, //Math
                    10, //Science_and_technologye
                    60, //ดนตรี
                ],
            },
            {
                name: 'ดุริยางคศาสตร์บัณฑิต_กลุ่มวิชาดนตรีไทย',
                Subject: [
                    'Thai','English',
                    'Math','Science_and_technologye',
                    'ดนตรี',
                ],
                wigth: [
                    10, //Thai 
                    10, //English
                    10, //Math
                    10, //Science_and_technologye
                    60, //ดนตรี
                ],
            },
            {
                name: 'ดุริยางคศาสตร์บัณฑิต_กลุ่มวิชาดนตรีตะวันตก',
                Subject: [
                    'Thai','English',
                    'Math','Science_and_technologye',
                    'ดนตรี',
                ],
                wigth: [
                    10, //Thai 
                    10, //English
                    10, //Math
                    10, //Science_and_technologye
                    60, //ดนตรี
                ],
            },
            {
                name: 'นาฎศิลป์',
                Subject: [
                    'Thai','English',
                    'Math','Science_and_technologye',
                    'นาฎศิลป์',
                ],
                wigth: [
                    15, //Thai 
                    10, //English
                    10, //Math
                    15, //Science_and_technologye
                    50, //นาฎศิลป์
                ],
            },
        ]
    },
    {
        faculty: 'วิทยาลัยนานาชาติ',
        Field_of_study: [
            {
                name: 'บริหารธุรกิจบัณฑิต(หลักสูตรนานาชาติ)_วิชาเอกการเป็นผู้ประกอบการระหว่างประเทศ',
                Subject: [
                    'English',
                    'Math',
                ],
                wigth: [
                    70, //English
                    30, //Math
                ],
            },
            {
                name: 'บริหารธุรกิจบัณฑิต(หลักสูตรนานาชาติ)_วิชาเอกธุรกิจสากล',
                Subject: [
                    'English',
                    'Math',
                ],
                wigth: [
                    70, //English
                    30, //Math
                ],
            },
            {
                name: 'บริหารธุรกิจบัณฑิต(หลักสูตรนานาชาติ)_วิชาเอกการตลาดระหว่างประเทศ',
                Subject: [
                    'English',
                    'Math',
                ],
                wigth: [
                    70, //English
                    30, //Math
                ],
            },
            {
                name: 'การระหว่างประเทศ(หลักสูตรนานาชาติ)',
                Subject: [
                    'English',
                ],
                wigth: [
                    100, //English
                ],
            },
            {
                name: 'การจัดการการท่องเที่ยว(นานาชาติ)',
                Subject: [
                    'English',
                    'Math',
                ],
                wigth: [
                    80, //English
                    20, //Math
                ],
            },
            {
                name: 'นิเทศศาสตรบัณฑิต_วิชาเอก_เทคโนโลยีสื่อสร้างสรรค์',
                Subject: [
                    'English',
                ],
                wigth: [
                    100, //English
                ],
            },
            {
                name: 'นิเทศศาสตรบัณฑิต_วิชาเอก_วารสารศาสตร์ระหว่างประเทศ',
                Subject: [
                    'English',
                ],
                wigth: [
                    100, //English
                ],
            },
        ]
    },
    {
        faculty: 'เศรษฐศาสตร์',
        Field_of_study: [
            {
                name: 'เศรษฐศาสตร์บัณฑิต',
                Subject: [
                    'English',
                    'Math','Science_and_technologye',
                ],
                wigth: [
                    50, //อังกฤษ
                    30, //คณิต
                    20, //วิทเทค
                ],
            },
            {
                name: 'เศรษฐศาสตร์บัณฑิต(หลักสูตรนานาชาติ)',
                Subject: [
                    'English',
                    'Math','Science_and_technologye',
                ],
                wigth: [
                    50, //อังกฤษ
                    30, //คณิต
                    20, //วิทเทค
                ],
            },
        ]
    },
    {
        faculty: 'วิทยาลัยการปกครองท้องถิ่น',
        Field_of_study: [
            {
                name: 'การจัดการปกครองและกิจการสาธารณะ_สมรรถนะด้านต่างๆ',
                Subject: [
                    'Thai','English',
                    'Science_and_technologye',
                    'สมรรถนะด้านต่างๆ',
                ],
                wigth: [
                    20, //ไทย 
                    35, //อังกฤษ
                    25, //วิทเทค
                    20, //สมรรถนะด้านต่างๆ
                ],
            },
            {
                name: 'การจัดการการเงินและการคลัง_สมรรถนะด้านต่างๆ',
                Subject: [
                    'Thai','English',
                    'Science_and_technologye',
                    'สมรรถนะด้านต่างๆ',
                ],
                wigth: [
                    20, //ไทย 
                    35, //อังกฤษ
                    25, //วิทเทค
                    20, //สมรรถนะด้านต่างๆ
                ],
            },
            {
                name: 'การจัดการเมืองและเทคโนโลยี_สมรรถนะด้านต่างๆ',
                Subject: [
                    'Thai','English',
                    'Science_and_technologye',
                    'สมรรถนะด้านต่างๆ',
                ],
                wigth: [
                    20, //ไทย 
                    35, //อังกฤษ
                    25, //วิทเทค
                    20, //สมรรถนะด้านต่างๆ
                ],
            },
        ]
    },
    {
        faculty: 'วิทยาลัยการคอมพิวเตอร์',
        Field_of_study: [
            {
                name: 'วิทยาการคอมพิวเตอร์',
                Subject: [
                    'Thai','English',
                    'Math','Science_and_technologye',
                    'Physic'
                ],
                wigth: [
                    5, //ไทย 
                    15, //อังกฤษ
                    25, //คณิต
                    40, //วิทเทค
                    15, //ฟิสิกส์
                ],
            },
            {
                name: 'วิทยาการคอมพิวเตอร์(โครงการพิเศษ)',
                Subject: [
                    'Thai','English',
                    'Math','Science_and_technologye',
                    'Physic'
                ],
                wigth: [
                    5, //ไทย 
                    15, //อังกฤษ
                    25, //คณิต
                    40, //วิทเทค
                    15, //ฟิสิกส์
                ],
            },
            {
                name: 'เทคโนโลยีสารสนเทศ',
                Subject: [
                    'Thai','English',
                    'Math','Science_and_technologye',
                    'Physic'
                ],
                wigth: [
                    10, //ไทย 
                    10, //อังกฤษ
                    20, //คณิต
                    40, //วิทเทค
                    20, //ฟิสิกส์
                ],
            },
            {
                name: 'เทคโนโลยีสารสนเทศ(โครงการพิเศษ)',
                Subject: [
                    'Thai','English',
                    'Math','Science_and_technologye',
                    'Physic'
                ],
                wigth: [
                    10, //ไทย 
                    10, //อังกฤษ
                    20, //คณิต
                    40, //วิทเทค
                    20, //ฟิสิกส์
                ],
            },
            {
                name: 'ภูมิสารสนเทศศาสตร์',
                Subject: [
                    'Thai','English',
                    'Math','Science_and_technologye',
                    'Physic'
                ],
                wigth: [
                    10, //ไทย 
                    10, //อังกฤษ
                    20, //คณิต
                    45, //วิทเทค
                    15, //ฟิสิกส์
                ],
            },
            {
                name: 'ภูมิสารสนเทศศาสตร์(โครงการพิเศษ)',
                Subject: [
                    'Thai','English',
                    'Math','Science_and_technologye',
                    'Physic'
                ],
                wigth: [
                    10, //ไทย 
                    10, //อังกฤษ
                    20, //คณิต
                    45, //วิทเทค
                    15, //ฟิสิกส์
                ],
            },
            {
                name: 'ปัญญาประดิษฐ์',
                Subject: [
                    'Thai','English',
                    'Math','Science_and_technologye',
                    'Physic'
                ],
                wigth: [
                    5, //ไทย 
                    15, //อังกฤษ
                    25, //คณิต
                    40, //วิทเทค
                    15, //ฟิสิกส์
                ],
            },
            {
                name: 'ความมั่นคงปลอดภัยไซเบอร์',
                Subject: [
                    'Thai','English',
                    'Math','Science_and_technologye',
                    'Physic'
                ],
                wigth: [
                    10, //ไทย 
                    10, //อังกฤษ
                    20, //คณิต
                    45, //วิทเทค
                    15, //ฟิสิกส์
                ],
            },
        ]
    },
    {
        faculty: 'คณะสหวิทยาการ',
        Field_of_study: [
            {
                name: 'บัญชีบัณฑิต',
                Subject: [
                    'Thai','English',
                    'Math','Science_and_technologye',
                ],
                wigth: [
                    20, //ไทย 
                    30, //อังกฤษ
                    30, //คณิต
                    20, //วิทเทค
                ],
            },
            {
                name: 'นวัตกรรมการท่องเที่ยวและการบริการ',
                Subject: [
                    'Thai','English',
                    'Math','Science_and_technologye',
                ],
                wigth: [
                    20, //ไทย 
                    40, //อังกฤษ
                    20, //คณิต
                    20, //วิทเทค
                ],
            },
            {
                name: 'นิติศาสตร์',
                Subject: [
                    'Thai','English',
                    'Math','Science_and_technologye',
                ],
                wigth: [
                    40, //ไทย 
                    40, //อังกฤษ
                    10, //คณิต
                    10, //วิทเทค
                ],
            },
            {
                name: 'เศรษฐศาสตร์ระหว่างประเทศ_นวัตกรรมและความยั่งยืน',
                Subject: [
                    'Thai','English',
                    'Math','Science_and_technologye',
                ],
                wigth: [
                    40, //ไทย 
                    30, //อังกฤษ
                    20, //คณิต
                    10, //วิทเทค
                ],
            },
            {
                name: 'รัฐประศาสนศาสตร์',
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
                name: 'ภาษาอังกฤษเพื่อการจัดการธุรกิจ',
                Subject: [
                    'Thai','English',
                    'Math','Science_and_technologye',
                ],
                wigth: [
                    30, //ไทย 
                    60, //อังกฤษ
                    5, //คณิต
                    5, //วิทเทค
                ],
            },
            {
                name: 'การสอนภาษาอังกฤษในฐานะภาษาต่างประเทศ',
                Subject: [
                    'Thai','English',
                    'Math','Science_and_technologye',
                ],
                wigth: [
                    20, //ไทย 
                    60, //อังกฤษ
                    10, //คณิต
                    10, //วิทเทค
                ],
            },
            {
                name: 'เทคโนโลยีการผลิตสัตว์น้ำ',
                Subject: [
                    'Thai','English',
                    'Math',
                    'Chemical',
                    'Biology',
                ],
                wigth: [
                    20, //ไทย 
                    10, //อังกฤษ
                    20, //คณิต
                    15, //เคมี
                    35 //ชีวะ
                ],
            },
            {
                name: 'เทคโนโลยีและนวัตกรรมอาหาร',
                Subject: [
                    'Thai','English',
                    'Math','Science_and_technologye',
                    'Chemical',
                    'Biology',
                ],
                wigth: [
                    10, //ไทย 
                    10, //อังกฤษ
                    20, //คณิต
                    20, //วิทเทค
                    20, //เคมี
                    20 //ชีวะ
                ],
            },
            {
                name: 'วิทยาศาสตร์การกีฬานวัตกรรมและสุขภาพ',
                Subject: [
                    'English',
                    'Math',
                    'Biology',
                ],
                wigth: [
                    35, //อังกฤษ
                    30, //คณิต
                    35 //ชีวะ
                ],
            },
            {
                name: 'วิทยาการคอมพิวเตอร์และสารสนเทศ_วิชาเอก_วิทยาการคอมพิวเตอร์และสารสนเทศ',
                Subject: [
                    'Thai','English',
                    'Math','Science_and_technologye',
                ],
                wigth: [
                    20, //ไทย 
                    25, //อังกฤษ
                    30, //คณิต
                    25, //วิทเทค
                ],
            },
            {
                name: 'วิทยาการคอมพิวเตอร์และสารสนเทศ_วิชาเอก_วิทยาการข้อมูลและปัญญาประดิษฐ์',
                Subject: [
                    'Thai','English',
                    'Math','Science_and_technologye',
                ],
                wigth: [
                    25, //ไทย 
                    25, //อังกฤษ
                    30, //คณิต
                    20, //วิทเทค
                ],
            },
            {
                name: 'บริหารธุรกิจบัณฑิต_วิชาเอก_การเงินธุรกิจ',
                Subject: [
                    'Thai','English',
                    'Math','Science_and_technologye',
                ],
                wigth: [
                    20, //ไทย 
                    40, //อังกฤษ
                    20, //คณิต
                    20, //วิทเทค
                ],
            },
            {
                name: 'บริหารธุรกิจบัณฑิต_วิชาเอก_ธุรกิจระหว่างประเทศ',
                Subject: [
                    'Thai','English',
                    'Math','Science_and_technologye',
                ],
                wigth: [
                    20, //ไทย 
                    40, //อังกฤษ
                    20, //คณิต
                    20, //วิทเทค
                ],
            },
            {
                name: 'วิทยาศาสตร์สิ่งแวดล้อมและทรัพยากรธรรมชาติ',
                Subject: [
                    'Thai','English',
                    'Math',
                    'Chemical',
                    'Biology',
                ],
                wigth: [
                    10, //ไทย 
                    15, //อังกฤษ
                    25, //คณิต
                    25, //เคมี
                    25 //ชีวะ
                ],
            },
        ]
    },
]