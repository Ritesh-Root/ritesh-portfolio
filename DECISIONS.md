# Decisions

## 2026-05-26 - Import Source Repository

Imported the GitHub repository into `/home/ritesh/MYwebsite` instead of manually recreating files. This keeps upstream git history and makes future git operations normal.

## 2026-05-26 - Keep Existing Profile Image Path

Kept the app reference as `/ritesh-profile.png` and replaced the file at `public/ritesh-profile.png`. This avoids changing component paths and keeps the asset update low-risk.

## 2026-05-26 - Render Profile Image as Square

Changed profile image metadata from `200x208` to `200x200` because the replacement avatar is a square image.

## 2026-05-26 - Patch Dependency Security Issues

Upgraded `next` and `eslint-config-next` to `15.5.18` and pinned `postcss` to `8.5.15` through npm overrides. This cleared the dependency audit while staying on Next.js 15 instead of making a larger framework migration.

## 2026-05-26 - Fix Project Technology Logos

Fixed broken project-detail logo paths by using existing `.webp` and `.svg` assets where available. Added a small local `echarts-logo.svg` because no ECharts asset existed in the repository.

## 2026-05-26 - Set Canonical Portfolio Domain

Set `https://riteshhoon.online` as the canonical production URL and documented `NEXT_PUBLIC_SITE_URL` for Vercel. This keeps metadata, environment setup, and GitHub project context aligned with the hosted website.
