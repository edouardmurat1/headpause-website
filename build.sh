#!/bin/bash

# combine css and js files
# head css
cat vendor/bootstrap/css/bootstrap.css css/header.css > css/head.css

cat vendor/jquery/jquery.js vendor/bootstrap/js/bootstrap.bundle.js vendor/jquery-lazy/jquery.lazy.min.js vendor/jquery-easing/jquery.easing.js vendor/jquery-waypoints/jquery.waypoints.js vendor/snapsvg/snap.svg.js js/main.js js/entreprise.js > js/all.js
# cat vendor/bootstrap/js/bootstrap.bundle.js vendor/jquery-lazy/jquery.lazy.min.js vendor/jquery-easing/jquery.easing.js vendor/jquery-waypoints/jquery.waypoints.js vendor/snapsvg/snap.svg.js js/main.js js/entreprise.js > js/all.js

# minify css and js
minify -o css/head.min.css css/head.css
minify -o css/footer.min.css css/footer.css

minify -o vendor/odometer/odometer.min.js vendor/odometer/odometer.js
minify -o js/all.min.js js/all.js
