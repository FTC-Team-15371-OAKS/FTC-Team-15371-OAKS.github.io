# OAKS Robotics — FTC Team 15371

Website for the Norfolk Collegiate OAKS, FIRST Tech Challenge Team 15371, Norfolk, Virginia.

**Live site:** https://ftc-team-15371-oaks.github.io/

## Pages

| Page | File | What it is |
| --- | --- | --- |
| Home | `index.html` | Hero, team overview, links to code/CAD/team/gallery |
| CAD Library | `cad.html` | CAD file cards linked to the `cad/` folders |
| Team | `team.html` | Roster and team philosophy |
| Gallery | `gallery.html` | Filterable photo grid with a lightbox |
| Not found | `404.html` | Custom GitHub Pages 404 |

## Adding CAD files

Upload files to the matching folder in [`cad/`](cad/):

- `cad/full-robot/` — complete assembly and STEP exports
- `cad/drivetrain/` — chassis, gearboxes, wheel mounts
- `cad/manipulator/` — intake and scoring mechanism
- `cad/electronics/` — control hub, battery, wiring
- `cad/prototypes/` — test pieces and early concepts
- `cad/custom-parts/` — printable brackets, plates, and mounts

Then update the matching card link in `cad.html` from the folder URL to the file URL. See [`cad/README.md`](cad/README.md) for naming conventions.

## Adding team members

The roster in `team.html` currently uses placeholder names. Replace each `Student Name` / `Mentor Name`, the role, the bio, and the two-letter initials inside `.member-avatar` with your real roster.

## Adding photos

The gallery uses branded SVG placeholders in `assets/img/`. To use real photos:

1. Put photos in `assets/img/gallery/` (create the folder).
2. Replace the `src`, `data-full`, `alt`, and `data-caption` values in `gallery.html`.
3. Keep the `data-category` values (`build`, `competition`, `team`, `outreach`, `robot`, `travel`) so the filters keep working.
4. Delete the old SVG placeholders once they are no longer referenced.

The home page preview strip also references three of the gallery images in `index.html`.

## Local preview

No build step is required. Open `index.html` in a browser, or run a local server:

```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000.

## Deploying

This repo is already named `FTC-Team-15371-OAKS.github.io`, so GitHub Pages can serve it from the `main` branch:

1. Push to `main`.
2. In the repo settings, go to **Pages** and set the source to **Deploy from a branch** → `main` → `/ (root)`.
3. The site will be available at https://ftc-team-15371-oaks.github.io/.

## Built with

Plain HTML, CSS, and JavaScript. Fonts are loaded from Google Fonts. No frameworks or build tools.
