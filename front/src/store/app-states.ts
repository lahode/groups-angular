import { User } from '../models/user.model';

export interface UserStateI {
    user : User;
}

export interface IsLoadingStateI extends Boolean {}
