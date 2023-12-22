import { Layout } from "antd";
import CompanyAdminTable from "../Table/CompanyAdmin";
import NavigationBar from "./ContentNav";
import { contentStyle } from "../styles/styles";
const { Content } = Layout;

const Simulations = () => (
  <Content style={contentStyle}>
    <NavigationBar/>
    <CompanyAdminTable/>
  </Content>
);

export default Simulations;
