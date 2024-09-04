export class RegisterDto {
    email: string;
    firstName: string;
    lastName: string;
    password: string;

    constructor(data: any) {
        this.email = data.email;
        this.firstName = data.firstName;
        this.lastName = data.lastName;
        this.password = data.password;

    }
}

export class LoginDto {
    email: string;
    password: string;

    constructor(data: any) {
        this.email = data.email;
        this.password = data.password;

    }
}

export interface LoginResponse {
  accessToken: string;
  refreshToken: string
}