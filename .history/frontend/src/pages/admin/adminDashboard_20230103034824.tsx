import { Link } from "react-router-dom"


function AdminDashboard () {

    return(
        <div>
        <h1>Admin dashboard</h1>
        <Link to="/createAdmin">create Admin</Link>
        <Link to="/createInstructor">create Instructor</Link>
        <Link to="/createCorpTrainee">create Corporate Trainee</Link>
        <Link to="/createindivTrainee">create Individual Trainee</Link>



        </div>
        
    )

}
export default AdminDashboard