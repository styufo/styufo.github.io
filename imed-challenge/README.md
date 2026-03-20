# iMED Challenge GitHub Pages Site

This is a static GitHub Pages-ready website for the iMED Challenge, styled to closely follow the structure and academic presentation of the STIR Challenge website while using iMED-specific content.

## Files

- `index.html`: overview, motivation, tasks, timeline, organizers, resources
- `data.html`: dataset, splits, modalities, annotations, release plan
- `evaluation.html`: metrics, ranking, prizes, reporting
- `participation.html`: participation rules, submissions, checklist, FAQ
- `assets/site.css`: shared styling
- `assets/site.js`: small mobile navigation toggle
- `images/`: custom SVG logo and hero illustration

## Deploy To GitHub Pages

1. Create a new GitHub repository, for example `imed-challenge.github.io` or `imed-challenge-site`.
2. Copy the contents of this directory into the repository root.
3. Push to GitHub.
4. In repository settings, enable GitHub Pages:
   - If the repository is named `username.github.io`, it will publish from the root.
   - Otherwise, publish from the `main` branch root or `/docs`, depending on your setup.
5. If you later want to use a custom domain, add a `CNAME` file with the domain name.

## Notes

- Current dates and some external links are based on the working proposal materials and may need final confirmation.
- If you want, the next iteration can add:
  - a custom domain `CNAME`
  - real MICCAI / EndoVis / sponsor logos
  - an application form link
  - a Synapse submission link once it is live
