import {updateDoc} from "firebase/firestore";
import {Modal} from "antd";

export function updateList(list,setLoading, id){

    const updateList = ()=> {
        setLoading(true);
        list.forEach(p => {
            if(p.id == id){
                setTimeout(()=>{
                    updateDoc(p.ref, {hired: true}).then(() =>{
                        setLoading(false);
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