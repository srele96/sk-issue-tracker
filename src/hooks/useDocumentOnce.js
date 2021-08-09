import { useState, useEffect } from 'react';
import { firestore, status } from '../util';

export const useDocumentOnce = (collection, user_id) => {
  const [data, setData] = useState(null);
  const [loadingStatus, setLoadingStatus] = useState(status.idle);
  const [error, setError] = useState(null);

  // Enable condition to get document from firestore collection.
  useEffect(() => {
    setLoadingStatus(status.pending);
  }, [collection, user_id]);

  // Get one document from collection.
  useEffect(() => {
    let isMounted = true;

    if (loadingStatus === status.pending) {
      if (isMounted) setLoadingStatus(status.pending);

      firestore()
        .collection(collection)
        .doc(user_id)
        .get()
        .then((doc) => {
          if (isMounted) {
            if (doc.exists) setData(doc.data());

            setLoadingStatus(status.complete);
          }
        })
        .catch((error) => {
          if (isMounted) {
            setError(error);
            setLoadingStatus(status.error);
          }
        });
    }

    return () => (isMounted = false);
  }, [loadingStatus, user_id, collection]);

  return [data, loadingStatus, error];
};
