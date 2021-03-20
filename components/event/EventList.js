import Event from './Event';
import classes from '../../styles/Event.module.css';

function EventList({ events }) {
    return (
        <ul className={classes.list}>
            {events.map((e) => (
                <Event key={e.id} e={e} />
            ))}
        </ul>
    );
}

export default EventList;
