import { getDocs, collection, query, where, orderBy, getDoc, doc} from 'firebase/firestore';
import { db } from '../firebaseConfig';

// Refactorizado a async/await para mejor rendimiento y legibilidad
export const getProductos = async (categoryId) => {
    const collectionRef = categoryId 
        ? query(collection(db, 'productos'), where('category', '==', categoryId)) 
        : query(collection(db, 'productos'), orderBy('category', 'desc'));
    
    const response = await getDocs(collectionRef);
    return response.docs.map(doc1 => ({
        id: doc1.id,
        ...doc1.data()
    }));
};

export const getProductosbyId = async (productoId) => {
    const productoRef = doc(db, 'productos', productoId);
    const response = await getDoc(productoRef);
    
    // Verificar si el documento existe
    if (!response.exists()) {
        return null;
    }
    
    return {
        id: response.id,
        ...response.data()
    };
};