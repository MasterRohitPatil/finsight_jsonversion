import { IndianRupee, TrendingUp, TrendingDown, Percent } from "lucide-react";

const stats = [
  {
    label: "Total Revenue",
    value: "₹24,58,000",
    change: "+12.5%",
    positive: true,
    icon: TrendingUp,
    glow: "stat-glow-green",
  },
  {
    label: "Total Expenses",
    value: "₹18,32,000",
    change: "+8.2%",
    positive: false,
    icon: TrendingDown,
    glow: "stat-glow-red",
  },
  {
    label: "Net Margin",
    value: "25.4%",
    change: "+3.1%",
    positive: true,
    icon: Percent,
    glow: "stat-glow-green",
  },
];

export function QuickStats() {
  return (
    <div className="grid grid-cols-1 gap-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className={`glass-card-hover rounded-2xl p-5 ${stat.glow}`}
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              {stat.label}
            </span>
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
              stat.positive ? "bg-success/10" : "bg-danger/10"
            }`}>
              <stat.icon className={`w-4 h-4 ${stat.positive ? "text-success" : "text-danger"}`} />
            </div>
          </div>
          <p className="text-2xl font-bold text-foreground font-mono">{stat.value}</p>
          <p className={`text-xs font-medium mt-1 ${stat.positive ? "text-success" : "text-danger"}`}>
            {stat.change} vs last month
          </p>
        </div>
      ))}
    </div>
  );
}
