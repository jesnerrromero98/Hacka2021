import firebase from 'react-native-firebase';

const INICIO_COLLECTION = 'inicio'; 

export const inicioQuery = () => {
    const db = firebase.firestore();
    return db.collection(INICIO_COLLECTION);
};

export const addInicio = async(data) => {
    await inicioQuery().add(data);
};

export const onSnapshotsInicio = (eventChanges) => {
    inicioQuery().onSnapshot((snapshot) => {
        snapshot.docChanges.forEach((documento) => {
            eventChanges(documento);
        });
    });
};

export const getInicio = async() => {
    const inicioArreglo = [];
    const snapshotsInicio = await inicioQuery().get();
    snapshotsInicio.forEach((documento) => {
        inicioArreglo.push({
            id: documento.id,
            ...documento.data(),
        });
    });
    return inicioArreglo;
};