import { Badge } from "./badge";
import { Card } from "./card";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

export function HighlightCard() {
  return (
    <Card>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 bg-gray-200 gap-px">
        <div className="text-gray-400 p-2 bg-white">
          <p className="text-sm">Guide Views</p>
          <div className="flex gap-2 items-center py-2">
            <h3 className="text-black text-3xl font-bold">1.240</h3>
            <div>
              <Badge className={"pr-1.5 bg-green-400"}>
                23 <ArrowUpRight className="w-4 h-4" />
              </Badge>
            </div>
          </div>
          <div className="text-sm">Views (7 Days)</div>
        </div>

        <div className="text-gray-400 px-6 py-2 bg-white">
          <p className="text-sm">Checklists</p>
          <div className="flex gap-2 items-center py-2">
            <h3 className="text-black text-3xl font-bold">680</h3>
            <div>
              <Badge className={"bg-red-400 gap-0.5 pr-1.5"}>
                36 <ArrowDownRight className="w-4 h-4" />
              </Badge>
            </div>
          </div>
          <div className="text-sm">Views (7 Days)</div>
        </div>

        <div className="text-gray-400 px-6 py-2 bg-white">
          <p className="text-sm">Hotspots</p>
          <div className="flex gap-2 items-center py-2">
            <h3 className="text-black text-3xl font-bold">920</h3>
            <div>
              <Badge className={"bg-green-400 gap-0.5 pr-1.5"}>
                45 <ArrowUpRight className="w-4 h-4" />
              </Badge>
            </div>
          </div>
          <div className="text-sm">Views (7 Days)</div>
        </div>

        <div className="text-gray-400 px-6 py-2 bg-white">
          <p className="text-sm">Most Active Users</p>
          <div className="flex gap-2 items-center py-2">
            <h3 className="text-blue-500 text-3xl font-bold">1.565</h3>
            <div>
              <Badge className={"bg-green-400 gap-0.5 pr-1.5"}>
                45 <ArrowUpRight className="w-4 h-4" />
              </Badge>
            </div>
          </div>
          <div className="text-sm">Views (7 Days)</div>
        </div>
      </div>
    </Card>
  );
}
