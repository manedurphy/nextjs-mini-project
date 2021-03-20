import EventList from '../../components/event/EventList';
import EventsSearch from '../../components/event/EventsSearch';
import { Fragment } from 'react';
import { getAllEvents } from '../../dummyData';

function EventsPage() {
    const events = getAllEvents();

    return (
        <Fragment>
            <EventsSearch />
            <EventList events={events} />
        </Fragment>
    );
}

export default EventsPage;
