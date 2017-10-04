const express = require('express'),
router = express.Router(),
Project = require('../models/project');

// retrieve projects
router.get('/', (req, res) => {
const itemsPerPage = req.query.itemsperpage;
const currentPage = req.query.currentpage;
const featured = req.query.featured;
Project.getProjects(itemsPerPage, currentPage, featured, (err, docs) => {
  if (err) {
      res.json({ success: false, msg: 'Failed to get projects.', errmsg: err.message });
  } else if (docs) {
      res.json({ success: true, projects: docs });
  } else {
      res.json({ success: false, msg: 'Failed to get projects.' });
  }
});
});

// get projects by tag
router.get('/tag/:tag', (req, res) => {
const itemsPerPage = req.query.itemsperpage;
const currentPage = req.query.currentpage;
const tag = req.params.tag;
Project.getProjectsByTag(tag, itemsPerPage, currentPage, (err, docs) => {
  if (err) {
      res.json({ success: false, msg: 'Failed to get projects.', errmsg: err.message });
  } else if (docs) {
      res.json({ success: true, projects: docs });
  } else {
      res.json({ success: false, msg: 'Failed to get projects.' });
  }
});
});

// get project by id
router.get('/:id', (req, res) => {
const projectId = req.params.id;
Project.getProjectById(projectId, (err, doc) => {
  if (err) {
      res.json({ success: false, msg: 'Failed to find project.', errmsg: err.message });
  } else if (doc) {
      res.json({ success: true, project: doc });
  } else {
      res.json({ success: false, msg: 'Failed to find project.' });
  }
});
});

// export router
module.exports = router;
