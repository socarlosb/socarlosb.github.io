# socarlosb.github.io

My personal one-page site — plain static HTML and CSS, no framework, no build step.

- [index.html](index.html) — the whole site (styles inlined, near-zero JS)
- `assets/` — favicon and social (Open Graph) image
- `public/` — extra static content, merged into the site root on deploy

Deployed to GitHub Pages via [.github/workflows/deploy.yml](.github/workflows/deploy.yml)
on every push to `main`.
