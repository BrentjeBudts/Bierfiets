import {updateDoc} from "firebase/firestore";
import {Modal} from "antd";

export function updateList(list,setLoading, id){

    const updateBike = ()=> {
        setLoading(true);
        list.forEach(p => {
            if(p.id == id){
                setTimeout(()=>{
                    updateDoc(p.ref, {hired: true}).then(() =>{
                        success()
                    });
                },3000);
            }
        });
    }

    const success = () => {
        setLoading(false);
        Modal.success({
            content: 'HIRED SUCCESSFULLY',
        });
    };

    return updateBike;
}