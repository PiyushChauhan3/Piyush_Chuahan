// import { BetaAnalyticsDataClient } from '@google-analytics/data';

// const analyticsDataClient = new BetaAnalyticsDataClient({
//   credentials: {
//     client_email: process.env.GA_CLIENT_EMAIL,
//     private_key: process.env.GA_PRIVATE_KEY?.replace(/\\n/g, '\n')
//   }
// });

// const propertyId = process.env.GA_PROPERTY_ID!;

// export async function getPageViews() {
//   const [response] = await analyticsDataClient.runReport({
//     property: `properties/${propertyId}`,
//     dateRanges: [{ startDate: '30daysAgo', endDate: 'today' }],
//     metrics: [{ name: 'screenPageViews' }]
//   });
  
//   return parseInt(response.rows?.[0]?.metricValues?.[0]?.value || '0');
// }

// export async function getActiveUsers() {
//   const [response] = await analyticsDataClient.runReport({
//     property: `properties/${propertyId}`,
//     dateRanges: [{ startDate: 'today', endDate: 'today' }],
//     metrics: [{ name: 'activeUsers' }]
//   });

//   return parseInt(response.rows?.[0]?.metricValues?.[0]?.value || '0');
// }

// export async function getAvgSessionDuration() {
//   const [response] = await analyticsDataClient.runReport({
//     property: `properties/${propertyId}`,
//     dateRanges: [{ startDate: '30daysAgo', endDate: 'today' }],
//     metrics: [{ name: 'averageSessionDuration' }]
//   });

//   return Math.round(parseFloat(response.rows?.[0]?.metricValues?.[0]?.value || '0') / 60);
// }
