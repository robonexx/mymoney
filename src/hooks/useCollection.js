import { useState, useEffect } from 'react';
import { db } from '../firebase/config';

import { collection, onSnapshot } from 'firebase/firestore';

export const useCollection = (c) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ref = db.collection(c);

    // using the onsnapshot function taking in the ref and then the snapshot object
    // anytime the db changes we get the new snapshot
    // then cycling thru the documents, then adding the new data to the collection
    const unsub = ref.onSnapshot(
      (snapshot) => {
        let results = [];
        snapshot.docs.forEach((doc) => {
          results.push({ ...doc.data(), id: doc.id });
        });

        // update state
        setDocuments(results);
        setError(null);
      },
      (error) => {
        console.log(error);
        setError('Could not fetch data');
      }
    );

    // unsub on unmount
    return () => unsub();
  }, [c]);

  return { documents, error };
};
