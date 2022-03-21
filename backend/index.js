const fs = require("fs");
const express = require("express");
const Api = require('./Api');
const sqlite3 = require('sqlite3');

Init_Db();
Setup_Server();

function Setup_Server()
{
  // setup express
  // serve static content from "frontend" folder
  // add endpoint to call Api.Get_Popular_Products
}

function Init_Db()
{
  // create "memory" instance of sqlite db here

  let sql = fs.readFileSync('backend/sql/create-tables.sql', 'utf8');
  // execute sql to create tables here

  sql = fs.readFileSync('backend/sql/load-data.sql', 'utf8');
  // execute sql to load data here
}
