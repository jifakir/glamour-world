import * as React from 'react';
import AdminLayout from '../../components/Layouts/AdminLayout';


const Dashboard = () => {
    return (
        <div className="w-full">
            Dashboard
        </div>
    )
}


Dashboard.getLayout = function getLayout(page){
    return (
        <AdminLayout>
            {page}
        </AdminLayout>
    )
}
export default Dashboard;