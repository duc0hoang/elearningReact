import React from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { useDispatch, useSelector } from 'react-redux';
import Constants from '../../redux/constants';
import createAction from '../../redux/actions';
import { Link } from 'react-router-dom';

export default function AdminBreadcrumbs() {
  const dispatch = useDispatch();
  const adminContent = useSelector((state) => state.admin.adminContent);
  const adminContentExtension = useSelector((state) => state.admin.adminContentExtension);
  const onGoHome = () => {
    dispatch(createAction(Constants.CHANGE_ADMIN_CONTENT, 'home'));
    dispatch(createAction(Constants.CHANGE_ADMIN_CONTENT_EXTENSION, ''));
  }
  const handlePage = (text) => () => {
    dispatch(createAction(Constants.CHANGE_ADMIN_CONTENT, text));
    dispatch(createAction(Constants.CHANGE_ADMIN_CONTENT_EXTENSION, ''));
  }
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" onClick={onGoHome} style={{ textDecoration: 'none' }}>
        Home
  </Link>
      { adminContent !== 'home' ?
        <Link color="inherit" onClick={handlePage(adminContent)} style={{ textDecoration: 'none' }}>
          {adminContent}
        </Link>
        :
        <></>
      }
      { adminContentExtension !== '' ?
        <Typography color="textPrimary">{adminContentExtension}</Typography> :
        <></>
      }
    </Breadcrumbs>
  );
}