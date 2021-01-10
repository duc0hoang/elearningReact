import React from 'react';
import Admin from '../../HOCs/Admin';
import HomeAdminContent from '../../components/HomeAdminContent';
import Category from '../../components/Category';
import Course from '../../components/Course';
import Role from '../../components/Role';
import Target from '../../components/Target';
import User from '../../components/User';
import Video from '../../components/Video';
import { useSelector } from 'react-redux';
import AddCategory from '../../components/Category/add';
import EditCategory from '../../components/Category/edit';
import AddCourse from '../../components/Course/add';
import EditCourse from '../../components/Course/edit';
import AddRole from '../../components/Role/add';
import EditRole from '../../components/Role/edit';
import AddTarget from '../../components/Target/add';
import EditTarget from '../../components/Target/edit';
import AddUser from '../../components/User/add';
import EditUser from '../../components/User/edit';
import AddVideo from '../../components/Video/add';
import EditVideo from '../../components/Video/edit';

export default function HomeAdmin() {
    const adminContent = useSelector((state) => state.admin.adminContent);
    const adminContentExtension = useSelector((state) => state.admin.adminContentExtension);

    return (
        <Admin>
            { adminContent === 'home' && <HomeAdminContent />}
            { adminContent === 'Category' && <Category />}
            { adminContent === 'Category' && adminContentExtension === 'add' && <AddCategory />}
            { adminContent === 'Category' && adminContentExtension === 'edit' && <EditCategory />}
            { adminContent === 'Course' && <Course />}
            { adminContent === 'Course' && adminContentExtension === 'add' && <AddCourse />}
            { adminContent === 'Course' && adminContentExtension === 'edit' && <EditCourse />}
            { adminContent === 'Role' && <Role />}
            { adminContent === 'Role' && adminContentExtension === 'add' && <AddRole />}
            { adminContent === 'Role' && adminContentExtension === 'edit' && <EditRole />}
            { adminContent === 'Target' && <Target />}
            { adminContent === 'Target' && adminContentExtension === 'add' && <AddTarget />}
            { adminContent === 'Target' && adminContentExtension === 'edit' && <EditTarget />}
            { adminContent === 'User' && <User />}
            { adminContent === 'User' && adminContentExtension === 'add' && <AddUser />}
            { adminContent === 'User' && adminContentExtension === 'edit' && <EditUser />}
            { adminContent === 'Video' && <Video />}
            { adminContent === 'Video' && adminContentExtension === 'add' && <AddVideo />}
            { adminContent === 'Video' && adminContentExtension === 'edit' && <EditVideo />}
        </Admin>
    )
}
