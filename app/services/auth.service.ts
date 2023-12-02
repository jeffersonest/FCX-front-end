import {LoginFormDto} from "@/app/interfaces/dto/login-form.dto";

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
}

export default AuthService;