import React from 'react';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useStyles } from "./style";
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';

export default function HomeAdmin() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Header />
            <Navbar />
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                <div className={classes.drawerHeader} />

            </main>
        </div>
    );
}