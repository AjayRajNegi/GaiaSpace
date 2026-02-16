import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    number: "",
    companyName: "",
    designation: "",
    reason: "",
    message: "",
  });

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  const handleChange = (field: any, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="mx-auto mt-[200px] flex min-h-screen max-w-7xl items-center justify-center rounded-3xl border-[01px] border-[#252941] bg-[#03070a] p-4 text-[#cbcbcb]">
      <div className="w-full max-w-6xl">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-5xl font-light text-white">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="text-lg text-gray-400">
            Connect To GaiaSpace, join us or ask us anything you desire
          </p>
        </div>

        <div className="space-y-6">
          {/* Name Row */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="space-y-">
              <Label
                htmlFor="firstName"
                className="text-lg font-thin text-[#cbcbcb]"
              >
                First Name<span className="text-red-500">*</span>
              </Label>
              <Input
                id="firstName"
                placeholder="Jane"
                value={formData.firstName}
                onChange={(e) => handleChange("firstName", e.target.value)}
                className="mt-2 rounded-lg border-[#0f1112] bg-black text-[#cbcbcb]"
              />
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="middleName"
                className="text-lg font-thin text-[#cbcbcb]"
              >
                Middle Name
              </Label>
              <Input
                id="middleName"
                placeholder="William"
                value={formData.middleName}
                onChange={(e) => handleChange("middleName", e.target.value)}
                className="mt-2 rounded-lg border-[#0f1112] bg-black text-[#cbcbcb]"
              />
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="lastName"
                className="text-lg font-thin text-[#cbcbcb]"
              >
                Last Name<span className="text-red-500">*</span>
              </Label>
              <Input
                id="lastName"
                placeholder="Doe"
                value={formData.lastName}
                onChange={(e) => handleChange("lastName", e.target.value)}
                className="mt-2 rounded-lg border-[#0f1112] bg-black text-[#cbcbcb]"
              />
            </div>
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-lg font-thin text-[#cbcbcb]">
              Email<span className="text-red-500">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Name@mail.com"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className="mt-2 rounded-lg border-[#0f1112] bg-black text-[#cbcbcb]"
            />
          </div>

          {/* Phone Number */}
          <div className="space-y-2">
            <Label
              htmlFor="number"
              className="text-lg font-thin text-[#cbcbcb]"
            >
              Number<span className="text-red-500">*</span>
            </Label>
            <Input
              id="number"
              type="tel"
              placeholder="Phone number"
              value={formData.number}
              onChange={(e) => handleChange("number", e.target.value)}
              className="mt-2 rounded-lg border-[#0f1112] bg-black text-[#cbcbcb]"
            />
          </div>

          {/* Company Name */}
          <div className="relative space-y-2">
            <Label
              htmlFor="companyName"
              className="text-lg font-thin text-[#cbcbcb]"
            >
              Company Name<span className="text-red-500">*</span>
            </Label>
            <Select
              value={formData.companyName}
              onValueChange={(value) => handleChange("companyName", value)}
            >
              <SelectTrigger className="w-full border-gray-700 bg-transparent text-white focus:border-blue-500">
                <SelectValue placeholder="Select..." />
              </SelectTrigger>

              {/* make it a floating overlay, limit height and enable scrolling */}
              <SelectContent className="absolute right-0 left-0 z-50 mt-2 max-h-60 w-full overflow-auto border-gray-700 bg-gray-900 text-white">
                <SelectItem value="company1">Company 1</SelectItem>
                <SelectItem value="company2">Company 2</SelectItem>
                <SelectItem value="company3">Company 3</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Designation and Reason Row */}
          <div className="grid grid-cols-1 gap-6 text-lg font-thin text-[#cbcbcb] md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="designation" className="text-[#cbcbcb]">
                Designation<span className="text-red-500">*</span>
              </Label>
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="reason"
                className="text-lg font-thin text-[#cbcbcb]"
              >
                Select a reason
              </Label>
            </div>
          </div>

          {/* Message */}
          <div className="space-y-2">
            <Label
              htmlFor="message"
              className="text-lg font-thin text-[#cbcbcb]"
            >
              Write to us<span className="text-red-500">*</span>
            </Label>
            <Textarea
              id="message"
              placeholder="Leave Us A Message"
              value={formData.message}
              onChange={(e) => handleChange("message", e.target.value)}
              className="mt-2 min-h-[120px] rounded-lg border-[#0f1112] bg-black text-[#cbcbcb]"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-6">
            <Button
              onClick={handleSubmit}
              className="rounded-lg bg-blue-600 px-12 py-6 text-lg text-[#cbcbcb] hover:bg-blue-700"
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
