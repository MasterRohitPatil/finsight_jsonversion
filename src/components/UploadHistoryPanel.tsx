import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { X, FileText, Trash2 } from "lucide-react";
import { deleteUpload, fetchUploads } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";

export function UploadHistoryPanel({ onClose }: { onClose: () => void }) {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const { data: uploads = [], isLoading } = useQuery({ queryKey: ['uploads'], queryFn: fetchUploads });

  const handleDelete = async (id: string, filename: string) => {
    if (!confirm(`Remove "${filename}" and its data from the dashboard?`)) return;
    try {
      await deleteUpload(id);
      toast({ title: "🗑️ Removed", description: `"${filename}" data removed.` });
      await queryClient.invalidateQueries();
    } catch {
      toast({ title: "Error", description: "Failed to remove upload.", variant: "destructive" });
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
      <div className="glass-card rounded-2xl w-full max-w-lg border border-border shadow-2xl">
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="text-lg font-semibold text-foreground">Upload History</h2>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground">
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-6 space-y-3 max-h-[60vh] overflow-y-auto">
          {isLoading && <p className="text-sm text-muted-foreground">Loading...</p>}
          {!isLoading && uploads.length === 0 && (
            <p className="text-sm text-muted-foreground text-center py-6">No CSV files uploaded yet.</p>
          )}
          {uploads.map((u: any) => (
            <div key={u.id} className="flex items-center justify-between gap-3 p-3 rounded-xl bg-muted/20 border border-border/50">
              <div className="flex items-center gap-3 min-w-0">
                <FileText className="w-4 h-4 text-primary shrink-0" />
                <div className="min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">{u.filename}</p>
                  <p className="text-xs text-muted-foreground">
                    {u.rowCount} rows · {new Date(u.uploadedAt).toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short" })}
                  </p>
                </div>
              </div>
              <button
                onClick={() => handleDelete(u.id, u.filename)}
                className="shrink-0 p-2 rounded-lg text-destructive hover:bg-destructive/10 transition-colors"
                title="Remove this upload"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
