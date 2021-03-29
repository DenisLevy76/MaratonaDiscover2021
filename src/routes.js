const express = require('express')
const router = express.Router();

const basePath = __dirname + '/views';

router.get('/', (req, res) => {
  return res.sendFile(basePath + '/index.html')
});

router.get('/job', (req, res) => {
  return res.sendFile(basePath + '/job.html')
});

router.get('/profile', (req, res) => {
  return res.sendFile(basePath + '/profile.html')
});

router.get('/job/edit', (req, res) => {
  return res.sendFile(basePath + '/job-edit.html')
});

module.exports =  router;