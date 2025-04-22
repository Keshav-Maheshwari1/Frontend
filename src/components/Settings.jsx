"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Settings({ language, setLanguage, languages }) {
  return (
    <Card className="mt-6 bg-white shadow-lg rounded-xl hover:shadow-2xl transition-shadow p-6">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold text-[#20B486]">Settings</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <h3 className="text-lg font-medium text-gray-700">Select Language</h3>
          <Select value={language} onValueChange={setLanguage}>
            <SelectTrigger className="w-full rounded-lg border-gray-300 shadow-sm focus:ring-[#20B486] focus:border-[#20B486] transition-all">
              <SelectValue placeholder="Select Language" />
            </SelectTrigger>
            <SelectContent className="rounded-lg shadow-lg">
              {languages.map((lang) => (
                <SelectItem key={lang} value={lang} className="hover:bg-[#20B486] hover:text-white transition-all">
                  {lang}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>
  );
}
