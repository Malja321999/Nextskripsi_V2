import React, { useRef, useState } from "react";
import { database } from "./init";
import { child, get, ref } from "firebase/database";

const GetDataUsers = async (path: any) => {
  const snapshot = useRef(null);
  const error = useRef(null);
  const isEmpty = useRef(false);

  const getValue = async () => {
    try {
      const rootReference = ref(database);
      const dbGet = await get(child(rootReference, path));
      const dbValue = dbGet.val();
      const dbExists = dbGet.exists();
      if (!dbExists) {
        isEmpty.current = true;
      }
      snapshot.current = dbValue;
    } catch (getError) {
      console.log(getError);
    }
    /*setIsLoading(false) */
  };
  return {
    isEmpty: isEmpty.current,
    getValue,
    /* isLoading, */
    snapshot,
    error: error.current,
  };
};

export default GetDataUsers;
