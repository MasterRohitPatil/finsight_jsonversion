import { useState } from "react";
import { ArrowUpDown } from "lucide-react";

type Transaction = {
  id: number;
  date: string;
  description: string;
  category: string;
  amount: number;
  type: "income" | "expense";
};

const transactions: Transaction[] = [
  { id: 1, date: "2025-03-22", description: "Office Rent - March", category: "Rent", amount: 85000, type: "expense" },
  { id: 2, date: "2025-03-20", description: "Bulk Inventory Purchase", category: "Inventory", amount: 245000, type: "expense" },
  { id: 3, date: "2025-03-18", description: "Employee Payroll", category: "Payroll", amount: 320000, type: "expense" },
  { id: 4, date: "2025-03-17", description: "Product Sales - B2B", category: "Sales", amount: 580000, type: "income" },
  { id: 5, date: "2025-03-15", description: "Google Ads Campaign", category: "Marketing", amount: 72000, type: "expense" },
  { id: 6, date: "2025-03-14", description: "Retail Sales - Store", category: "Sales", amount: 195000, type: "income" },
  { id: 7, date: "2025-03-12", description: "SaaS Subscriptions", category: "Software", amount: 18500, type: "expense" },
  { id: 8, date: "2025-03-10", description: "Consulting Revenue", category: "Sales", amount: 120000, type: "income" },
];

export function TransactionsTable() {
  const [sortKey, setSortKey] = useState<keyof Transaction>("date");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("desc");

  const sorted = [...transactions].sort((a, b) => {
    const av = a[sortKey];
    const bv = b[sortKey];
    if (typeof av === "number" && typeof bv === "number") return sortDir === "asc" ? av - bv : bv - av;
    return sortDir === "asc" ? String(av).localeCompare(String(bv)) : String(bv).localeCompare(String(av));
  });

  const toggle = (key: keyof Transaction) => {
    if (sortKey === key) setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    else { setSortKey(key); setSortDir("desc"); }
  };

  const headers: { key: keyof Transaction; label: string }[] = [
    { key: "date", label: "Date" },
    { key: "description", label: "Description" },
    { key: "category", label: "Category" },
    { key: "amount", label: "Amount" },
  ];

  return (
    <div className="glass-card rounded-2xl p-6">
      <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-6">
        Recent Transactions
      </h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              {headers.map((h) => (
                <th
                  key={h.key}
                  className="text-left py-3 px-4 text-xs font-medium text-muted-foreground uppercase tracking-wider cursor-pointer hover:text-foreground transition-colors"
                  onClick={() => toggle(h.key)}
                >
                  <span className="inline-flex items-center gap-1">
                    {h.label}
                    <ArrowUpDown className="w-3 h-3" />
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sorted.map((tx) => (
              <tr key={tx.id} className="border-b border-border/50 hover:bg-accent/30 transition-colors">
                <td className="py-3 px-4 font-mono text-xs text-muted-foreground">{tx.date}</td>
                <td className="py-3 px-4 text-foreground">{tx.description}</td>
                <td className="py-3 px-4">
                  <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-accent text-accent-foreground">
                    {tx.category}
                  </span>
                </td>
                <td className={`py-3 px-4 font-mono font-medium ${tx.type === "income" ? "text-success" : "text-danger"}`}>
                  {tx.type === "income" ? "+" : "-"}₹{tx.amount.toLocaleString("en-IN")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
