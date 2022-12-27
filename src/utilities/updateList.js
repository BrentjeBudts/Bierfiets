import {addDoc, collection, updateDoc} from "firebase/firestore";
import {Modal} from "antd";
import {firestoreDB} from "../services/firestore";
import {firestoreConverter} from "../App";
import {useCollectionData} from "react-firebase-hooks/firestore";
import {useLoadingContext} from "../contexts/LoadingContext";

export function UpdateList(list, id, name, email, date){

    const customersRef = collection(firestoreDB,"Customers").withConverter(firestoreConverter);
    const [customerData] = useCollectionData(customersRef);
    const {setLoading} = useLoadingContext();
    //TODO check for date

    const updateList = ()=> {
        setLoading(true);
        list.forEach(p => {
            if(p.id == id){
                setTimeout(()=>{
                    if(!checkForDate(p)){
                        updateDoc(p.ref, {hired: true}).then(() =>{
                            setLoading(false);
                            addDoc(customersRef, {name: name, email: email, productName: p.name, date: date}).then();
                            success('HIRED SUCCESSFULLY');
                            return;
                        });
                    }
                },3000);
            }
        });
    }

    const checkForDate = (p) =>{
        let isHired = false
        customerData.forEach(c =>{
            if(c.productName == p.name){
                if(c.date == date){
                    failed('Dit product is niet meer beschikbaar op deze datum')
                    isHired = true;
                    setLoading(false);
                }
            }
        });
        return isHired;
    }
    return updateList;
}

export const success = (succesMessage) => {
    Modal.success({
        content: succesMessage,
    });
};

export const failed = (failMessage) => {
    Modal.error({
        content: failMessage
    })
}