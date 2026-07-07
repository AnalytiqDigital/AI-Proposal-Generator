import {
  FaFileAlt,
  FaRobot,
  FaFileInvoice,
  FaUsers,
  FaChartLine,
} from "react-icons/fa";

import StatCard from "@/components/StatCard/StatCard";
import Card from "@/components/Card/Card";
import Button from "@/components/Button/Button";

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-4xl font-bold text-slate-800">Dashboard</h1>
        <p className="text-slate-600 mt-1">
          Welcome back! Here's what's happening with your proposals.
        </p>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        <StatCard title="Documents" value="124" icon={<FaFileAlt />} />
        <StatCard title="AI Requests" value="843" icon={<FaRobot />} />
        <StatCard title="Quotations" value="53" icon={<FaFileInvoice />} />
        <StatCard title="Users" value="18" icon={<FaUsers />} />
        <StatCard title="Growth" value="82%" icon={<FaChartLine />} />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        
        {/* Quick Actions */}
        <Card className="xl:col-span-1">
          <h2 className="text-2xl font-semibold mb-6 text-slate-800">Quick Actions</h2>
          <div className="space-y-4">
            <Button className="w-full">Generate Proposal</Button>
            <Button className="w-full">Generate Invoice</Button>
            <Button className="w-full">Generate Contract</Button>
          </div>
        </Card>

        {/* Recent Documents */}
        <Card className="xl:col-span-2">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-slate-800">Recent Documents</h2>
            <a href="#" className="text-blue-600 hover:underline text-sm font-medium">
              View All →
            </a>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200">
              <thead>
                <tr>
                  <th className="text-left py-4 text-sm font-medium text-slate-500">Document</th>
                  <th className="text-left py-4 text-sm font-medium text-slate-500">Status</th>
                  <th className="text-left py-4 text-sm font-medium text-slate-500">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr className="hover:bg-slate-50">
                  <td className="py-4 font-medium">Website Redesign Proposal</td>
                  <td className="py-4">
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                      Completed
                    </span>
                  </td>
                  <td className="py-4 text-slate-500">Today</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-4 font-medium">Company Profile Update</td>
                  <td className="py-4">
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                      Completed
                    </span>
                  </td>
                  <td className="py-4 text-slate-500">Yesterday</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-4 font-medium">Business Plan 2026</td>
                  <td className="py-4">
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-medium">
                      Draft
                    </span>
                  </td>
                  <td className="py-4 text-slate-500">2 days ago</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
}