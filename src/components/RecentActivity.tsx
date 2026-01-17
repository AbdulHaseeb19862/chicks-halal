import {
  ShoppingBag,
  DollarSign,
  Users,
  Calendar,
  TrendingUp,
  Star,
  Package,
  Clock,
  AlertCircle,
  CheckCircle,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

const RecentActivity = () => {
  const recentActivities = [
    {
      id: 1,
      icon: ShoppingBag,
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      title: "New order #2487 placed",
      time: "2 min ago",
    },
    {
      id: 2,
      icon: DollarSign,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      title: "Payment of Rs 4,850 received",
      time: "5 min ago",
    },
    {
      id: 3,
      icon: Users,
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
      title: "New customer registered",
      time: "12 min ago",
    },
    {
      id: 4,
      icon: Calendar,
      iconBg: "bg-yellow-100",
      iconColor: "text-yellow-600",
      title: "Table reservation for 4",
      time: "25 min ago",
    },
    {
      id: 5,
      icon: TrendingUp,
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-600",
      title: "Sales increased by 15%",
      time: "30 min ago",
    },
    {
      id: 6,
      icon: Star,
      iconBg: "bg-amber-100",
      iconColor: "text-amber-600",
      title: "New 5-star review received",
      time: "45 min ago",
    },
    {
      id: 7,
      icon: Package,
      iconBg: "bg-indigo-100",
      iconColor: "text-indigo-600",
      title: "Order #2485 ready for delivery",
      time: "1 hour ago",
    },
    {
      id: 8,
      icon: Clock,
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
      title: "Peak hours started",
      time: "1 hour ago",
    },
    {
      id: 9,
      icon: AlertCircle,
      iconBg: "bg-red-100",
      iconColor: "text-red-600",
      title: "Low stock alert: Chicken",
      time: "2 hours ago",
    },
    {
      id: 10,
      icon: CheckCircle,
      iconBg: "bg-teal-100",
      iconColor: "text-teal-600",
      title: "Order #2480 completed",
      time: "2 hours ago",
    },
  ];

  return (
    <Card className="bg-white h-full">
      <CardHeader>
        <div className="flex items-center gap-2">
          <div className="bg-blue-100 text-blue-600 w-8 h-8 flex justify-center items-center rounded-full ">
            <Calendar size={20} />
          </div>
          <div className="flex flex-col gap-1">
            <CardTitle className="font-semibold">Recent Activity</CardTitle>
            <CardDescription className="text-xs font-semibold">
              Latest updates
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent
        className="max-h-[600px] overflow-y-auto "
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {recentActivities.map((activity) => {
          const Icon = activity.icon;
          return (
            <div
              key={activity.id}
              className="flex items-start gap-3 py-3 border-b last:border-none hover:bg-gray-50 px-2 rounded transition-colors"
            >
              <div
                className={`${activity.iconBg} p-2 rounded-lg flex-shrink-0`}
              >
                <Icon className={activity.iconColor} size={18} />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-sm">{activity.title}</h4>
                <p className="text-xs text-gray-500 mt-0.5">{activity.time}</p>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default RecentActivity;
