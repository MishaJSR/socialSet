import React from 'react';
import classes from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_items}>
                <div className={classes.dialog + ' ' + classes.active}>
                    Andrey
                </div>
                <div className={classes.dialog}>
                    Vasya
                </div>
                <div className={classes.dialog}>
                    Petya
                </div>
                <div className={classes.dialog}>
                    Oleg
                </div>
                <div className={classes.dialog}>
                    Michail
                </div>
                <div className={classes.dialog}>
                    Polina
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>Hi</div>
                <div className={classes.message}>You</div>
                <div className={classes.message}>Bye</div>

            </div>
        </div>
    );
}

export default Dialogs;