import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import app from "./init";
import bcrypt from "bcryptjs";

const firestore = getFirestore(app);

/* Mengambil Data Dari Firebase */

export async function retrieveData(collectionName: string) {
  const snapshot = await getDocs(collection(firestore, collectionName));
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return data;
}

export async function retrieveDataById(collectionName: string, id: string) {
  const snapshot = await getDoc(doc(firestore, collectionName, id));
  const data = snapshot.data();
  return data;
}

/* Menghubungkan Signup dengan Firebase */

export async function register(data: {
  fullname: string;
  nisn: string;
  email: string;
  class?: string;
  role?: string;
  password: string;
}) {
  const q = query(
    collection(firestore, "users"),
    where("email", "==", data.email)
  );
  const shapshot = await getDocs(q);
  const users = shapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  if (users.length > 0) {
    return { status: false, statusCode: 400, message: "Email already exist" };
  } else {
    data.role = "member";
    data.class = "A";
    data.password = await bcrypt.hash(data.password, 10);
    try {
      await addDoc(collection(firestore, "users"), data);
      return { status: true, statusCode: 200, message: "Register Success" };
    } catch (error) {
      return { status: false, statusCode: 400, message: "Register Failed" };
    }
  }
}

/* Menghubungkan Signin dengan Firebase */

export async function login(data: { email: string; nisn: string; password: string }) {
  console.log(data);
  const q = query(
    collection(firestore, "users"),
    where("nisn", "==", data.nisn)
  );
  const shapshot = await getDocs(q);
  const user = shapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  if (user) {
    return user[0];
  } else {
    return null;
  }
}

/* Menghubungkan Login System dengan Google Firebase */

export async function loginWithGoogle(data: any, callback: any) {
  const q = query(
    collection(firestore, "users"),
    where("email", "==", data.email)
  );
  const shapshot = await getDocs(q);
  const user: any = shapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  if (user.length > 0) {
    data.role = user[0].role;
    await updateDoc(doc(firestore, "users", user[0].id), data).then(() => {
      callback({ status: true, data: data });
    });
  } else {
    data.role = "member";
    await addDoc(collection(firestore, "users"), data).then(() => {
      callback({ status: true, data: data });
    });
  }
}
