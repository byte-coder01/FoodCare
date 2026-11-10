# FoodCare GitHub Pages Demo

A static website for the FoodCare student innovation proposal: a low-cost, shared neighbourhood point for routing unsold market produce to Rescue, Transform or Regenerate.

## Files

- `index.html` - homepage and interactive routing demo
- `how-it-works.html` - detailed service flow
- `demo.html` - interactive, illustrative batch-routing demo
- `pilot.html` - low-cost pilot plan and scorecard
- `contact.html` - feedback form
- `thank-you.html` - post-submission page
- `styles.css` - responsive visual design
- `script.js` - batch-routing demo and mobile navigation

No build step, server, database, API key or secret is required.

## Set up the feedback form

The contact form uses [FormSubmit](https://formsubmit.co/). Before publishing, open `contact.html` and replace `YOUR_EMAIL_ADDRESS` in the form action with the inbox that should receive feedback. FormSubmit sends a one-time activation email to that inbox on the first submission; open it and confirm activation. After activation, the form redirects visitors to `thank-you.html` after successful submission.

## Publish with GitHub Pages

1. Create a GitHub repository named `FoodCare` (or open the existing one).
2. Upload `index.html`, `styles.css`, `script.js` and this `README.md` to the repository root.
3. In the repository, open **Settings** → **Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and the `/ (root)` folder, then click **Save**.
6. Wait for GitHub Pages to publish. The URL for a repository named `FoodCare` will normally be `https://byte-coder01.github.io/FoodCare/`.

## Before sharing the live site

- Open the published URL on a phone and desktop browser.
- Use the “Explore the demo” button and test all three sample batches.
- Submit the demo with no option selected and check the validation message.
- Confirm the source link opens the official Government of India PIB page.
- Replace the example feedback email address in `index.html` if a real contact address is available.

## Content note

The routing interaction and dashboard values are clearly illustrative. FoodCare is presented as a proposal; it does not claim operating partners, revenue, food-safety certification or verified impact.
