// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  try {
    // Clears the preview mode cookies.
    // This function accepts no arguments.
    res.clearPreviewData();

    return res.redirect(307, `/`);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
}
