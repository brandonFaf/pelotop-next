import { NextApiRequest, NextApiResponse } from 'next';
import cookie from 'cookie';
import auth from '../../api/authenticate';
const login = async (_req: NextApiRequest, res: NextApiResponse) => {
  if (_req.method == 'POST') {
    const { username, password } = _req.body;
    const { user_id, session_id } = await auth(username, password);
    var setCookie = cookie.serialize('session_id', session_id, {
      sameSite: 'none',
      httpOnly: true,
      secure: true,
      path: '/',
      maxAge: 2592000
    });
    res.setHeader('Set-Cookie', setCookie);
    res.status(200).json({ user_id, session_id });
  } else if (_req.method == 'OPTIONS') {
    res.status(200).send('ok');
  } else {
    res.status(405).send('method not allowed');
  }
};
export default login;
