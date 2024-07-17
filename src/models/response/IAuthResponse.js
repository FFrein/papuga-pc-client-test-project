import { IUser } from "../IUser";

export class IAuthResponse {
    accessToken;
    refreshToken;
    user = new IUser();
}