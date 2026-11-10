# FoodCare

FoodCare is a static website for a student innovation proposal submitted to the SOF-Techfest, IIT Bombay Innovation Challenge. It presents a low-cost neighbourhood collection point for routing unsold fruit and vegetable market produce through three proposed routes: **Rescue**, **Transform**, and **Regenerate**.

> FoodCare is a proposal, not an operating service. The route demo is illustrative only and does not assess or certify food safety.

## Live site

When GitHub Pages is enabled for this repository, the site is published at:

`https://byte-coder01.github.io/FoodCare/`

## Pages

| Page | Purpose |
| --- | --- |
| `index.html` | Homepage: FoodCare concept, problem, three routes, pilot summary, proposed business model, impact illustration, and sources. |
| `how-it-works.html` | Step-by-step service flow. |
| `demo.html` | Interactive illustrative batch-routing demonstration. |
| `pilot.html` | Low-cost pilot plan and suggested measurements. |
| `contact.html` | Feedback form powered by FormSubmit. |
| `thank-you.html` | Confirmation page after a feedback submission. |

## Project files

| File | Purpose |
| --- | --- |
| `styles.css` | Base site styles and responsive design. |
| `enhanced.css` | Visual polish: color, cards, depth, and motion. |
| `responsive.css` | Layout safety rules for desktop, tablet, and mobile. |
| `ux.css` | Fixed frosted day-mode navigation. |
| `visibility-fix.css` | Contrast and hero-caption readability refinements. |
| `pages.css` | Styles used by the standalone detail pages. |
| `script.js` | Mobile navigation and the illustrative route-demo interaction. |

## Run locally

No installation, build step, server-side code, database, API key, or framework is required.

Open `index.html` in a browser to view the site. For a more reliable local preview of all pages and form redirects, serve this folder with any static-file server. For example, if Python is available:

```bash
python -m http.server 8080
```

Then open `http://localhost:8080/`.

## Set up the feedback form

The feedback form is configured for [FormSubmit](https://formsubmit.co/).

1. Open `contact.html`.
2. Find `YOUR_EMAIL_ADDRESS` in the form `action`.
3. Replace it with the inbox that should receive submissions, for example:

   ```html
   action="https://formsubmit.co/your-email@example.com"
   ```

4. Deploy the site and submit one test message.
5. FormSubmit sends a one-time activation email to that inbox. Confirm the activation link.
6. Submit one more test message and confirm that it arrives and redirects to `thank-you.html`.

Do not publish with the placeholder email address still present.

## Publish with GitHub Pages

1. Create or open the GitHub repository named `FoodCare`.
2. Upload every file in this project folder to the repository root.
3. Commit and push the changes to the `main` branch.
4. Open the repository’s **Settings** → **Pages**.
5. Under **Build and deployment**, select **Deploy from a branch**.
6. Select the `main` branch and the `/ (root)` folder, then click **Save**.
7. Wait for GitHub to finish publishing, then open the live URL.

## Pre-launch checklist

- [ ] The homepage opens at `/FoodCare/`.
- [ ] Home, How it works, Try the demo, Pilot plan, and Share feedback links work.
- [ ] The fixed navigation stays readable while scrolling.
- [ ] The site works on a phone, tablet, and desktop browser.
- [ ] All three demo choices show an illustrative route suggestion.
- [ ] Submitting the demo without selecting a batch displays its validation message.
- [ ] The official Government of India source link opens correctly.
- [ ] The FormSubmit recipient address has been replaced and activated.
- [ ] No page claims that FoodCare is operating, partnered, endorsed, or has measured real impact.

## Content and safety notes

- A trained person must make food-suitability decisions under applicable hygiene and food-safety procedures.
- The interactive demo and dashboard metrics are illustrative, not measured results.
- The post-harvest-loss figures are commodity-specific NABCONS estimates cited from the official Government of India PIB source; they are not one universal average for all produce.
- This project does not imply endorsement or operation by IIT Bombay, SOF, government bodies, vendors, NGOs, or processors.

## License

Add a license before public reuse if you would like to define how others may copy or adapt this project.

