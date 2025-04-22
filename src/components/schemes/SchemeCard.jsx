"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function SchemeCard({ scheme }) {
  return (
    <Card key={scheme.title} className="shadow-md cursor-pointer">
      <CardContent className="p-4 space-y-2">
        <h3 className="text-lg font-semibold">{scheme.title}</h3>
        <p className="text-sm text-muted-foreground">{scheme.location}</p>
        <p className="text-sm">{scheme.description}</p>
        <div className="flex flex-wrap gap-2">
          {scheme.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="outline-1 outline-green-300 hover:bg-green-300">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
