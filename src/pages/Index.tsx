import { DashboardLayout } from "@/components/DashboardLayout";
import { HealthScoreGauge } from "@/components/HealthScoreGauge";
import { QuickStats } from "@/components/QuickStats";
import { RevenueExpenseChart } from "@/components/RevenueExpenseChart";
import { CashRunwayChart } from "@/components/CashRunwayChart";
import { TransactionsTable } from "@/components/TransactionsTable";
import { AlertCards } from "@/components/AlertCards";

const Index = () => {
  const user = (() => {
    try { return JSON.parse(localStorage.getItem("user") || "{}"); }
    catch { return {}; }
  })();

  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto space-y-8">

        {/* Welcome Header */}
        {user.fullName && (
          <div>
            <h1 className="text-3xl font-bold text-foreground tracking-tight">
              {user.fullName}
            </h1>
            {user.companyName && (
              <p className="text-sm text-muted-foreground mt-1">{user.companyName}</p>
            )}
          </div>
        )}

        {/* Hero: Health Score + Quick Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <HealthScoreGauge />
          </div>
          <div className="lg:col-span-2">
            <QuickStats />
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <RevenueExpenseChart />
          <CashRunwayChart />
        </div>

        {/* Alerts */}
        <AlertCards />

        {/* Transactions */}
        <TransactionsTable />
      </div>
    </DashboardLayout>
  );
};

export default Index;
