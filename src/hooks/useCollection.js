import { useState, useEffect } from 'react';
import { db } from '../firebase/config';

import { collection, onSnapshot } from 'firebase/firestore';

export const useCollection = (c) => {
  const [documents, setDocuments] = useState(null);

  useEffect(() => {
    let ref = collection(db, c);

    // using the onsnapshot function taking in the ref and then the snapshot object
    // anytime the db changes we get the new snapshot
    // then cycling thru the documents, then adding the new data to the collection
    const unsub = onSnapshot(ref, (snapshot) => {
      let results = [];
      snapshot.docs.forEach((doc) => {
        results.push({ ...doc.data(), id: doc.id });
      });
      setDocuments(results);
    });

    return () => unsub();
  }, [c]);

  return { documents };
};
