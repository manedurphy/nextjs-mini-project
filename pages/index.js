import Event from '../components/event/Event';
import { getFeaturedEvents } from '../dummyData';
import classes from '../styles/Event.module.css';

function Home() {
    const events = getFeaturedEvents();
    return (
        <div>
            <ul className={classes.list}>
                {events.map((e) => (
                    <Event key={e.id} e={e} />
                ))}
            </ul>
        </div>
    );
}

export default Home;
