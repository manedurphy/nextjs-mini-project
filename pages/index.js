import EventList from '../components/event/EventList';
import { getFeaturedEvents } from '../dummyData';

function Home() {
    const events = getFeaturedEvents();
    return (
        <div>
            <EventList events={events} />
        </div>
    );
}

export default Home;
