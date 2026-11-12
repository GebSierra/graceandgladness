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
- `assets/road-to-antioch.webp` and `.jpg`: the opening painting.
- `CNAME`: tells GitHub Pages the site's address.
- `.nojekyll`: tells GitHub Pages to serve the files as they are.

## Publishing

1. In the repository on GitHub, open Settings, then Pages.
2. Under "Build and deployment", choose "Deploy from a branch", pick `main` and `/ (root)`.
3. At the domain registrar, point graceandgladness.com at GitHub Pages. GitHub's Pages documentation lists the records to add.
4. Back in Settings, Pages, confirm the custom domain and turn on "Enforce HTTPS".

## The opening animation

The opening plays once each time the page loads, then rests. Right now it is
the still painting with a coded sunrise: the picture brightens and a glow rises
behind the town.

When the animated version of the painting is ready:

1. Export it as `assets/road-to-antioch.mp4`. Keep it short, muted, the same
   shape as the painting, and under about 3 MB. It should end on a still frame.
2. In `index.html`, replace the `<picture>...</picture>` block and the
   `<div class="glow"></div>` line with:

   ```html
   <video muted playsinline autoplay preload="auto" poster="assets/road-to-antioch.jpg">
     <source src="assets/road-to-antioch.mp4" type="video/mp4">
   </video>
   ```

   There is no `loop`, so it plays once and holds its last frame. A refresh
   plays it again. Phones that refuse to autoplay show the still painting.

## The memory worlds

The three worlds are shown inside a frame, so visitors stay on this site.
Their address is set in one place, the `LTM_BASE` line at the top of
`assets/ltm.js`. When the worlds move to their own repository, change that
line, for example to `https://gebsierra.github.io/ltm/`.

## Still to fill in

Search the pages for `TODO`:

- `about/index.html`: two or three sentences about who writes the site.
- The full lessons for the Bible in Three Pictures.
