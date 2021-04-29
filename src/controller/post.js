export const post = (userId, description) => {
  const db = firebase.firestore();
  return db.collection("post").add({
    Description: description,
    Date: new Date().toLocaleString(),
    imageURL: "imagen",
    likes: "2",
    uid: userId,
  });
};
