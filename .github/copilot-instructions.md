# Copilot Instructions for rcrtss.github.io (al-folio)

This repository is a customized fork of the [al-folio Jekyll theme](https://github.com/alshedivat/al-folio), designed for academic personal sites, blogs, and portfolios. It is built with Jekyll and uses Liquid templates, YAML configuration, and Markdown content files.

## Architecture Overview
- **Jekyll-based static site**: Content is organized in folders like `_pages`, `_posts`, `_projects`, `_news`, `_bibliography`, and `_data`.
- **Configuration**: Main settings are in `_config.yml`. Per-page settings use YAML front matter.
- **Templates**: Layouts and includes are in `_layouts/` and `_includes/` (Liquid syntax).
- **Collections**: Custom content types (e.g., news, projects) are defined in `_config.yml` and have their own folders.
- **Data files**: Site-wide data (e.g., CV, coauthors, repositories) is stored in `_data/*.yml`.
- **Assets**: Images, PDFs, and other static files are in `assets/`.

## Developer Workflows
- **Build locally**: Use `bundle exec jekyll serve` to build and preview the site. Docker is supported via `docker-compose.yml` and `Dockerfile` for reproducible builds.
- **Content editing**: Add/edit Markdown files in `_posts/`, `_pages/`, etc. Use YAML front matter for metadata.
- **Custom layouts**: Extend or modify Liquid templates in `_layouts/` and `_includes/`.
- **CV generation**: Supports both JSON (`assets/json/resume.json`) and YAML (`_data/cv.yml`) formats. Fallback logic is in the templates.
- **Publications**: Edit BibTeX files in `_bibliography/` and configure display in `_config.yml`.
- **Theming**: Change colors in `_sass/_themes.scss` and `_sass/_variables.scss`.

## Project-Specific Conventions
- **Distill-style posts**: Use `<d-*>` tags in Markdown for interactive, visually rich blog posts (see example posts in `_drafts/` and `_posts/`).
- **Math and code**: MathJax and code highlighting are enabled by default. Use standard Markdown and LaTeX syntax.
- **Social previews**: Set `serve_og_meta: true` in `_config.yml` and configure `og_image` per page or site-wide.
- **Related posts**: Controlled via `related_blog_posts` in `_config.yml` and per-post front matter.
- **GitHub stats**: Configure in `_data/repositories.yml` and use provided Liquid includes.

## Quality Checks & CI
- **Prettier**: Enforced via GitHub Actions for code formatting.
- **Lychee**: Checks for broken links.
- **Axe**: Manual accessibility testing (not automated).

## Key Files & Directories
- `_config.yml`: Main site configuration
- `_pages/`, `_posts/`, `_projects/`, `_news/`: Content folders
- `_layouts/`, `_includes/`: Liquid templates
- `_data/`: Site-wide YAML data
- `_bibliography/`: BibTeX files for publications
- `assets/`: Static files (images, PDFs, etc.)
- `Dockerfile`, `docker-compose.yml`: Containerized build setup
- `README.md`, `FAQ.md`, `INSTALL.md`, `CUSTOMIZE.md`: Documentation

## Example: Adding a New Blog Post
1. Create a Markdown file in `_posts/` with YAML front matter (e.g., title, date, tags).
2. Use Markdown and Liquid tags for formatting. Math and code are supported out of the box.
3. Preview locally with `bundle exec jekyll serve` or via Docker.

## Example: Customizing the CV
- Edit `_data/cv.yml` for YAML-based CV, or `assets/json/resume.json` for JSON-based CV.
- The template will auto-detect and use the available format.

## Example: Updating Theme Colors
- Edit `_sass/_themes.scss` and `_sass/_variables.scss` to change color variables.
- Rebuild the site to see changes.

---
For more details, see the documentation files (`README.md`, `FAQ.md`, `INSTALL.md`, `CUSTOMIZE.md`).

If any section is unclear or missing, please provide feedback to improve these instructions.