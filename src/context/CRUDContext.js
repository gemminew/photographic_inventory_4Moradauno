/* import { useState, useEffect } from "react";
import "./App.css";
import { db } from "./firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

function CRUD() {
  const [newImage, setNewImage] = useState([]);
  const imagesCollectionRef = collection(db, "contratos");
  const [isBroker, setIsBroker] = useState(null);
  const [isTenant, setIsTenant] = useState(null);
  const [estatus, setEstatus] = useState("En proceso");

  const createImage = async () => {
    await addDoc(imagesCollectionRef, { fotografia: newImage, status: estatus });
  };

  const updateImage = async (id, fotografia,status) => {
    const galleryDoc = doc(db, "contratos", id);
    await updateDoc(galleryDoc);
  };

  const deleteImage = async (id) => {
    const galleryDoc = doc(db, "contratos", id);
    await deleteDoc(galleryDoc);
  };

  useEffect(() => {
    const getImages = async () => {
      const data = await getDocs(imagesCollectionRef);
      setImages(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getImages();
  }, []);

  return (
    <div className="CRUD">
      <input
      type = "file"
        placeholder="."
        onChange={(event) => {
          setNewImage(event.target.value);
        }}
      />
      <input
        onChange={(event) => {
          setEstatus(event.target.value);
        }}
      />

      <button onClick={createImage}>Añadir nueva foto</button>
      {images.map((image) => {
        return (
          <div>
            {" "}
            <h1>Fotografia: {image.fotografia}</h1>
            <h1>Estatus: {image.estatus}</h1>
            <button
              onClick={() => {
                updateUser(image.id, image.estatus);
              }}
            >
              {" "}
              Erm
            </button>
            <button
              onClick={() => {
                deleteImage(image.id);
              }}
            >
              {" "}
              Borrar foto
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default CRUD;  */