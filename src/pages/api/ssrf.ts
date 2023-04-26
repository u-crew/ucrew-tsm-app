import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const imgUrl = req.body.imgUrl;
  console.log(`Image URL is ${req.body.imgUrl}`);
  res.status(200);
}