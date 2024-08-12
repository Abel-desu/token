import { getOneDriveAccessToken } from '../../lib/onedrive';
import { supabase } from '../../lib/supabase';


export default async function handler(req, res) {
  if (req.method === 'GET') {
	try {
	  const accessToken = await getOneDriveAccessToken();

	  const { data, error } = await supabase
		.from('tokens')
		.insert([{ token: accessToken }]);

	  if (error) {
		throw error;
	  }

	  res.status(200).json({ accessToken, data });
	} catch (error) {
	  res.status(500).json({ error: error.message });
	}
  } else {
	res.status(405).json({ message: 'Method not allowed' });
  }
}