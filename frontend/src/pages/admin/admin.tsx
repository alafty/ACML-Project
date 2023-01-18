import { Link } from "react-router-dom"


function AdminDashboard () {

    return(
        <div>
        <h1>Admin dashboard</h1>
        <Link to="/viewAdmins">View Admin</Link> <br />
        <Link to="/viewCorporates">View Corporates</Link> <br />
        <Link to="/viewInstructors">View Instructors</Link> <br />
        <Link to="/viewCorpTrainee">View Corporate Trainee</Link> <br />
        <Link to="/viewindivTrainee">View Individual Trainee</Link> <br />
        <Link to="/viewProblems">View Problems</Link> <br />
        </div>
        
    )

}
export default AdminDashboard