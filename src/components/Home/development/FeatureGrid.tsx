import React from "react";
import { Icon } from "@iconify/react";

const features = [
  {
    icon: "mdi:rocket-launch",
    title: "Fast Deployment",
    description: "Deploy your projects quickly and efficiently."
  },
  {
    icon: "mdi:code-tags",
    title: "Clean Code",
    description: "Maintain high code quality and readability."
  },
  {
    icon: "mdi:shield-check",
    title: "Security",
    description: "Built-in security features for peace of mind."
  },
  {
    icon: "mdi:cloud-sync",
    title: "Cloud Integration",
    description: "Seamless integration with cloud services."
  },
  {
    icon: "mdi:account-group",
    title: "Team Collaboration",
    description: "Collaborate with your team in real time."
  },
  {
    icon: "mdi:chart-line",
    title: "Analytics",
    description: "Track your progress with built-in analytics."
  }
];

const FeatureGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 py-10">
      {features.map((feature, idx) => (
        <div key={idx} className="flex flex-col items-center text-center p-4 bg-dark_grey rounded-xl shadow-md">
          <Icon icon={feature.icon} className="text-primary mb-4" width={40} height={40} />
          <h3 className="text-white text-lg font-semibold mb-2">{feature.title}</h3>
          <p className="text-muted text-sm">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FeatureGrid;
