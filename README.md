# GlassOS-Website

The download site for [GlassOS](https://github.com/Caleb-Goodnite/GlassOS), in Next.js. One page: what GlassOS is, real screenshots, what's
different about it, where the design comes from, and the downloads.

```sh
npm install
npm run dev      # http://localhost:3000
npm run build    # static build; every page is prerendered
```

## After a new release

1. Change `VERSION` in `app/release.ts`, and the two ISO sizes next to it.
2. Retake the screenshots in `public/shots/` (1920x1080 JPEGs) if the desktop changed. They're
   taken in the test VM, from the GlassOS repo: `scripts/run-qemu.sh arm64 --headless --res 1920x1080`, then
   `scripts/vmctl.py arm64 shot FILE`.

Design decisions and their reasons are at the top of `app/globals.css`. The page follows GlassOS's
`DESIGN.md` and the anti-slop rules: no invented numbers, quotes or features, and every
link goes somewhere real.
