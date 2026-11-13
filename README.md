# Grace and Gladness

The site for graceandgladness.com. Plain HTML and CSS, no build step.

## Pages

- `index.html`: the opening scene. One screen, no scrolling. Links lead to the pages below.
- `bible/`: The Bible in Three Pictures.
- `memory/`: Scripture Memory, with a framed page for each memory world in `memory/colossians/`, `memory/james/` and `memory/tabernacle/`.
- `gospel/`: The Gospel, with the tract at www.hegavehis.life shown in a frame.
- `about/`: Why Grace and Gladness.

## Files

- `assets/site.css`: the shared look for every page.
- `assets/ltm.js`: where the memory worlds live (see below).
- `assets/road-watercolor.jpg`: the painting, also used in the page banners.
- `CNAME`: tells GitHub Pages the site's address.
- `.nojekyll`: tells GitHub Pages to serve the files as they are.

## Publishing

1. In the repository on GitHub, open Settings, then Pages.
2. Under "Build and deployment", choose "Deploy from a branch", pick `main` and `/ (root)`.
3. At the domain registrar, point graceandgladness.com at GitHub Pages. GitHub's Pages documentation lists the records to add.
4. Back in Settings, Pages, confirm the custom domain and turn on "Enforce HTTPS".

## The opening animation

The opening is `assets/road-watercolor.mp4`: four seconds, muted, no loop.
It plays once on each page load and holds its last frame. A refresh plays it
again. Visitors who ask their device to reduce motion see the still
`assets/road-watercolor-poster.jpg` instead, and so do phones that refuse to
autoplay.

It was made from the watercolour `assets/road-watercolor.jpg` (its sky extended to 16:9 in
`assets/road-watercolor-169.jpg`) with Kling 3.0 Standard through OpenRouter (4 seconds, 720p, no audio,
$0.42), then scaled to 1080p with ffmpeg.

## The memory worlds

The three worlds are shown inside a frame, so visitors stay on this site.
Their address is set in one place, the `LTM_BASE` line at the top of
`assets/ltm.js`. When the worlds move to their own repository, change that
line, for example to `https://gebsierra.github.io/ltm/`.

## Still to fill in

Search the pages for `TODO`:

- `about/index.html`: two or three sentences about who writes the site.
- The full lessons for the Bible in Three Pictures.
