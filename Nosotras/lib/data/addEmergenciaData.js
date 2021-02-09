import firebase from 'react-native-firebase';

const EMERGENCIA_COLLECTION = 'emergencia'; 

export const emergenciaQuery = () => {
    const db = firebase.firestore();
    return db.collection(EMERGENCIA_COLLECTION);
};

export const addEmergencia = async(data) => {
    await emergenciaQuery().add(data);
};

export const onSnapshotsEmergencia = (eventChanges) => {
    emergenciaQuery().onSnapshot((snapshot) => {
        snapshot.docChanges.forEach((documento) => {
            eventChanges(documento);
        });
    });
};

export const getEmergencia = async() => {
    const emergenciaArreglo = [];
    const snapshotsEmergencia = await emergenciaQuery().get();
    snapshotsEmergencia.forEach((documento) => {
        emergenciaArreglo.push({
            id: documento.id,
            ...documento.data(),
        });
    });
    return emergenciaArreglo;
};