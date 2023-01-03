import { Link } from "react-router-dom"


function AdminDashboard () {

    return(
        <div>
        <h1>Admin dashboard</h1>
        <Link to="/createAdmin">create Admin</Link>

        </div>
        
    )

}
export default AdminDashboard