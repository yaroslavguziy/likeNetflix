import { useEffect, useState } from 'react';

import { onAuthStateChanged } from 'db/auth';

export const useAuth = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(() => setIsLoading(false));

    return unsubscribe;
  }, []);
  return { isLoading };
};
