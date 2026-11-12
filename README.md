# Grace and Gladness

The home page for graceandgladness.com. One file, no build step.

## Files

- `index.html`: the whole page, with its styles and one small script.
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
   `<div class="sun"></div>` line with:

   ```html
   <video muted playsinline autoplay preload="auto" poster="assets/road-to-antioch.jpg">
     <source src="assets/road-to-antioch.mp4" type="video/mp4">
   </video>
   ```

   There is no `loop`, so it plays once and holds its last frame. A refresh
   plays it again. Phones that refuse to autoplay show the still painting.

## Still to fill in

Search `index.html` for `TODO`:

- The three Scripture Memory lines.
- Two or three sentences about who writes the site.
- A page for the Bible in Three Pictures, and a button that leads to it.
