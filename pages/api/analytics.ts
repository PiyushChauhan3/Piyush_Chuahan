// import type { NextApiRequest, NextApiResponse } from 'next';
// import { getPageViews, getActiveUsers, getAvgSessionDuration } from '../../utils/analytics';
// // import prisma from '../../lib/prisma';  // Assuming you have Prisma set up for posts

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   try {
//     const [totalPosts, totalViews, activeUsers, avgSessionTime] = await Promise.all([
//       prisma.post.count(),
//       getPageViews(),
//       getActiveUsers(),
//       getAvgSessionDuration()
//     ]);

//     res.status(200).json({
//       totalPosts,
//       totalViews,
//       activeUsers,
//       avgSessionTime
//     });
//   } catch (error) {
//     console.error('Analytics Error:', error);
//     res.status(500).json({ error: 'Failed to fetch analytics data' });
//   }
// }
