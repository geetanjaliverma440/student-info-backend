import express from 'express';
import mysql2 from 'mysql2';
import cors from 'cors';
import dotenv from "dotenv";

dotenv.config();

let app = express();

app.use(cors());
app.use(express.json());


const con = mysql2.createPool({
  host: process.env.MYSQLHOST,
  port: Number(process.env.MYSQLPORT),
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  database: process.env.MYSQLDATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  ssl: {
    rejectUnauthorized: false,
  },
});

app.get("/reg",(req,res)=>{
    let {x,y,z,q}= req.query;
    let sql="insert into registration values(?,?,?,?) ";
    con.query(sql,[x,y,z,q],(err,result)=>{
        if (err) {
    console.error(err);
    return res.status(500).json({ error: err.message });
}
        res.json("Saved succesfully");
})
});
app.get("/login",(req,res)=>{
    let {x,y}=req.query;
    let sql="select * from registration where id=? and password=? ";
    con.query(sql,[x,y],(err,result)=>{
        if (err) {
    console.error(err);
    return res.status(500).json({ error: err.message });
}
        
        if(result.length>0)
        {
            res.json("valid");
        }else{
            res.json("invalid");
        }
})
});

app.get("/student",(req,res)=>{
    let {x,y,z,q}= req.query;
    let sql="insert into student values(?,?,?,?) ";
    con.query(sql,[x,y,z,q],(err,result)=>{
       if (err) {
    console.error(err);
    return res.status(500).json({ error: err.message });
}
        res.json("Saved succesfully");
})
});

app.get("/detail",(req,res)=>{
    let {a}=req.query;
    let sql="select * from student where id =?";
    con.query(sql,[a],(err,result)=>{
        if (err) {
    console.error(err);
    return res.status(500).json({ error: err.message });
}
        res.json(result);
    })

});
app.get("/attendance",(req,res)=>{
    let {a,b,c,d,e,f}= req.query;
    let sql="insert into attendance values(?,?,?,?,?,?) ";
    con.query(sql,[a,b,c,d,e,f],(err,result)=>{
       if (err) {
    console.error(err);
    return res.status(500).json({ error: err.message });
}
        res.json("Saved succesfully");
})
});

app.get("/viewattendance",(req,res)=>{
    let {a}=req.query;
    let sql="select * from attendance where id =?";
    con.query(sql,[a],(err,result)=>{
        if (err) {
    console.error(err);
    return res.status(500).json({ error: err.message });
}
        res.json(result);
    })

});



con.getConnection((err, connection) => {
    if (err) {
        console.log("Database connection failed:");
        console.log(err);
    } else {
        console.log("Database connected");
        connection.release(); // Return connection to the pool
    }
});
app.post("/addmarks", (req, res) => {

    let {
        id,
        subject1,
        marks1,
        subject2,
        marks2,
        subject3,
        marks3,
        subject4,
        marks4
    } = req.body;


    let sql = `
        INSERT INTO marks
        (id, subject1, marks1, subject2, marks2, subject3, marks3, subject4, marks4)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;


    con.query(
        sql,
        [
            id,
            subject1,
            marks1,
            subject2,
            marks2,
            subject3,
            marks3,
            subject4,
            marks4
        ],
        (err, result) => {

            if (err) {
                console.log(err);
                return res.status(500).json({
                    message: "Data not saved"
                });
            }

            res.json({
                message: "Marks saved successfully"
            });
        }
    );
});


app.get("/viewmarks",(req,res)=>{
    let {a}=req.query;
    let sql="select * from marks where id =?";
    con.query(sql,[a],(err,result)=>{
        if (err) throw err;
        res.json(result);
    })

});
const PORT = process.env.PORT || 8899;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});