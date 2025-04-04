# AI & Semiconductor Stock Portfolio Dashboard - Deployment Guide

This guide explains how to deploy the portfolio dashboard to Cloudflare Pages for a permanent, shareable URL.

## Prerequisites

- Cloudflare account
- Node.js and npm installed

## Deployment Steps

1. **Build the application**:
   ```bash
   cd /home/ubuntu/portfolio_dashboard_nextjs
   npm run build
   ```

2. **Deploy to Cloudflare Pages**:
   ```bash
   npx wrangler pages deploy ./.next --project-name portfolio-dashboard
   ```

3. **Set up the database**:
   After deployment, you'll need to create a D1 database in your Cloudflare account:
   ```bash
   npx wrangler d1 create portfolio-dashboard-db
   ```

4. **Apply migrations**:
   ```bash
   npx wrangler d1 migrations apply portfolio-dashboard-db --remote
   ```

5. **Update wrangler.toml**:
   Update the database_id in wrangler.toml with your new database ID.

## Accessing the Dashboard

Once deployed, your dashboard will be available at:
`https://portfolio-dashboard.pages.dev`

This URL can be shared with anyone who needs access to the dashboard.

## Updating the Dashboard

To update the dashboard with new data or features:

1. Make your changes to the codebase
2. Run the build command: `npm run build`
3. Deploy the changes: `npx wrangler pages deploy ./.next --project-name portfolio-dashboard`

## Browser Compatibility

The dashboard is compatible with all modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Sharing the Dashboard

You can share the dashboard URL with others in several ways:
- Direct link: Send the URL via email or messaging
- Embed: Use an iframe to embed the dashboard in another website
- QR Code: Generate a QR code that links to the dashboard

## Troubleshooting

If you encounter issues with the deployment:
1. Check Cloudflare Pages logs for error messages
2. Verify database connections in the Cloudflare dashboard
3. Ensure all environment variables are properly set
