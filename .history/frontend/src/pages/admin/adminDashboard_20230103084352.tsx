import { Link } from "react-router-dom"


function AdminDashboard () {

    return(
        <div>
        <h1>Admin dashboard</h1>
        <Link to="/createAdmin">create Admin</Link> <br />
        <Link to="/viewInstructors">View Instructors</Link> <br />
        <Link to="/createInstructor">create Instructor</Link> <br />
        <Link to="/createCorpTrainee">create Corporate Trainee</Link> <br />
        <Link to="/createindivTrainee">create Individual Trainee</Link> <br />
        <Link to="/viewProblems">View Problems</Link> <br />





        </div>
        
    )

}
export default AdminDashboard