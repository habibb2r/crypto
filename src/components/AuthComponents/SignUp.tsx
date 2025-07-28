"use client";
import thumbIcon from "@/assets/thumb.svg";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { SecondaryButton } from "../ui/Button";

interface SignUpFormProps {
  onSubmit?: (formData: FormData) => void;
}

interface FormData {
  name: string;
  uplineName: string;
  referralLink: string;
  profileImage: File | null;
}

const SignUpForm: React.FC<SignUpFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    uplineName: "MD.AKASH",
    referralLink: "xbuvhuckdjdjb4365joashsud",
    profileImage: null,
  });

  const [dragActive, setDragActive] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  // Clean up object URLs to prevent memory leaks
  useEffect(() => {
    return () => {
      if (imagePreview && imagePreview.startsWith("blob:")) {
        URL.revokeObjectURL(imagePreview);
      }
    };
  }, [imagePreview]);

  const handleInputChange = (
    field: keyof Omit<FormData, "profileImage">,
    value: string
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleImageUpload = (file: File) => {
    // Clean up previous preview URL
    if (imagePreview && imagePreview.startsWith("blob:")) {
      URL.revokeObjectURL(imagePreview);
    }

    setFormData((prev) => ({ ...prev, profileImage: file }));
    const newPreviewUrl = URL.createObjectURL(file);
    setImagePreview(newPreviewUrl);
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleImageUpload(e.dataTransfer.files[0]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleImageUpload(e.target.files[0]);
    }
  };

  return (
    <div className="mx-4 sm:mx-0">
      <div className="max-w-md mx-auto -mt-6 sm:mt-40 mb-2 sm:mb-20 bg-[#1A1A1A] rounded-2xl sm:rounded-3xl p-8">
        <div className="space-y-6">
          {/* Image Upload Section */}
          <div className="flex flex-col items-center space-y-4 -mt-16 sm:-mt-24">
            <div
              className={`w-22 h-22 sm:w-32 sm:h-32 bg-[#0D0D0D] sm:bg-[#404040] rounded-[20px] flex flex-col items-center justify-center cursor-pointer transition-all duration-200 ${
                dragActive ? "bg-[#313131] scale-105" : " sm:hover:bg-[#313131]"
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
              onClick={() => document.getElementById("fileInput")?.click()}
            >
              {imagePreview ? (
                <Image
                  src={imagePreview}
                  alt="Profile preview"
                  width={64}
                  height={64}
                  className="w-full h-full object-cover rounded-2xl"
                />
              ) : (
                <>
                  <Image
                    src={thumbIcon}
                    alt="Upload placeholder"
                    width={64}
                    height={64}
                    className=" w-10 h-10 sm:w-16 sm:h-16"
                  />
                </>
              )}
            </div>
            <input
              id="fileInput"
              type="file"
              accept="image/*"
              onChange={handleFileSelect}
              className="hidden"
            />
            <h3 className="text-gray-400 text-lg font-medium">Upload Image</h3>
          </div>

          {/* Form Fields */}
          <div className="space-y-4">
            {/* Name Field */}
            <div>
              <label className="block text-gray-400 text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                placeholder="Type here..."
                className="w-full bg-[#1A1A1A] border border-[#5F6368] rounded-full px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
              />
            </div>

            {/* Upline Name Field */}
            <div>
              <label className="block text-gray-400 text-sm font-medium mb-2">
                Upline Name
              </label>
              <input
                type="text"
                value={formData.uplineName}
                onChange={(e) =>
                  handleInputChange("uplineName", e.target.value)
                }
                className="w-full bg-[#1A1A1A] border border-[#5F6368] rounded-full px-6 py-4 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
              />
            </div>

            {/* Referral Link Field */}
            <div>
              <label className="block text-gray-400 text-sm font-medium mb-2">
                Referral Link
              </label>
              <input
                type="text"
                value={formData.referralLink}
                onChange={(e) =>
                  handleInputChange("referralLink", e.target.value)
                }
                className="w-full bg-[#1A1A1A] border border-[#5F6368] rounded-full px-6 py-4 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
              />
            </div>
          </div>

          {/* Sign Up Button */}

          <SecondaryButton
            onClick={() => onSubmit?.(formData)}
            title="Sign Up"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
