import {
  Title,
  Text,
  Tab,
  TabList,
  TabGroup,
  TabPanel,
  TabPanels,
  Card,
} from "@tremor/react";
import KpiCardGrid from "./components/kpi-card-grid";
import ChartView from "./components/chart-view";
import SalesPeopleTable from "./components/sales-people-table";

function App() {
  return (
    <main className="p-12">
      <Title>Dashboard</Title>
      <Text>My awesome saas dashboard project page.</Text>

      <TabGroup className="mt-6">
        <TabList>
          <Tab>Overview</Tab>
          <Tab>Detail</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <KpiCardGrid />
            <div className="mt-6">
              <Card>
                <ChartView />
              </Card>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="mt-6">
              <Card>
                <SalesPeopleTable />
              </Card>
            </div>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </main>
  );
}

export default App;
