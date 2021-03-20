import { NextApiRequest, NextApiResponse } from 'next';
import getData from '../../../api/getData';
export default async (request: NextApiRequest, response: NextApiResponse) => {
  const { user_id } = request.query;
  const { session_id } = request.cookies;
  if (session_id) {
    const data = await getData(user_id, session_id).catch(err => {
      response.status(err.status);
      response.json({ error: err });
      return;
    });
    response.status(200).json(data);
  } else {
    response.status(401).json({});
  }
};
