#!/bin/bash
npm run build && rm -r ../static && cp -r build/favicon.ico build/index.html build/static* ../. && git add ../static/js/*
