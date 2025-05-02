import { Link } from 'react-router-dom';
import TableView from './TableView/TableView';
import "./Home.css"

const Home = () => {
    return (
        <div className='EMS'>
      <div className="Headers">
            <Link to={"/"} className='Home'>
        <h1>Employee Management System</h1>
        </Link>
            <Link to={"/add"} className='Add'>
                <h2>Add Employee</h2>
            </Link>
      </div>
      <div>
        <TableView url="https://ems-backend-springboot-50026276785.development.catalystappsail.in" />
        {/* <TableView url="http://localhost:1111/api/employees" /> */}
      </div>
    </div>
    );
}

export default Home;
