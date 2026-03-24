import { AlertTriangle, TrendingDown, Lightbulb } from "lucide-react";

const alerts = [
  {
    type: "anomaly" as const,
    icon: AlertTriangle,
    emoji: "🔴",
    title: "Anomaly Detected",
    description:
      "Unusual 20% spike in 'Marketing' spend detected on March 15th. This is ₹12,000 above the 3-month average.",
    colorClass: "border-danger/30 bg-danger/5",
    iconColor: "text-danger",
  },
  {
    type: "warning" as const,
    icon: TrendingDown,
    emoji: "🟡",
    title: "Cash Flow Warning",
    description:
      "Cash flow trend suggests a potential deficit in 45 days if sales don't increase by 5%. Current burn rate: ₹3.1L/month.",
    colorClass: "border-warning/30 bg-warning/5",
    iconColor: "text-warning",
  },
  {
    type: "recommendation" as const,
    icon: Lightbulb,
    emoji: "🟢",
    title: "Cost Optimization",
    description:
      "You are overpaying for 'Software Subscriptions' compared to similar SMEs. Potential saving: ₹4,500/month (₹54,000/year).",
    colorClass: "border-success/30 bg-success/5",
    iconColor: "text-success",
  },
];

export function AlertCards() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-1">
          Actionable Insights & Anomaly Detection
        </h3>
        <p className="text-xs text-muted-foreground">AI-powered analysis of your financial data</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {alerts.map((alert) => (
          <div
            key={alert.type}
            className={`rounded-2xl border p-5 transition-all duration-300 hover:scale-[1.02] ${alert.colorClass}`}
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-lg">{alert.emoji}</span>
              <alert.icon className={`w-4 h-4 ${alert.iconColor}`} />
              <span className="text-sm font-semibold text-foreground">{alert.title}</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{alert.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
