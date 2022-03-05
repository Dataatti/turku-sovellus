// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  // Check the secret and next parameters
  // This secret should only be known to this API route and the CMS
  if (req.query.secret !== process.env.STRAPI_PREVIEW_SECRET) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  // Enable Preview Mode by setting the cookies
  res.setPreviewData({});

  // Redirect to the path from the fetched post
  res.redirect(
    307,
    `/${req.query.path}${req.query.id && !req.query.ignoreId ? `/${req.query.id}` : ''}`
  );
}
