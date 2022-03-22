import { useEffect, useState, useRef } from 'react';
import { db } from '../firebase/config';

export const useCollection = (c, _query, _orderBy) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);

  // use ref to not get a infinite loop in useEffect
  // _query is an array and is "different" on every function call
  const q = useRef(_query).current;
  const orderBy = useRef(_orderBy).current;

  useEffect(() => {
    let ref = db.collection(c);

    if (q) {
      ref = ref.where(...q);
    }
    if (orderBy) {
      ref = ref.orderBy(...orderBy);
    }

    const unsubscribe = ref.onSnapshot(
      (snapshot) => {
        let results = [];
        snapshot.docs.forEach((doc) => {
          console.log(doc);
          results.push({ ...doc.data(), id: doc.id });
        });

        // update state
        setDocuments(results);
        setError(null);
      },
      (error) => {
        console.log(error);
        setError('could not fetch the data');
      }
    );

    // unsubscribe on unmount
    return () => unsubscribe();
  }, [c, q, orderBy]);

  return { documents, error };
};
