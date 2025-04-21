"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";
import { Input } from "./ui/input";

export default function CreateStoreForm({ onStoreCreated }) {
  const [storeName, setStoreName] = useState("");
  const [medicineName, setMedicineName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onStoreCreated({
      name: storeName,
      medicines: [{ name: medicineName, price, stock }],
    });
    setStoreName("");
    setMedicineName("");
    setPrice("");
    setStock("");
  };

  return (
    <Card className="mt-6 shadow-md hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="text-xl text-indigo-700">Create Store</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            placeholder="Store Name"
            value={storeName}
            onChange={(e) => setStoreName(e.target.value)}
            required
          />
          <Input
            placeholder="Medicine Name"
            value={medicineName}
            onChange={(e) => setMedicineName(e.target.value)}
            required
          />
          <Input
            placeholder="Price (₹)"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            type="number"
            required
          />
          <Input
            placeholder="Stock"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            type="number"
            required
          />
          <Button
            type="submit"
            className="w-full bg-gradient-to-br from-indigo-600 to-blue-500 hover:from-indigo-700 hover:to-blue-600"
          >
            Create Store & Add Medicine
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
