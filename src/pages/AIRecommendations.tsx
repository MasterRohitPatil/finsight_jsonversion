import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, TrendingDown, AlertTriangle, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";

const recommendations = [
  {
    type: "saving" as const,
    icon: TrendingDown,
    title: "Reduce Software Subscription Costs",
    description: "You are overpaying for software subscriptions compared to similar SMEs in your industry. Consider consolidating tools or negotiating annual plans.",
    impact: "Potential saving: ₹4,500/month (₹54,000/year)",
    confidence: 94,
  },
  {
    type: "alert" as const,
    icon: AlertTriangle,
    title: "Marketing Spend Anomaly Detected",
    description: "An unusual 20% spike in marketing spend was detected on March 15th. This doesn't match historical patterns and may indicate unauthorized charges or billing errors.",
    impact: "Excess spend: ₹8,400 above expected",
    confidence: 89,
  },
  {
    type: "opportunity" as const,
    icon: Sparkles,
    title: "Revenue Growth Opportunity",
    description: "Based on your sales trends, increasing inventory by 15% for Q2 could capture unmet demand. Historical data shows seasonal uptick in April–June.",
    impact: "Projected additional revenue: ₹1,20,000",
    confidence: 78,
  },
  {
    type: "saving" as const,
    icon: CheckCircle2,
    title: "Optimize Payment Terms",
    description: "Negotiating net-45 terms with your top 3 suppliers could improve cash flow timing. Your current net-15 terms create unnecessary pressure.",
    impact: "Cash flow improvement: ₹2,30,000 float",
    confidence: 85,
  },
  {
    type: "alert" as const,
    icon: AlertTriangle,
    title: "Cash Runway Warning",
    description: "At current burn rate, your cash runway is approximately 6.2 months. If revenue drops by 10%, this falls to 4.8 months—below the recommended 6-month buffer.",
    impact: "Action needed within 45 days",
    confidence: 92,
  },
];

const typeStyles = {
  saving: "border-primary/30 bg-primary/5",
  alert: "border-destructive/30 bg-destructive/5",
  opportunity: "border-warning/30 bg-warning/5",
};

const iconStyles = {
  saving: "text-primary",
  alert: "text-destructive",
  opportunity: "text-warning",
};

const AIRecommendations = () => (
  <DashboardLayout>
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <Lightbulb className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-foreground">AI Recommendations</h2>
          <p className="text-muted-foreground text-sm">Smart insights powered by your financial data</p>
        </div>
      </div>

      <div className="space-y-4">
        {recommendations.map((rec, i) => (
          <Card key={i} className={`glass-card border ${typeStyles[rec.type]} transition-all hover:scale-[1.01]`}>
            <CardContent className="p-6">
              <div className="flex gap-4">
                <div className={`mt-0.5 ${iconStyles[rec.type]}`}>
                  <rec.icon className="w-5 h-5" />
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-semibold text-foreground">{rec.title}</h3>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground whitespace-nowrap">
                      {rec.confidence}% confidence
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{rec.description}</p>
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-sm font-medium text-foreground">{rec.impact}</span>
                    <button className="flex items-center gap-1 text-xs text-primary hover:underline">
                      View details <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </DashboardLayout>
);

export default AIRecommendations;
