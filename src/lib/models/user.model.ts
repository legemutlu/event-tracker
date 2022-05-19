import type Event from './event.model';
import type { Place } from './place.model';

export type User = {
	id: string;
	name: string;
	photo: string;
	created_date: Date;
	created_events: Event[];
	created_places: Place[];
	// TODO: event actions
	// event_actions: EventAction[],
	// place_actions: PlaceAction[]
};
