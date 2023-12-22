import { Layout } from "antd";
import CompanyAdminTable from "../Table/CompanyAdmin";
import { contentStyle } from "../styles/styles";

import NavigationBar from "./ContentNav";

const { Content } = Layout;

const Tutorials = () => (
  <Content style={contentStyle}>
    <NavigationBar/>
    <CompanyAdminTable/>
  </Content>
);

export default Tutorials;
