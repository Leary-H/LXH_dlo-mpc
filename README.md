# DLO-MPC project page

Static GitHub Pages site for the dual-arm DLO-MPC project.

## Local preview

From this directory, run:

```bash
python -m http.server 8000
```

Then open <http://localhost:8000>.

## Add the videos

Place the exported MP4 files at:

```text
assets/data-collection.mp4
assets/mpc-control.mp4
```

Optional 16:9 poster images can be added as:

```text
assets/data-poster.jpg
assets/mpc-poster.jpg
```

For broad browser support, export MP4 video using H.264 video and AAC audio.

## Publish

Commit and push the files to the `main` branch, then enable GitHub Pages in
the repository settings with **Deploy from a branch**, branch `main`, folder
`/ (root)`.
