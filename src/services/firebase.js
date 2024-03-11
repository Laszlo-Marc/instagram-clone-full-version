import {collection, getFirestore} from 'firebase/firestore';
import {firebase} from '../lib/fb';

export async function doesUsernameExist(username) {
    const result = await collection(getFirestore(firebase), 'users')
        .where('username', '==', username)
        .get();

    return result.docs.map((user) => user.data().length > 0);
}
