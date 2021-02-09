import firebase from 'react-native-firebase';

const AYUDA_COLLECTION = 'ayuda'; 

export const ayudaQuery = () => {
    const db = firebase.firestore();
    return db.collection(AYUDA_COLLECTION);
};

export const addAyuda = async(data) => {
    await ayudaQuery().add(data);
};

export const onSnapshotsAyuda = (eventChanges) => {
    ayudaQuery().onSnapshot((snapshot) => {
        snapshot.docChanges.forEach((documento) => {
            eventChanges(documento);
        });
    });
};

export const getAyuda = async() => {
    const ayudaArreglo = [];
    const snapshotsAyuda = await ayudaQuery().get();
    snapshotsAyuda.forEach((documento) => {
        ayudaArreglo.push({
            id: documento.id,
            ...documento.data(),
        });
    });
    return ayudaArreglo;
};