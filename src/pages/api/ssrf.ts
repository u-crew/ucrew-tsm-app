import type { NextApiRequest, NextApiResponse } from 'next'

const PASSWORD = "123";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const imgUrl = req.body.imgUrl;
  console.log(`Image URL is ${req.body.imgUrl}. password: ${PASSWORD}`);
  res.status(200);
}