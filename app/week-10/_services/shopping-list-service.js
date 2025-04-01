import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export const getItems = async (userId) => {
    const data = []
    const q = query(collection(db, "users", userId, "items"));
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach((doc) => {
        data.push(doc.data())
    })
    return data;
}

export const addItem = async (userId, item) => {

    const docRef = await addDoc(collection(db, "users", userId, "items"),item)
    return docRef.id
}

export const deleteItem = async (userId, item) => {


}

