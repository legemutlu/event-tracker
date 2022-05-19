import type {User} from "./user.model";

type Event = {
    id: string;
    name: string;
    event_date: boolean;
    price: number,
    location: string,
    attendants: User[],
    url: string,
    created_by: User,
    created_at: Date;
}

export default Event;