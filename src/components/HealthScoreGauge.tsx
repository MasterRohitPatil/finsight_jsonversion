const score = 82;
const circumference = 2 * Math.PI * 70;
const offset = circumference - (score / 100) * circumference;

export function HealthScoreGauge() {
  return (
    <div className="glass-card rounded-2xl p-8 flex flex-col items-center justify-center">
      <h2 className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wider">
        Business Health Score
      </h2>
      <div className="relative w-48 h-48">
        <svg className="w-full h-full -rotate-90 gauge-ring" viewBox="0 0 160 160">
          <circle
            cx="80" cy="80" r="70"
            fill="none"
            stroke="hsl(var(--muted))"
            strokeWidth="10"
          />
          <circle
            cx="80" cy="80" r="70"
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className="transition-all duration-1000 ease-out"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-5xl font-bold text-foreground font-mono">{score}</span>
          <span className="text-xs text-muted-foreground mt-1">out of 100</span>
        </div>
      </div>
      <p className="text-sm text-success mt-4 font-medium">● Healthy</p>
    </div>
  );
}
