const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "view", "index.html"));
});

router.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "view", "html", "contact.html"));
});
router.get("/service", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "view", "html", "service.html"));
});
router.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "view", "html", "about.html"));
});
router.get("/feature", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "view", "html", "feature.html"));
});
router.get("/team", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "view", "html", "team.html"));
});
router.get("/404", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "view", "html", "404.html"));
});
router.get("/testimonial", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "view", "html", "testimonial.html"));
});
router.get("/appointment", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "view", "html", "appointment.html"));
});
console.log(__dirname);
module.exports = router;
