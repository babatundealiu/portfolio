import Instance from "./AxiosCalls";
import ShowToast from '../commons/ShowToast'

interface IUser{
    name: string;
    email: string;
    phonenumber: number;

}
export const RegisterUser = async(data:IUser)=> {
    try {
        const response = await Instance.post('/register', data);
        if (response.status === 200){
            ShowToast(true, `${response.data.message}`)
        }
        return response;
    } catch (error:any) {
        console.log(error)
        ShowToast(false, `${error.response.data.message}`)
    }
};