# Harsh Gupta Portfolio

An animated 3D portfolio website for Harsh Gupta, built with React, TypeScript, Vite, Three.js, and GSAP. The site showcases profile details, skills, selected projects, career highlights, contact links, and an interactive 3D character experience.

## Features

- Interactive 3D character scene powered by Three.js and React Three Fiber
- Smooth scroll-based animations using GSAP
- Responsive portfolio sections for landing, about, work, career, tech stack, and contact
- Centralized personal data and project configuration
- Production-ready Vite build setup

## Tech Stack

- React 18
- TypeScript
- Vite
- Three.js
- React Three Fiber
- Drei
- GSAP
- React Icons

## Getting Started

Install dependencies:

```bash
npm install
```

Run the local development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

```text
src/
  components/        Reusable portfolio sections and UI components
  components/styles/ Component-specific CSS files
  components/utils/  Animation and interaction helpers
  constants/         Personal profile, links, projects, and career data
  context/           Loading state provider
  data/              3D character supporting data
public/
  draco/             Draco decoder assets
  images/            Technology and project images
  models/            3D model and environment assets
```

## Customization

Most portfolio content is managed in:

```text
src/constants/index.ts
```

Update that file to change:

- Name and role
- About text
- Email and social links
- Project details
- Career timeline
- Skills and services

## Deployment

This project can be deployed to any static hosting platform that supports Vite builds, such as Vercel, Netlify, or GitHub Pages.

Use this build command:

```bash
npm run build
```

The production output is generated in:

```text
dist/
```

## Repository

GitHub: https://github.com/harshu07-collab/My_PortFolio
