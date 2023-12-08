import {LoginFormDto} from "@/app/interfaces/dto/login-form.dto";
import {RecoverAccessDto} from "@/app/interfaces/dto/recover-access.dto";

class AuthService{
    async login({login, password}: LoginFormDto): Promise<any> {
        const response = await fetch('http://localhost:3000/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({login, password})
        })
        if(response.ok){
            return response.json()
        } else {
            return false;
        }
    }

    async recoverPassword({email, cpf}: RecoverAccessDto): Promise<any> {
        const response = await fetch('http://localhost:3000/auth/recover', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, cpf})
        })
        if(response.ok){
            return response.json()
        } else {
            return false;
        }
    }

    async validateToken(token: string): Promise<any> {
        const response = await fetch('http://localhost:3000/auth/validate', {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
        if(response.ok){
            return response.json()
        } else {
            return false;
        }
    }
}

export default AuthService;