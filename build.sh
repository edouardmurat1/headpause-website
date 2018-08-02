#!/bin/bash

# combine css and js files
#cat vendor/bootstrap/css/bootstrap.css css/agency.css vendor/font-awesome/css/font-awesome.css css/fonts.css > css/all.css
#cat js/vendors.min.js js/agency.js > js/all.js

# minify css and js
minify -o css/header.min.css css/header.css
minify -o css/footer.min.css css/footer.css
minify -o js/all.min.js js/all.js
