"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function OrderHistory({ orders }) {
  return (
    <Card className="mt-6 shadow-md hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="text-xl text-indigo-700">Order History</CardTitle>
      </CardHeader>
      <CardContent>
        {orders.length > 0 ? (
          <ul className="space-y-2">
            {orders.map((order) => (
              <li key={order.id} className="border-b py-2">
                <p>
                  <strong>Medicine:</strong> {order.medicine}
                </p>
                <p>
                  <strong>Quantity:</strong> {order.quantity}
                </p>
                <p>
                  <strong>Date:</strong> {order.date}
                </p>
                <p>
                  <strong>Total:</strong> {order.total}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No orders yet.</p>
        )}
      </CardContent>
    </Card>
  );
}
