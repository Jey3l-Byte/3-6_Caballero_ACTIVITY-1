const express = require('express');
const path = require('path');
const conn = require('./conn');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join('views'));
app.use(express.static(path.join('public')));

app.get('/', (req, res) => {
    res.render('index');
});
app.post('/register', (req, res) => {

    const fn = req.body.fn;
    const ln = req.body.ln;
    const age = req.body.age;
    const gender = req.body.gender;
    const birthday = req.body.birthday;
    const address = req.body.address;
    const civilStatus = req.body.civilStatus;
    const contactnumber = req.body.contactnumber;
    const elementaryschool = req.body.elementaryschool;
    const highschool = req.body.highschool;
    const college = req.body.college;
    const course = req.body.course;
    const yearlevel = req.body.yearlevel;

    const father = req.body.father;
    const mother = req.body.mother;
    const siblings = req.body.siblings;

    const hobbies = req.body.hobbies;
    const skills = req.body.skills;

    console.log(fn);
    console.log(ln);
    console.log(age);
    console.log(gender);
    console.log(birthday);
    console.log(address);
    console.log(civilStatus);
    console.log(contactnumber);
    console.log(elementaryschool);
    console.log(highschool);
    console.log(college);
    console.log(course);
    console.log(yearlevel);
    console.log(father);
    console.log(mother);
    console.log(siblings);
    console.log(hobbies);
    console.log(skills);

    const insert = `INSERT INTO biodataform VALUES ('0','${fn}','${ln}','${age}','${gender}','${birthday}',' ${address}','${civilStatus}','${contactnumber}','${elementaryschool}','${highschool}','${college}','${course}','${yearlevel}','${father}','${mother}','${siblings}','${hobbies}','${skills}')`;

    conn.query(insert, (err) => {
        if (err) {
            console.error('Insert failed:', err.message);
            return res.status(500).send('Database insert failed. Please check your MySQL setup.');
        }

        res.render('biodata', {
            biodata: {
                fn,
                ln,
                age,
                gender,
                birthday,
                address,
                civilStatus,
                contactnumber,
                elementaryschool,
                highschool,
                college,
                course,
                yearlevel,
                father,
                mother,
                siblings,
                hobbies,
                skills
            }
        });
    });
});

app.listen(9000, () => {
    console.log('Server running at http://localhost:9000');
});