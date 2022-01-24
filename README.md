# next-medium-export
![License](https://img.shields.io/badge/license-MIT-blue)

This is an example app for showcasing how one could use static generation and dynamic routes in [Next.js](https://nextjs.org/) to render a list of Medium articles on their own website.

This project was bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Installation instructions

```bash
# Clone this repository
git clone git@github.com/Eppu/next-medium-export.git

# Move into the copied folder
cd next-medium-export

# Install dependencies
npm install

# Spin up a local development environment
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

In your `.env` file, you can set the `MEDIUM_FEED` variable to point to a Medium RSS feed of your choice. By default, the app falls back to use https://medium.com/feed/netlify as the URL.
