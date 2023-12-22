import { Menu } from "antd";


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
        Add
      </Menu.Item>
      <Menu.Item key="edit">
        Edit
      </Menu.Item>
      <Menu.Item key="delete">
        Delete
      </Menu.Item>
    </Menu>

    
  </>
);

export default NavigationBar;


