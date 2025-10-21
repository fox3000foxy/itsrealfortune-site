const express = require("express");
const https = require("https");
const fs = require("fs");

const acceptLanguageParser = require('accept-language-parser');
const stripHtmlComments = require('strip-html-comments');
const format = require('html-format');
const sanitizeHtml = require('sanitize-html');

const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const cookieParser = require("cookie-parser");
const bodyParser = require('body-parser');

const app = express();
const port = 4080;

// Enable trust proxy to handle 'X-Forwarded-For' header
app.set('trust proxy', true);

// const options = {
//   key: fs.readFileSync(__dirname + "/privkey.pem"),
//   cert: fs.readFileSync(__dirname + "/fullchain.pem"),
// };
// console.log("hey bg <3") // uwu owo I wanna add a favicon but I forgot how to do it >..>
// const server = https.createServer(app, options);

//Cache control 1 day for images
// app.use((req, res, next) => { 
//   if(req.url.endsWith(".jpg") || req.url.endsWith(".png") || req.url.endsWith(".gif") || req.url.endsWith(".svg")) {
//     res.setHeader("Cache-Control", "public, max-age=86400");
//   }
//   next();
// });

// Security configurations
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limite par IP
});

app.use((req, res, next) => {
  const language = req.query.lang;
  
  for(const lang of fs.readdirSync(__dirname+"/i18n")) {
      if(language == lang.split(".json")[0]) {
          req.targetLanguage = lang.split(".json")[0];
          next();
          return;
      }
  }
  const acceptedLanguages = acceptLanguageParser.parse(req.headers['accept-language']);
  // console.log(acceptedLanguages)
  const supportedLanguages = fs.readdirSync(__dirname+"/i18n").map(lang=>lang.split(".json")[0]); // Add your supported languages here
  const defaultLanguage = 'en';

  const targetLanguage = acceptedLanguages.find(lang => supportedLanguages.includes(lang.code))?.code || defaultLanguage;
  
  req.targetLanguage = targetLanguage;
  next();
  return;
});

// Apply limiter only to page and API endpoints
app.use((req, res, next) => {
  if (req.originalUrl.match(/\.(js|css|ico|png|jpg|jpeg|gif|svg|webp)$/) || req.originalUrl == "/top") {
      next();
  } else {
      limiter(req, res, next);
  }
});

app.use(helmet()); // Security
//app.use(fileUpload()); // File upload
app.use(express.json()); // JSON parser
app.use(bodyParser.urlencoded({ extended: true })); // URL parser
app.use(cookieParser());

function parseLanguage(string, language) {
  let parsedString = string;
  const i18n = require("./i18n/" + language + ".json");
  Object.keys(i18n).forEach(key => {
    parsedString = parsedString.replace("@" + key, i18n[key]);
  });
  return parsedString;
}

function applyComponents(string, lang) {
  let components = fs.readdirSync(__dirname + "/components").map(file => file.split(".")[0]);
  let finalString = string;
  components.forEach(component => {
    finalString = finalString.replace("{{" + component + "}}", fs.readFileSync(__dirname + "/components/" + component + ".html", "utf8"));
  });
  const strippedString = stripHtmlComments(finalString);
  return parseLanguage(strippedString, lang);
}

const knownPaths = [
  '/',
  '/about',
  '/services',
  '/contact'
];

// Define known dynamic paths patterns
const knownPatterns = [
];

// Define known API paths
const knownApiPaths = [
];

// Define known API patterns
const knownApiPatterns = [
];

require('express-middleware-honeypot')(app, {
  knownPaths,
  knownPatterns,
  knownApiPaths,
  knownApiPatterns
}); // Honeypot

app.get("/", (req, res) => {
  //res.send("Hello World!");
  res.send(applyComponents(fs.readFileSync(__dirname + "/public/index.html", "utf8"), req.targetLanguage));
});

app.get('/.well-known/acme-challenge/ggZO-KDYrqYPxoUr_LTENkvtq1LpuR6Nhpkbl1Mz1SU', (req, res) => {
  res.send("ggZO-KDYrqYPxoUr_LTENkvtq1LpuR6Nhpkbl1Mz1SU.mLbjXkuhxkXfCOM_yhkdPycrHeCC0fy3PZyuj5dS1oo");
});

app.use(express.static(__dirname+"/public", {dotfiles: "allow"}));


app.get('*', (req, res) => {
  if(fs.existsSync(__dirname + "/public/" + req.originalUrl + ".html")) {
    res.send(applyComponents(fs.readFileSync(__dirname + "/public/" + req.originalUrl + ".html", "utf8"), req.targetLanguage));
  } else {
    res.status(404).send(applyComponents(fs.readFileSync(__dirname + "/public/404.html", "utf8"), req.targetLanguage));
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
