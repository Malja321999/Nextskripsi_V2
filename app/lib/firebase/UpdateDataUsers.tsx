"use client";
import { database } from "./init";
import { child, ref, update } from "firebase/database";

// eslint-disable-next-line @next/next/no-async-client-component
const UpdateDataUsers = async (path: any, value: any) => {
  try {
    const rootReference = ref(database);
    const dbPath = child(rootReference, path);
    await update(dbPath, value);
  } catch (pushError: any) {
    console.log(pushError.message);
  }
};

export default UpdateDataUsers;
