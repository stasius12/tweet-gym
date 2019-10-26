import { Exercise } from './exercise'

export interface User{
    id: Number;
    user: String[];
    nickname: String;
    exercises: Exercise[];
}