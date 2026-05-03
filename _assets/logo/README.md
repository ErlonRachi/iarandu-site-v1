# Iarandu — Logo files (v1)

## Files

- **`iarandu-logo.svg`** — full logo (mark + wordmark + period). Uses `currentColor` for mark strokes and wordmark fill. Urucum accents are hardcoded `#C25E3A`. Inline this in HTML/Astro and set CSS `color:` on the parent — `color: var(--verde-musgo)` on light backgrounds, `color: var(--branco-papel)` on dark.
- **`iarandu-mark.svg`** — icon only (orbits + nucleus + planet). For favicon, footer, social avatars, deck slides where the wordmark would compete.

## Calibrations applied (v1)

- ✅ **Wordmark in Fraunces lowercase** (variable axes: `opsz` 144, `SOFT` 30, weight 700). Uses dotless `ı` so the tittle can be a separate urucum element.
- ✅ **Urucum period** after `iarandu` rendered as a circle.
- ✅ **Orbits via `currentColor`** — render in verde-musgo on light / branco-papel on dark.
- ✅ **Consistent stroke** (3px, all three ellipses).
- ✅ **Central nucleus dot** (verde-musgo / currentColor).

## Calibration debt — visual tuning needed when site loads

The position of the **urucum tittle** over the dotless `ı` and the **urucum period** is currently approximate (calculated from font metrics, not measured). When the page loads with Fraunces actually rendered, **eyeball both circles and adjust**:

- Tittle (currently `cx="240" cy="58" r="10"`) should sit centered over the `ı` stem at the optical-tittle height of Fraunces at 130px / opsz 144 / SOFT 30.
- Period (currently `cx="615" cy="145" r="10"`) should sit on the baseline immediately after the `u`, with optical breath equivalent to Fraunces' own period — likely needs nudging once we see the rendered word width.

A 5–10 minute pass with the page open + browser DevTools will land it.

## Original WIP files

`Iarandu_wip_logo.jpg` and `Iarandu_wip_logo2.jpg` (in `v1/`) are the pre-calibration reference — keep for archive, do not ship.
