import { ClassEvent } from "../utils/ClassEvents";
import { Firebase, firebase } from "./../utils/Firebase";

export class User extends ClassEvent {

    static getRef(){

        return Firebase.db().collection('users');
        
    }

    static findEmail(email){

        return User.getRef().doc(email)

    }

}