import type {User} from "./user.model";

export type Place = {
    id: string,
    name: string,
    directLocation: string,
    district: string,
    price: number,
    comment: Comment[],
    created_by: User,
    description: string,
    rating: number,
    created_date: Date
}