import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowDownLeft, ArrowUpRight, TrendingUp, DollarSign } from "lucide-react";
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, Legend,
} from "recharts";

const monthlyData = [
  { month: "Oct", inflow: 320000, outflow: 245000 },
  { month: "Nov", inflow: 380000, outflow: 260000 },
  { month: "Dec", inflow: 290000, outflow: 275000 },
  { month: "Jan", inflow: 410000, outflow: 310000 },
  { month: "Feb", inflow: 350000, outflow: 290000 },
  { month: "Mar", inflow: 420000, outflow: 330000 },
];

const cumulativeData = monthlyData.reduce<{ month: string; net: number }[]>((acc, d) => {
  const prev = acc.length ? acc[acc.length - 1].net : 0;
  acc.push({ month: d.month, net: prev + d.inflow - d.outflow });
  return acc;
}, []);

const stats = [
  { label: "Total Inflow", value: "₹21,70,000", icon: ArrowDownLeft, trend: "+12%", positive: true },
  { label: "Total Outflow", value: "₹17,10,000", icon: ArrowUpRight, trend: "+8%", positive: false },
  { label: "Net Cash Flow", value: "₹4,60,000", icon: DollarSign, trend: "+18%", positive: true },
  { label: "Avg Monthly Net", value: "₹76,667", icon: TrendingUp, trend: "+5%", positive: true },
];

const CashFlow = () => (
  <DashboardLayout>
    <div className="max-w-7xl mx-auto space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-foreground">Cash Flow Analysis</h2>
        <p className="text-muted-foreground text-sm mt-1">Track your money in and out over time</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => (
          <Card key={s.label} className="glass-card border-border/50">
            <CardContent className="p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">{s.label}</span>
                <s.icon className="w-4 h-4 text-muted-foreground" />
              </div>
              <p className="text-xl font-bold text-foreground">{s.value}</p>
              <span className={`text-xs font-medium ${s.positive ? "text-primary" : "text-destructive"}`}>{s.trend} vs last quarter</span>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="glass-card border-border/50">
          <CardHeader><CardTitle className="text-base">Inflow vs Outflow</CardTitle></CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(220 14% 18%)" />
                <XAxis dataKey="month" stroke="hsl(215 15% 55%)" fontSize={12} />
                <YAxis stroke="hsl(215 15% 55%)" fontSize={12} tickFormatter={(v) => `₹${v / 1000}k`} />
                <Tooltip contentStyle={{ background: "hsl(220 18% 13%)", border: "1px solid hsl(220 14% 18%)", borderRadius: 8, color: "hsl(210 20% 92%)" }} />
                <Legend />
                <Bar dataKey="inflow" fill="hsl(160 84% 39%)" radius={[4, 4, 0, 0]} name="Inflow" />
                <Bar dataKey="outflow" fill="hsl(0 84% 60%)" radius={[4, 4, 0, 0]} name="Outflow" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="glass-card border-border/50">
          <CardHeader><CardTitle className="text-base">Cumulative Net Cash Flow</CardTitle></CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={280}>
              <AreaChart data={cumulativeData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(220 14% 18%)" />
                <XAxis dataKey="month" stroke="hsl(215 15% 55%)" fontSize={12} />
                <YAxis stroke="hsl(215 15% 55%)" fontSize={12} tickFormatter={(v) => `₹${v / 1000}k`} />
                <Tooltip contentStyle={{ background: "hsl(220 18% 13%)", border: "1px solid hsl(220 14% 18%)", borderRadius: 8, color: "hsl(210 20% 92%)" }} />
                <Area type="monotone" dataKey="net" stroke="hsl(160 84% 39%)" fill="hsl(160 84% 39% / 0.15)" strokeWidth={2} name="Net Cash" />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  </DashboardLayout>
);

export default CashFlow;
