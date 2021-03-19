import { Fragment } from 'react';
import { useRouter } from 'next/router';
import { getEventById } from '../../dummyData';
import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';

function EventsIdPage() {
    const router = useRouter();
    const event = getEventById(router.query.id);

    if (!event) return <p>No event found</p>;

    return (
        <Fragment>
            <EventSummary title={event.title} />
            <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.title} />
            <EventContent>
                <p>{event.description}</p>
            </EventContent>
        </Fragment>
    );
}

export default EventsIdPage;
