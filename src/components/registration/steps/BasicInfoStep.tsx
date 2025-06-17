import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User, Mail, Lock } from "lucide-react";
import { RegistrationData } from "@/types/database";

interface BasicInfoStepProps {
  data: RegistrationData;
  onDataChange: (data: Partial<RegistrationData>) => void;
}

export const BasicInfoStep: React.FC<BasicInfoStepProps> = ({ data, onDataChange }) => {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              id="name"
              type="text"
              placeholder="John Doe"
              value={data.name}
              onChange={(e) => onDataChange({ name: e.target.value })}
              className="pl-10"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={data.email}
              onChange={(e) => onDataChange({ email: e.target.value })}
              className="pl-10"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={data.password}
              onChange={(e) => onDataChange({ password: e.target.value })}
              className="pl-10"
              required
            />
          </div>
          <p className="text-xs text-gray-500">
            Must be at least 6 characters long
          </p>
        </div>
      </div>

      <div className="bg-blue-50 p-4 rounded-lg">
        <h4 className="font-medium text-blue-900 mb-2">What's Next?</h4>
        <p className="text-sm text-blue-700">
          After entering your basic information, we'll help you choose the perfect business type 
          and template for your store, making setup quick and easy.
        </p>
      </div>
    </div>
  );
}; 