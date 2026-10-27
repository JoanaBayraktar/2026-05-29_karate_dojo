# Gallery Dependencies

These libraries are served locally, without CDN requests or a runtime build step.

- GLightbox 3.3.1: https://github.com/biati-digital/glightbox
  Distribution JS and CSS, with the original license in `glightbox/LICENSE.md`.
- Flickr justified-layout 4.1.0: https://github.com/flickr/justified-layout
  Bundled as a browser IIFE exposing `justifiedLayout` with esbuild 0.28.2.
  Original license in `justified-layout/LICENSE`.

To rebuild the layout bundle after installing the pinned package versions:

```sh
esbuild node_modules/justified-layout/lib/index.js --bundle --minify --format=iife --global-name=justifiedLayout --outfile=prototype/vendor/justified-layout/justified-layout.min.js
```
