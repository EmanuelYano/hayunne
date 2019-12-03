import axios from "axios";
export default class LoginService{
    static async logar(usuario){
        console.log(usuario)
        try{
            let resp = await axios.post('http://localhost:1975/api/login', usuario)
            return resp.data.usuario
        }catch(err){
            console.log(err)
        }
    }
    static async cadastro(usuario){
        try{
            return await axios.post('http://localhost:1975/api/contato', usuario)
        }catch(erro){
            console.log(erro)
        }
    }
}