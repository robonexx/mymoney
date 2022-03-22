import { useReducer, useState, useEffect } from 'react';
import { projectFirestore } from '../firebase/config';

let initialState = {
  document: null,
  isPending: false,
  error: null,
  success: null,
};

const firestoreReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const useFirestore = (collection) => {
    const [response, dispatch] = useReducer(firestoreReducer, initialState);
    // used for claen up function
    const [isCancelled, setIsCancelled] = useState(false);
    //collection ref
    const ref = projectFirestore.collection(collection)
    // add a document
    const addDocument = (doc) => {

    }
    //delete a document
    const deleteDocument = (doc) => {

    }

    useEffect(() => {
        return() => setIsCancelled(true)
    }, [])
};
