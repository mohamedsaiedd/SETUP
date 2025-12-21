
import { useState, useEffect, useRef } from "react";
import { useAuth } from "../constext/AuthContext";
import { Sidebar } from "../components/Dashboard/Sidebar";
import { useIsMobile } from "../context/UseIsMobile";
// import { ClipboardIcon } from '@he'

export function Profile() {
  const { user } = useAuth();

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<any>(null);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true);
  const [copied, setCopied] = useState(false);
  const isMobile = useIsMobile();

  const fileRef = useRef<HTMLInputElement>(null);

  // stop scrolling in mobile screen 
  useEffect(() => {
    if (!sidebarCollapsed) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [sidebarCollapsed]);

  useEffect(() => {
    if (user) {
      setFormData(user);
    }
  }, [user]);

  if (!formData) return <div>Loading...</div>;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAvatarClick = () => {
    fileRef.current?.click();
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const previewUrl = URL.createObjectURL(file);
    setFormData({ ...formData, avatar: previewUrl });
  };

  const handleCopyPhone = () => {
    if (!formData.phone) return;
    navigator.clipboard.writeText(formData.phone);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="w-full flex items-start">
      <Sidebar
        isCollapsed={sidebarCollapsed}
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
      />

      {isMobile && !sidebarCollapsed && (
        <div
          onClick={() => setSidebarCollapsed(true)}
          className="fixed inset-0 bg-black/50 z-30"
        />
      )}

      <div
        className={`flex-1 min-h-screen p-6 transition-all duration-300 ease-in-out ${
          isMobile ? 'ml-20' : sidebarCollapsed ? 'ml-20' : 'ml-64'
        }`}
      >
        {/* Profile Card */}
        <div className="lg:w-[500px] mx-auto p-6">
          {/* Avatar Section */}
          <div className="relative flex flex-col items-center -mt-16 pt-6">
            <div
              onClick={handleAvatarClick}
              className="relative w-32 h-32 rounded-full border-4 border-white overflow-hidden cursor-pointer hover:scale-105 hover:opacity-90 transition-all duration-300"
            >
              <img
                src={formData.avatar || "/default-avatar.png"}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-sm font-medium rounded-full opacity-0 hover:opacity-100 transition">
                Change
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-4 text-gray-800">{formData.name}</h2>
            <span className="text-sm text-gray-500 capitalize">{formData.role}</span>
          </div>

          {/* Phone Section */}
          <div className=" py-4 flex flex-col items-start relative">
            <label className="text-sm text-gray-500 font-medium pr-2">Phone:</label>
            <div className="w-full flex justify-between">

                <span className="text-gray-700">{formData.phone}</span>
                <div className="relative">
                {/* <ClipboardIcon
                    onClick={handleCopyPhone}
                    className="w-5 h-5 text-gray-400 cursor-pointer hover:text-gray-600"
                /> */}
                <svg onClick={handleCopyPhone} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 text-gray-400 cursor-pointer hover:text-gray-600">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
                </svg>

                {/* Tooltip */}
                <div
                    className={`absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-700 text-white text-xs rounded px-2 py-1 transition-opacity duration-200 pointer-events-none ${
                    copied ? "opacity-100" : "opacity-0"
                    }`}
                >
                    {copied ? "Phone Number Copied!" : "Copy"}
                </div>
                </div>
            </div>

          </div>

          {/* Bio Section */}
          <div className=" py-2">
            <label className="text-sm text-gray-500 font-medium">Bio:</label>
            <textarea
              name="bio"
              value={formData.bio || ""}
              disabled={!isEditing}
              onChange={handleChange}
              className={`mt-1 w-full rounded-xl border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition ${
                isEditing ? "bg-white" : "bg-gray-100 cursor-not-allowed"
              }`}
            />
          </div>

          {/* Edit/Save Button */}
          <div className=" pb-6 flex justify-end">
            <button
              onClick={() => setIsEditing((prev) => !prev)}
              className="px-5 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:from-blue-600 hover:to-indigo-600 transition"
            >
              {isEditing ? "Save" : "Edit"}
            </button>
          </div>

          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            hidden
            onChange={handleAvatarChange}
          />
        </div>
      </div>
    </div>
  );
}

