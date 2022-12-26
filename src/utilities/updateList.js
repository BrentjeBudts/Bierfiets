import {addDoc, collection, updateDoc} from "firebase/firestore";
import {Modal} from "antd";
import {firestoreDB} from "../services/firestore";
import {firestoreConverter} from "../App";

export function updateList(list,setLoading, id, name, email, date){

    const customersRef = collection(firestoreDB,"Customers").withConverter(firestoreConverter);

    //TODO check for date

    const updateList = ()=> {
        setLoading(true);
        list.forEach(p => {
            if(p.id == id){
                setTimeout(()=>{
                    updateDoc(p.ref, {hired: true}).then(() =>{
                        setLoading(false);
                        addDoc(customersRef, {name: name, email: email, productName: p.name, date: date}).then();
                        success('HIRED SUCCESSFULLY')
                    });
                },3000);
            }
        });
    }
    return updateList;
}

export const success = (succesMessage) => {
    Modal.success({
        content: succesMessage,
    });
};