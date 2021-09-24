import { getAuth } from 'firebase/auth';

import app from 'db/app';

export const auth = getAuth(app);
