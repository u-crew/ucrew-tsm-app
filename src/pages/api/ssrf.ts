import * as  express from 'express';
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next'
const app = express();
const port = 3000;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const imgUrl = req.body.imgUrl;
  const imageReq = await axios.get(imgUrl);
  res.send(imageReq.data);
}