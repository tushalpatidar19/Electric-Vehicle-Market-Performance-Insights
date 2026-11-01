/**
 * Tableau Configuration for EV Insights
 * 
 * Note for user:
 * - DASHBOARD_URL: Your verified published Tableau Public Dashboard URL.
 * - STORY_URL: Leave blank or set your published Tableau Story URL below.
 *   You can also update it directly via the interactive configuration panel in the website UI.
 */

export const TABLEAU_CONFIG = {
  // Verified published Tableau Public Dashboard
  dashboard: {
    title: 'EV Adoption & Market Strategy Dashboard',
    description: 'Comprehensive multi-metric dashboard analyzing EV adoption acceleration, manufacturer market share, powertrain trends, and vehicle range metrics.',
    // Direct link to open on Tableau Public
    publishedUrl: 'https://public.tableau.com/app/profile/tushal.patidar/viz/EV_Market_Performance_Market_Story_2026-10-25_17931652851740/EVAdoptionStrategyDashboard?publish=yes',
    // Embedded view URL used by Tableau JS API & iframe
    embedViewUrl: 'https://public.tableau.com/views/EV_Market_Performance_Market_Story_2026-10-25_17931652851740/EVAdoptionStrategyDashboard',
  },

  // Tableau Story: Set your published URL here when ready, or use the in-app config switcher
  story: {
    title: 'EV Market Dynamics & Strategic Growth Story',
    description: 'Sequential narrative walkthrough exploring the transition from niche early adopters to mainstream mass-market EV acceleration.',
    // Set to your published Tableau Story link if available (leave empty string if not yet published)
    publishedUrl: '',
    // Corresponding view URL for embed (derived automatically if publishedUrl is provided)
    embedViewUrl: '',
  },

  author: {
    name: 'Tushal Patidar',
    profileUrl: 'https://public.tableau.com/app/profile/tushal.patidar',
    role: 'Data Analyst & Lead Researcher',
    project: 'Electric Vehicle Market Performance & Insights'
  }
};

/**
 * Helper to build the embedded iframe URL with standard Tableau Public query parameters
 */
export function getTableauEmbedUrl(rawUrl) {
  if (!rawUrl) return '';

  let viewUrl = rawUrl;
  
  // Transform app/profile URL to views URL if necessary
  if (viewUrl.includes('/app/profile/') && viewUrl.includes('/viz/')) {
    const parts = viewUrl.split('/viz/')[1]?.split('?')[0];
    if (parts) {
      viewUrl = `https://public.tableau.com/views/${parts}`;
    }
  }

  // Strip query parameters
  const baseUrl = viewUrl.split('?')[0];
  return `${baseUrl}?:showVizHome=no&:embed=true&:toolbar=yes&:format=html&:tabs=no`;
}
