
import { useGetBorrowSummaryQuery } from '@/redux/api/baseApi';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';

export default function BorrowSummary() {
  const { data, isLoading, isError } = useGetBorrowSummaryQuery({});


  if (isLoading) return <p className="p-4">Loading borrowed books...</p>;
  if (isError) return <p className="p-4 text-red-500">Error loading borrowed books.</p>;


  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {data?.data?.map((borrow:any, index:number) => (
        <Card key={index} className="shadow rounded-xl border border-gray-200">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">{borrow.title}</CardTitle>
            <CardDescription className="text-sm text-gray-500">Borrow Summary</CardDescription>
          </CardHeader>
          <CardContent className="text-sm space-y-2">
          
            <p><strong>Quantity:</strong> {borrow.totalQuantity}</p>
             <p><strong>Status:</strong> {borrow.isbn}</p>

            <p><strong>Status:</strong> {borrow.status || 'Borrowed'}</p>
            
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
