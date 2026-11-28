#!/bin/sh
# Génère public/og.png (partage social, image d'article) et public/logo.png (logo Organization).
# Nécessite rsvg-convert (brew install librsvg).
cd "$(dirname "$0")/../.." || exit 1
rsvg-convert -w 1200 -h 630 scripts/images/og.svg -o public/og.png
rsvg-convert -w 512 -h 512 public/favicon.svg -o public/logo.png
