import axios from "axios";

export default class LoginService{

	static async logar(usuario){
        try {
            let resposta = await axios.post( "http://localhost:1975/api/logar", usuario)            
            return resposta.data.usuario            
        } catch (error) {
            console.log (error)
        }
    }
    static async salvar(usuario){
        try {
            return await axios.post( "http://localhost:1975/api/usuarios", usuario)
        } catch (error) {
            console.log (error)
        }
    }
}