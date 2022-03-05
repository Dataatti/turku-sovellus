// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  // Clears the preview mode cookies.
  // This function accepts no arguments.
  res.clearPreviewData();

  return res.status(200).json({ msg: 'Success' });
}
