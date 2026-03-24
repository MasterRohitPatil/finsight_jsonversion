import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, TrendingDown, AlertTriangle, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { fetchAIRecommendations } from "@/lib/api";

const iconMap: Record<string, any> = {
  TrendingDown,
  AlertTriangle,
  Sparkles,
  CheckCircle2,
  Lightbulb
};

const typeStyles: Record<string, string> = {
  saving: "border-primary/30 bg-primary/5",
  alert: "border-destructive/30 bg-destructive/5",
  opportunity: "border-warning/30 bg-warning/5",
};

const iconStyles: Record<string, string> = {
  saving: "text-primary",
  alert: "text-destructive",
  opportunity: "text-warning",
};

export default function AIRecommendations() {
  const { data: recommendations, isLoading, error } = useQuery({
    queryKey: ['ai-recommendations'],
    queryFn: fetchAIRecommendations,
  });

  if (isLoading) return <DashboardLayout><div className="max-w-4xl mx-auto p-8 animate-pulse text-muted-foreground">Loading AI insights...</div></DashboardLayout>;
  if (error || !recommendations) return <DashboardLayout><div className="max-w-4xl mx-auto p-8 text-danger">Failed to load recommendations.</div></DashboardLayout>;

  return (
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
          {recommendations.map((rec: any, i: number) => {
            const IconComp = iconMap[rec.icon] || Lightbulb;
            return (
              <Card key={i} className={`glass-card border ${typeStyles[rec.type] || typeStyles.saving} transition-all hover:scale-[1.01]`}>
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className={`mt-0.5 ${iconStyles[rec.type] || iconStyles.saving}`}>
                      <IconComp className="w-5 h-5" />
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
            );
          })}
        </div>
      </div>
    </DashboardLayout>
  );
}
