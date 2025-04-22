"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function OrderHistory({ orders }) {
  return (
    <Card className="mt-6 shadow-md hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="text-xl text-[#20B486]">
          Order History
        </CardTitle>
      </CardHeader>
      <CardContent>
        {orders.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {orders.map((order) => (
              <div
                key={order.id}
                className="border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow bg-white"
              >
                <img
                  src={order.image || "https://placehold.co/300x200/ffffff/000000?text=Order"}
                  alt={order.medicine}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  {order.medicine}
                </h3>
                <p className="text-sm text-gray-600">
                  <strong>Quantity:</strong> {order.quantity}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Date:</strong> {order.date}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Total:</strong> ₹{order.total}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600">No orders yet.</p>
        )}
      </CardContent>
    </Card>
  );
}