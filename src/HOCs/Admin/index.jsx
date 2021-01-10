import React from 'react';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useStyles } from "./style";
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import AdminBreadcrumbs from '../../components/Breadcrumb';

export default function Admin(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);

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
                <AdminBreadcrumbs />
                {props.children}
            </main>
        </div>
    );
}