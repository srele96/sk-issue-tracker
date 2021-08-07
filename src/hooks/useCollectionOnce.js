import { useState, useEffect } from 'react';
import { firestore, status } from '../util';

export const useCollectionOnce = (collection, limit = 25) => {
  const [data, setData] = useState([]);
  const [loadingStatus, setLoadingStatus] = useState(status.idle);
  const [error, setError] = useState(null);

  // // Trigger collection fetch.
  useEffect(() => {
    setLoadingStatus(status.pending);
  }, []);

  // If status is pending, get data from collection.
  useEffect(() => {
    let isMounted = true;

    if (loadingStatus === status.pending) {
      firestore()
        .collection(collection)
        .limit(limit)
        .get()
        .then((querySnapshot) => {
          if (isMounted) {
            // Collect data before calling setState. Reduce ammount of renders.
            let userList = [];
            querySnapshot.forEach(
              (doc) => (userList = [...userList, doc.data()])
            );

            setData(userList);
            setLoadingStatus(status.complete);
          }
        })
        .catch((error) => {
          if (isMounted) {
            setLoadingStatus(status.error);
            setError(error);
          }
        });
    }

    return () => (isMounted = false);
  }, [loadingStatus, collection, limit]);

  return [data, loadingStatus, error];
};
