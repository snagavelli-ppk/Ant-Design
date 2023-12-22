import { Menu } from "antd";
import { Link, Routes, Route } from "react-router-dom";
import ComanyForm from "../Form/CompanyAdmin";


const NavigationBar = () => (
  <>
    <Menu
      mode="horizontal"
      style={{
        width: "100%",
        background: "inherit",
        marginBottom: 20,
        borderRadius: 5,
      }}
    >
      <Menu.Item key="add">
        <Link to="/add">ADD</Link>
      </Menu.Item>
      <Menu.Item key="edit">
        <Link to="/edit">EDIT</Link>
      </Menu.Item>
      <Menu.Item key="delete">
        <Link to="/delete">DELETE</Link>
      </Menu.Item>
    </Menu>

    <Routes>
      <Route path="/add" element={<ComanyForm />} />
      <Route path="/edit" element={<ComanyForm />} />
      <Route path="/delete" element={<h1>Coming Soon!!!</h1>} />
    </Routes>
  </>
);

export default NavigationBar;


