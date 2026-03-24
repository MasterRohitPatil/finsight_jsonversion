import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  PieChart, Pie, Cell, Tooltip, ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
} from "recharts";

const categories = [
  { name: "Payroll", value: 145000, color: "hsl(160 84% 39%)" },
  { name: "Rent", value: 55000, color: "hsl(200 80% 50%)" },
  { name: "Marketing", value: 42000, color: "hsl(38 92% 50%)" },
  { name: "Software", value: 28000, color: "hsl(280 70% 55%)" },
  { name: "Inventory", value: 65000, color: "hsl(0 84% 60%)" },
  { name: "Utilities", value: 12000, color: "hsl(180 60% 45%)" },
];

const monthlyTrend = [
  { month: "Oct", payroll: 140000, rent: 55000, marketing: 30000, other: 95000 },
  { month: "Nov", payroll: 142000, rent: 55000, marketing: 35000, other: 98000 },
  { month: "Dec", payroll: 143000, rent: 55000, marketing: 38000, other: 100000 },
  { month: "Jan", payroll: 145000, rent: 55000, marketing: 42000, other: 105000 },
  { month: "Feb", payroll: 144000, rent: 55000, marketing: 40000, other: 102000 },
  { month: "Mar", payroll: 145000, rent: 55000, marketing: 42000, other: 105000 },
];

const total = categories.reduce((s, c) => s + c.value, 0);

const Expenses = () => (
  <DashboardLayout>
    <div className="max-w-7xl mx-auto space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-foreground">Expense Analysis</h2>
        <p className="text-muted-foreground text-sm mt-1">Breakdown of where your money goes</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="glass-card border-border/50">
          <CardHeader><CardTitle className="text-base">Expense Distribution</CardTitle></CardHeader>
          <CardContent className="flex items-center gap-6">
            <ResponsiveContainer width="50%" height={240}>
              <PieChart>
                <Pie data={categories} dataKey="value" cx="50%" cy="50%" innerRadius={55} outerRadius={90} paddingAngle={3}>
                  {categories.map((c, i) => <Cell key={i} fill={c.color} />)}
                </Pie>
                <Tooltip contentStyle={{ background: "hsl(220 18% 13%)", border: "1px solid hsl(220 14% 18%)", borderRadius: 8, color: "hsl(210 20% 92%)" }} formatter={(v: number) => `₹${v.toLocaleString("en-IN")}`} />
              </PieChart>
            </ResponsiveContainer>
            <div className="space-y-2.5 flex-1">
              {categories.map((c) => (
                <div key={c.name} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: c.color }} />
                    <span className="text-muted-foreground">{c.name}</span>
                  </div>
                  <span className="text-foreground font-medium">{((c.value / total) * 100).toFixed(1)}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card border-border/50">
          <CardHeader><CardTitle className="text-base">Monthly Expense Trend</CardTitle></CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={240}>
              <BarChart data={monthlyTrend}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(220 14% 18%)" />
                <XAxis dataKey="month" stroke="hsl(215 15% 55%)" fontSize={12} />
                <YAxis stroke="hsl(215 15% 55%)" fontSize={12} tickFormatter={(v) => `₹${v / 1000}k`} />
                <Tooltip contentStyle={{ background: "hsl(220 18% 13%)", border: "1px solid hsl(220 14% 18%)", borderRadius: 8, color: "hsl(210 20% 92%)" }} />
                <Bar dataKey="payroll" stackId="a" fill="hsl(160 84% 39%)" name="Payroll" />
                <Bar dataKey="rent" stackId="a" fill="hsl(200 80% 50%)" name="Rent" />
                <Bar dataKey="marketing" stackId="a" fill="hsl(38 92% 50%)" name="Marketing" />
                <Bar dataKey="other" stackId="a" fill="hsl(280 70% 55%)" radius={[4, 4, 0, 0]} name="Other" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card className="glass-card border-border/50">
        <CardHeader><CardTitle className="text-base">Top Expenses This Month</CardTitle></CardHeader>
        <CardContent>
          <div className="space-y-4">
            {categories.sort((a, b) => b.value - a.value).map((c) => (
              <div key={c.name} className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground w-24">{c.name}</span>
                <div className="flex-1 h-2 rounded-full bg-muted overflow-hidden">
                  <div className="h-full rounded-full transition-all" style={{ width: `${(c.value / categories[0].value) * 100}%`, background: c.color }} />
                </div>
                <span className="text-sm font-medium text-foreground w-24 text-right">₹{c.value.toLocaleString("en-IN")}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  </DashboardLayout>
);

export default Expenses;
