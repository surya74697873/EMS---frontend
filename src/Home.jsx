import { Link } from 'react-router-dom';
import TableView from './TableView/TableView';
import "./Home.css"

const Home = () => {

  fetch('https://ems-backend-springboot-50026276785.development.catalystappsail.in/api/employees', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    credentials: 'include',
    body: new URLSearchParams({
      username: 'vijay',
      password: 'thalapathy69',
    }),
  })
    .then(res => {
      if (res.ok) {
        console.log("✅ Logged in successfully");
      } else {
        console.log("❌ Login failed");
      }
    });
  
  
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
        <TableView url="https://ems-backend-springboot-50026276785.development.catalystappsail.in/api/employees" />
        {/* <TableView url="http://localhost:1111/api/employees" /> */}
      </div>
    </div>
    );
}

export default Home;
