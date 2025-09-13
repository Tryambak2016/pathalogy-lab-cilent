export default function ActivityItem() {
  const activities = [
    { text: "New test report submitted", time: "12 minutes ago", icon: "📝" },
    { text: "Patient record updated", time: "25 minutes ago", icon: "👤" },
    { text: "New patient registered", time: "1 hour ago", icon: "🆕" },
    { text: "Test results reviewed", time: "2 hours ago", icon: "🔍" }
  ];
  const randomIndex = Math.floor(Math.random() * activities.length);
  const activity = activities[randomIndex];
  
  return (
    <div className="flex items-start">
      <div className="flex-shrink-0 mt-1 mr-3 text-lg">
        {activity.icon}
      </div>
      <div>
        <p className="text-sm text-gray-800">{activity.text}</p>
        <p className="text-xs text-gray-500">{activity.time}</p>
      </div>
    </div>
  );
}