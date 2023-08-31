import { Card } from "./card";
import { PerformanceChart } from "./performance-chart";
import ViewPerfomanceChart from "./view-performance-chart";
import { Dot } from "lucide-react";

export function ReportCard() {
  return (
    <div className="flex sm:flex-col xl:flex-row gap-4">
      <Card className="flex-1 p-0">
        <div className="space-y-4">
          <div className="border-b border-gray-200 p-4">
            <h3 className="text-gray-700 font-medium">Guide Performance</h3>
          </div>
          <div className="pb-4">
            <PerformanceChart />
          </div>
        </div>
      </Card>
      <Card className="w-full max-w-[18rem] p-0">
        <div className="p-4 border-b">
          <h3 className="text-gray-700 font-medium">Total View Performance</h3>
        </div>

        <div className="relative">
          <ViewPerfomanceChart />
          <div className="text-center absolute inset-x-0 bottom-2">
            <div className="text-xs text-gray-400">Total Count</div>
            <p className="text-[1.7em] font-extrabold leading-tight text-gray-700">
              1.375
            </p>
          </div>
        </div>

        <div className="text-center py-4 px-6 text-gray-500 space-y-4">
          <p>Give your interactions a boost – keep your info current! 🚀</p>
          <button className="py-2 px-8 rounded-xl text-white bg-blue-500 shadow-md">
            Guide views
          </button>
        </div>

        <div className="p-4 border-t">
          <div className="flex justify-between gap-4">
            <p className="inline-flex items-center text-sm">
              <Dot className="w-10 h-10 text-blue-500" /> View Count
            </p>
            <p className="inline-flex items-center text-sm">
              <Dot className="w-10 h-10 text-orange-500" /> Percentage
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
