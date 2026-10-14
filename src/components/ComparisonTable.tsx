import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

type Row = { label: string; a: string; b: string };

interface ComparisonTableProps {
  columns: [string, string];
  rows: Row[];
}

// Two-way comparison: a card per row on phones (a 3-column table squeezes each
// cell to ~13 characters at 375px), the plain table from md up.
const ComparisonTable = ({ columns, rows }: ComparisonTableProps) => (
  <>
    <div className="md:hidden space-y-4">
      {rows.map((r) => (
        <div key={r.label} className="bg-card border border-border rounded-lg p-5">
          <p className="text-base font-semibold text-foreground mb-3">{r.label}</p>
          <dl className="space-y-3">
            <div>
              <dt className="text-sm font-medium text-gold">{columns[0]}</dt>
              <dd className="text-muted-foreground leading-relaxed">{r.a}</dd>
            </div>
            <div className="border-t border-border pt-3">
              <dt className="text-sm font-medium text-gold">{columns[1]}</dt>
              <dd className="text-muted-foreground leading-relaxed">{r.b}</dd>
            </div>
          </dl>
        </div>
      ))}
    </div>
    <div className="hidden md:block border border-border rounded-lg overflow-hidden">
      <Table className="[&_td]:align-top [&_td]:p-4 [&_th]:px-4 [&_th]:align-bottom">
        <TableHeader>
          <TableRow>
            <TableHead className="text-gold"></TableHead>
            <TableHead className="text-gold">{columns[0]}</TableHead>
            <TableHead className="text-gold">{columns[1]}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((r) => (
            <TableRow key={r.label}>
              <TableCell className="font-semibold">{r.label}</TableCell>
              <TableCell>{r.a}</TableCell>
              <TableCell>{r.b}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  </>
);

export default ComparisonTable;
