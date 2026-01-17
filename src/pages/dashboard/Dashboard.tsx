import {
  ChefHat,
  Menu,
  Star,
  TrendingDown,
  TrendingUp,
  DollarSign,
  ShoppingBag,
  Users,
  Clock,
} from "lucide-react";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import RecentActivity from "../../components/RecentActivity";

// Stars component ko rename kiya StarRating mein conflict se bachne ke liye
const StarRating = ({ count }) => {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={
            i < count ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
          }
        />
      ))}
    </div>
  );
};

const Dashboard = () => {
  const dashboardCards = [
    {
      id: 1,
      title: "Today's Revenue",
      value: "Rs 2,847",
      percentage: "+12.5%",
      trend: <TrendingUp size={16} />,
      icon: DollarSign,
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      id: 2,
      title: "Total Orders",
      value: "156",
      percentage: "+8.2%",
      trend: <TrendingUp size={16} />,
      icon: ShoppingBag,
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
    },
    {
      id: 3,
      title: "Active Customers",
      value: "89",
      percentage: "+5.1%",
      trend: <TrendingUp size={16} />,
      icon: Users,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      id: 4,
      title: "Avg. Prep Time",
      value: "18 min",
      percentage: "-2.3%",
      trend: <TrendingDown size={16} />,
      icon: Clock,
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
    },
  ];

  const foodList = [
    {
      id: 1,
      name: "Chicken Biryani",
      orders: 45,
      price: 1125,
      rating: 4.8,
      stars: 5,
    },
    {
      id: 2,
      name: "Beef Burger",
      orders: 32,
      price: 850,
      rating: 4.5,
      stars: 4,
    },
    {
      id: 3,
      name: "Zinger Burger",
      orders: 60,
      price: 780,
      rating: 4.7,
      stars: 5,
    },
    {
      id: 4,
      name: "Chicken Karahi",
      orders: 28,
      price: 1850,
      rating: 4.6,
      stars: 4,
    },
    {
      id: 5,
      name: "Mutton Karahi",
      orders: 18,
      price: 2850,
      rating: 4.9,
      stars: 5,
    },
    {
      id: 6,
      name: "Chicken Tikka",
      orders: 40,
      price: 650,
      rating: 4.4,
      stars: 4,
    },
    {
      id: 7,
      name: "Malai Boti",
      orders: 22,
      price: 720,
      rating: 4.3,
      stars: 4,
    },
    {
      id: 8,
      name: "Fried Chicken",
      orders: 55,
      price: 980,
      rating: 4.6,
      stars: 5,
    },
    {
      id: 9,
      name: "Chicken Shawarma",
      orders: 48,
      price: 420,
      rating: 4.2,
      stars: 4,
    },
    {
      id: 10,
      name: "BBQ Platter",
      orders: 15,
      price: 3200,
      rating: 4.8,
      stars: 5,
    },
    {
      id: 11,
      name: "Chicken Pulao",
      orders: 35,
      price: 980,
      rating: 4.1,
      stars: 4,
    },
    {
      id: 12,
      name: "Seekh Kebab",
      orders: 26,
      price: 560,
      rating: 4.0,
      stars: 4,
    },
    {
      id: 13,
      name: "Chicken Nuggets",
      orders: 50,
      price: 600,
      rating: 4.3,
      stars: 4,
    },
    {
      id: 14,
      name: "Club Sandwich",
      orders: 33,
      price: 750,
      rating: 4.4,
      stars: 4,
    },
    {
      id: 15,
      name: "Chicken Roll",
      orders: 70,
      price: 300,
      rating: 4.6,
      stars: 5,
    },
    {
      id: 16,
      name: "Pizza Large",
      orders: 20,
      price: 1999,
      rating: 4.7,
      stars: 5,
    },
    {
      id: 17,
      name: "Pasta Alfredo",
      orders: 17,
      price: 1100,
      rating: 4.2,
      stars: 4,
    },
    {
      id: 18,
      name: "Grilled Chicken",
      orders: 24,
      price: 1450,
      rating: 4.5,
      stars: 5,
    },
    {
      id: 19,
      name: "Chicken Wings",
      orders: 52,
      price: 880,
      rating: 4.4,
      stars: 4,
    },
    {
      id: 20,
      name: "Beef Steak",
      orders: 12,
      price: 3500,
      rating: 4.9,
      stars: 5,
    },
  ];

  return (
    <div className="p-10 flex flex-col gap-8 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="w-full flex flex-col gap-4 sm:flex-row justify-between items-center">
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl font-bold">
            Welcome to <span className="text-yellow-600">Chicks Halal</span>
          </h2>
          <p className="text-xs text-muted-foreground font-semibold">
            Here's what's happening in your restaurant today
          </p>
        </div>
        <div>
          <Button className="flex gap-2 bg-amber-500 hover:bg-amber-400">
            <Menu size={18} />
            <span>View Today's Menu</span>
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {dashboardCards.map((item) => {
          const Icon = item.icon;
          return (
            <Card key={item.id} className="bg-white">
              <CardHeader>
                <CardTitle>
                  <div className="flex justify-between items-center">
                    <div
                      className={`${item.iconBg} p-2 rounded-full flex justify-center items-center`}
                    >
                      <Icon className={`${item.iconColor}`} size={20} />
                    </div>
                    <div
                      className={`flex gap-1 items-center ${item.iconColor} text-sm`}
                    >
                      {item.trend}
                      <span className="font-semibold">{item.percentage}</span>
                    </div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <h2 className="font-bold text-2xl">{item.value}</h2>
                <span className="text-xs font-semibold text-muted-foreground">
                  {item.title}
                </span>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Popular Items and Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Popular Items - 2/3 width */}
        <div className="lg:col-span-2">
          <Card className="bg-white">
            <CardHeader>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="bg-amber-100 text-yellow-800 flex justify-center items-center p-2 rounded-full">
                    <ChefHat size={20} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <CardTitle className="font-semibold">
                      Popular Items
                    </CardTitle>
                    <CardDescription className="text-xs font-semibold">
                      Top selling dishes today
                    </CardDescription>
                  </div>
                </div>
                <span className="text-xs text-yellow-700 font-bold bg-yellow-50 px-3 py-1 rounded-full">
                  Today
                </span>
              </div>
            </CardHeader>
            <CardContent
              className="max-h-[600px] overflow-y-auto "
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {foodList.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center py-3 border-b last:border-none hover:bg-gray-50 px-2 rounded transition-colors"
                >
                  <div className="flex justify-center items-center gap-3">
                    <span className="w-6 h-6 bg-green-200 flex justify-center items-center  rounded-full">
                      {item.id}
                    </span>

                    <div>
                      <h3 className="font-semibold text-sm">{item.name}</h3>
                      <p className="text-xs text-gray-500">
                        {item.orders} orders
                      </p>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="font-semibold text-sm">Rs {item.price}</p>
                    <div className="flex items-center gap-2 justify-end">
                      <StarRating count={item.stars} />
                      <span className="text-xs text-gray-500">
                        {item.rating}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity - 1/3 width */}
        <div className="lg:col-span-1">
          <RecentActivity />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
