# Beginner’s Guide to This Portfolio

This guide explains the portfolio, the important code ideas, and how to publish it. Read it before showing the work professionally. A client or interviewer may ask you to explain or change any part of it.

## Folder structure

```text
junior-developer-portfolio/
├── index.html                  Portfolio homepage
├── assets/                     Homepage CSS and JavaScript
├── case-studies/               Detailed project stories
├── projects/
│   ├── bus-station/            Departure finder
│   └── cafe-operations/        Café workflow app
├── LEARNING-GUIDE.md           This guide
└── README.md                   Project overview
```

Each site starts with `index.html`. HTML defines content, CSS controls appearance, and JavaScript adds behavior.

## Core ideas to learn

### HTML

Semantic HTML explains what content means. `<nav>` is navigation, `<main>` is the unique page content, `<section>` groups related content, `<button>` performs an action, and `<a>` navigates somewhere. Good structure helps screen readers, search engines, browsers, and other developers.

### CSS

These projects use reusable color variables, Flexbox for alignment, Grid for page composition, media queries for phones, and `clamp()` for responsive type. Open browser developer tools, select an element, and temporarily change its CSS—this is one of the fastest ways to learn.

### JavaScript

Important concepts include variables, arrays, objects, functions, events, DOM updates, and array methods such as `filter`, `map`, `find`, and `reduce`. The café app also uses `localStorage`, which keeps small amounts of data in the browser after refresh.

## Bus-station project

Open `projects/bus-station/app.js`.

The `departures` array is the data source. Each object represents one departure. `render()` reads the search and selected period, filters the array, and converts the results into table rows.

The `translations` object stores Serbian and English text. `setLanguage()` changes labeled elements, placeholders, dates, and dynamic results without reloading the page.

Exercises:

1. Add a demonstration departure.
2. Add a late-night filter.
3. Add an estimated-arrival column.
4. Change the theme colors.
5. Make the notice dismissible.

## Café project

Open `projects/cafe-operations/app.js`.

`defaultProducts` defines the original menu. The app tracks products, orders, the cart, language, service type, and order sequence.

The main workflow is:

1. A product click calls `addToCart()`.
2. `renderCart()` recalculates quantities and totals.
3. `sendOrder()` creates an order.
4. `renderKitchen()` groups orders by status.
5. `advanceOrder()` moves an order forward.
6. `renderReports()` derives statistics from order history.
7. `save()` stores important data in `localStorage`.

Exercises:

1. Add order notes such as “no sugar.”
2. Add a validated discount.
3. Confirm before deleting a menu item.
4. Add completed-order history.
5. Later, replace browser storage with a real backend.

## Talk about the projects honestly

Do not claim to understand work you have not studied. A truthful explanation is:

> I used an AI coding assistant as a development partner to accelerate the first implementation. I defined the direction, studied the code, tested the workflows, and continued changing it until I could explain the data model and interface decisions.

Before an interview, be able to explain:

- What problem the project solves
- Who uses it
- How its data is represented
- What happens after each major action
- Why a layout uses Grid or Flexbox
- How the phone layout differs
- What the limitations are
- What production version would require

## Replace the placeholders

Search the whole folder for:

- `Alex Petrović`
- `AP`
- `alex.placeholder@example.com`
- `your-username`
- `your-profile`

Replace them with your real identity and profiles. The About portrait is intentionally a placeholder. Keep the demonstration warnings in both applications.

## Publish with GitHub Pages

### Easiest method

1. Create a GitHub account.
2. Create a new public repository named `portfolio`.
3. Choose **Add file → Upload files**.
4. Upload the contents of this folder—not an extra parent folder.
5. Commit the files.
6. Open **Settings → Pages**.
7. Under **Build and deployment**, choose **Deploy from a branch**.
8. Select `main` and `/ (root)`, then save.

Your address should look like:

```text
https://your-username.github.io/portfolio/
```

All internal links are relative, so the case studies and demos work inside that path.

### Git method after you learn Git

```text
git init
git add .
git commit -m "Publish developer portfolio"
git branch -M main
git remote add origin YOUR_REPOSITORY_URL
git push -u origin main
```

Learn what every command changes before running it.

## Final checklist

- Replace every placeholder.
- Test every link.
- Test both demos on a phone and computer.
- Try empty searches and empty orders.
- Test the café reset button.
- Check both languages.
- Keep project limitations visible.
- Ask someone to use the demos without instructions.
- Fix whatever confuses them.

## What to learn next

Rebuild one small feature without assistance. Start with the café cart. Compare your version, note what you could not reproduce, study those concepts, and try again. Once you can explain and modify these apps, learn Git deeply, then asynchronous JavaScript and APIs, and only afterward consider React.
