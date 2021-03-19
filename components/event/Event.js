import DateIcon from '../icons/date-icon';
import AddressIcon from '../icons/address-icon';
import ArrowRight from '../icons/arrow-right-icon';
import classes from '../../styles/Event.module.css';
import Button from '../ui/Button';

function Event({ e }) {
    return (
        <li className={classes.item}>
            <img src={e.image} alt={'event'} />
            <div className={classes.content}>
                <div className={classes.summary}>
                    <h2>{e.title}</h2>
                    <div>
                        <time className={classes.date}>
                            <DateIcon />
                            {new Date(e.date).toLocaleDateString('en-US', {
                                day: 'numeric',
                                month: 'long',
                                year: 'numeric',
                            })}
                        </time>
                    </div>
                    <div className={classes.address}>
                        <AddressIcon />
                        <address>{e.location.replace(', ', '\n')}</address>
                    </div>
                </div>
                <div className={classes.actions}>
                    <Button link={`/events/${e.id}`}>
                        <span>See more</span>
                        <span className={classes.icon}>
                            <ArrowRight />
                        </span>
                    </Button>
                </div>
            </div>
        </li>
    );
}

export default Event;
