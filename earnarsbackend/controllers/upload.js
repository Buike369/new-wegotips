const express = require("express");
const { db } = require("../db.js")



  

const uploadFile =(req,res)=>{
    const file = req.file;
    // console.log(file)
    const filePath = `/uploads/${file.filename}`;

    // Insert file path into MySQL database
    const sql = 'INSERT INTO files (files_path) VALUES (?)';
    db.query(sql, [filePath], (err, result) => {
        if (err) throw err;
        res.json({ filePath });
    });
    
}

const getFile =(req,res)=>{
    const sql = 'SELECT * FROM files';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
}

module.exports = { uploadFile, getFile }