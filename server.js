const express = require('express');

const sequelize = require('./config/connection');

sequelize.sync({ force: true });

console.log("Node is working");