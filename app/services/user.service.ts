import {UserFilterDto} from "@/app/interfaces/dto/user-filter.dto";
import {UserDto} from "@/app/interfaces/dto/user.dto";
import {BadRequestDto} from "@/app/interfaces/dto/bad-request.dto";

class UserService {
    private accessToken: string;
    constructor (accessToken: string) {
        this.accessToken = accessToken
    }

    async getUserById (id: string): Promise<UserDto | BadRequestDto> {

            const response = await fetch('http://localhost:3000/users/' + id, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${this.accessToken}`
                }
            })

            return await response.json();
    }

    async create (user: UserDto): Promise<UserDto | BadRequestDto> {

        const response = await fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${this.accessToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })

        return await response.json();

    }

    async update (user: UserDto, id: string): Promise<UserDto | BadRequestDto> {

            const response = await fetch(`http://localhost:3000/users/${id}`, {
                method: 'PUT',
                headers: {
                    Authorization: `Bearer ${this.accessToken}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            })

            return await response.json();
    }

    async disable (id: number): Promise<UserDto | BadRequestDto> {

            const response = await fetch('http://localhost:3000/users/' + id, {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${this.accessToken}`,
                }
            })

            return await response.json();
    }

    async filter (filter: UserFilterDto): Promise<UserDto[] | BadRequestDto> {

        const params =  new URLSearchParams(
            {
                filterType: filter.filterType,
                filterValue: filter.filterValue,
                ageRange: filter.ageRange,
                userActive: filter.userActive.toString(),
                birthDateBegin: filter.birthDateBegin,
                birthDateEnd: filter.birthDateEnd,
                registerDateBegin: filter.registerDateBegin,
                registerDateEnd: filter.registerDateEnd,
                updateDateBegin: filter.updateDateBegin,
                updateDateEnd: filter.updateDateEnd,
            }
        ).toString();



        const response = await fetch('http://localhost:3000/users/filter?' + params, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${this.accessToken}`

            }
        })

        return response.json();
    }

}

export default UserService;