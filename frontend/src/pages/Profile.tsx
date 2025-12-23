
// import { useState, useEffect, useRef } from "react";
// import { useAuth } from "../constext/AuthContext";
// import { Sidebar } from "../components/Dashboard/Sidebar";
// import { useIsMobile } from "../context/UseIsMobile";
// // import { ClipboardIcon } from '@he'

// export function Profile() {
//   const { user } = useAuth();

//   const [isEditing, setIsEditing] = useState(false);
//   const [formData, setFormData] = useState<any>(null);
//   const [sidebarCollapsed, setSidebarCollapsed] = useState(true);
//   const [copied, setCopied] = useState(false);
//   const isMobile = useIsMobile();

//   const fileRef = useRef<HTMLInputElement>(null);

//   // stop scrolling in mobile screen 
//   useEffect(() => {
//     if (!sidebarCollapsed) {
//       document.body.style.overflow = "hidden";
//       document.documentElement.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "";
//       document.documentElement.style.overflow = "";
//     }

//     return () => {
//       document.body.style.overflow = "";
//       document.documentElement.style.overflow = "";
//     };
//   }, [sidebarCollapsed]);

//   useEffect(() => {
//     if (user) {
//       setFormData(user);
//     }
//   }, [user]);

//   if (!formData) return <div>Loading...</div>;

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleAvatarClick = () => {
//     fileRef.current?.click();
//   };

//   const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (!file) return;

//     const previewUrl = URL.createObjectURL(file);
//     setFormData({ ...formData, avatar: previewUrl });
//   };

//   const handleCopyPhone = () => {
//     if (!formData.phone) return;
//     navigator.clipboard.writeText(formData.phone);
//     setCopied(true);
//     setTimeout(() => setCopied(false), 1500);
//   };

//   return (
//     <div className="w-full flex items-start">
//       <Sidebar
//         isCollapsed={sidebarCollapsed}
//         onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
//       />

//       {isMobile && !sidebarCollapsed && (
//         <div
//           onClick={() => setSidebarCollapsed(true)}
//           className="fixed inset-0 bg-black/50 z-30"
//         />
//       )}

//       <div
//         className={`flex-1 min-h-screen p-6 transition-all duration-300 ease-in-out ${
//           isMobile ? 'ml-20' : sidebarCollapsed ? 'ml-20' : 'ml-64'
//         }`}
//       >
//         {/* Profile Card */}
//         <div className="lg:w-[500px] mx-auto p-6">
//           {/* Avatar Section */}
//           <div className="relative flex flex-col items-center -mt-16 pt-6">
//             <div
//               onClick={handleAvatarClick}
//               className="relative w-32 h-32 rounded-full border-4 border-white overflow-hidden cursor-pointer hover:scale-105 hover:opacity-90 transition-all duration-300"
//             >
//               <img
//                 src={formData.avatar || "/default-avatar.png"}
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-sm font-medium rounded-full opacity-0 hover:opacity-100 transition">
//                 Change
//               </div>
//             </div>

//             <h2 className="text-2xl font-bold mt-4 text-gray-800">{formData.name}</h2>
//             <span className="text-sm text-gray-500 capitalize">{formData.role}</span>
//           </div>

//           {/* Phone Section */}
//           <div className=" py-4 flex flex-col items-start relative">
//             <label className="text-sm text-gray-500 font-medium pr-2">Phone:</label>
//             <div className="w-full flex justify-between">

//                 <span className="text-gray-700">{formData.phone}</span>
//                 <div className="relative">
//                 {/* <ClipboardIcon
//                     onClick={handleCopyPhone}
//                     className="w-5 h-5 text-gray-400 cursor-pointer hover:text-gray-600"
//                 /> */}
//                 <svg onClick={handleCopyPhone} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 text-gray-400 cursor-pointer hover:text-gray-600">
//                     <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
//                 </svg>

//                 {/* Tooltip */}
//                 <div
//                     className={`absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-700 text-white text-xs rounded px-2 py-1 transition-opacity duration-200 pointer-events-none ${
//                     copied ? "opacity-100" : "opacity-0"
//                     }`}
//                 >
//                     {copied ? "Phone Number Copied!" : "Copy"}
//                 </div>
//                 </div>
//             </div>

//           </div>

//           {/* Bio Section */}
//           <div className=" py-2">
//             <label className="text-sm text-gray-500 font-medium">Bio:</label>
//             <textarea
//               name="bio"
//               value={formData.bio || ""}
//               disabled={!isEditing}
//               onChange={handleChange}
//               className={`mt-1 w-full rounded-xl border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition ${
//                 isEditing ? "bg-white" : "bg-gray-100 cursor-not-allowed"
//               }`}
//             />
//           </div>

//           {/* Edit/Save Button */}
//           <div className=" pb-6 flex justify-end">
//             <button
//               onClick={() => setIsEditing((prev) => !prev)}
//               className="px-5 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:from-blue-600 hover:to-indigo-600 transition"
//             >
//               {isEditing ? "Save" : "Edit"}
//             </button>
//           </div>

//           <input
//             ref={fileRef}
//             type="file"
//             accept="image/*"
//             hidden
//             onChange={handleAvatarChange}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }


import {
  Mail,
  Phone,
  Copy,
  Pencil,
  Check,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useIsMobile } from "../context/UseIsMobile";
import { Sidebar } from "../components/Dashboard/Sidebar";
import { useAuth } from "../constext/AuthContext";
import { DashboardNavbar } from "../components/Dashboard/DashboardNavbar";
import { DashboardFooter } from "../components/Dashboard/DashboardFooter";

export function Profile() {

  const { user } = useAuth()
  const [bio, setBio] = useState(user?.bio);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true);
  const isMobile = useIsMobile();
  const [isEditing, setIsEditing] = useState(false);
  const [copied, setCopied] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [profileImage, setProfileImage] = useState(user?.avatar);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleCopyPhone = () => {
    // Fallback method for environments where Clipboard API is blocked
    const textArea = document.createElement("textarea");
    textArea.value = `${user?.phone}`
    textArea.style.position = "fixed";
    textArea.style.left = "-999999px";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      document.execCommand("copy");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }

    document.body.removeChild(textArea);
  };
  
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

  const handleCopyEmail = () => {
    // Fallback method for environments where Clipboard API is blocked
    const textArea = document.createElement("textarea");
    textArea.value = `${user?.email}`;
    textArea.style.position = "fixed";
    textArea.style.left = "-999999px";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      document.execCommand("copy");
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }

    document.body.removeChild(textArea);
  };

  const handleSaveBio = () => {
    setIsEditing(false);
  };

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  

  return (
      <div className="w-full dark:bg-gray-900 flex justify-center">
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
        <DashboardNavbar 
        sidebarCollapsed={sidebarCollapsed}
        userName={user?.name}
        userRole={user?.role}
        userAvatar={user?.avatar}
        />
      <div className={`max-w-2xl w-full pt-16 pb-12`}>
        {/* Profile Content */}
        <div className={`flex-1 min-h-screen p-6 transition-all duration-300 ease-in-out ${
          isMobile ? 'ml-20' : sidebarCollapsed ? 'ml-20' : 'ml-64'
        }`}>
          {/* Profile Picture */}
          <div className="flex justify-center mb-4">
            <div className="relative group">
              <div
                onClick={handleImageClick}
                className="relative cursor-pointer"
              >
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-32 h-32 rounded-full object-cover shadow-lg"
                />
                {/* Overlay with "Change" text on hover (desktop) */}
                <div className="absolute inset-0 bg-black bg-opacity-50 rounded-full border-4 border-white opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white">Change</span>
                </div>
              </div>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </div>
          </div>

          {/* Name and Role */}
          <div className="text-center mb-6">
            <div className="mb-1 font-bold text-[25px] dark:text-white ">{user?.name}</div>
            <div className="flex items-center justify-center gap-2 text-gray-500 ">
              <p>{user?.role}</p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-3 p-3 dark:bg-slate-700 hover:dark:bg-slate-600 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
              <div className="flex items-center justify-center w-10 h-10 bg-blue-900 bg-blue-100 rounded-lg">
                <Phone className="w-5 h-5 dark:text-blue-400 text-blue-600" />
              </div>
              <div className="flex-1">
                <p className="text-slate-500 text-sm">Phone</p>
                <p className="text-slate-900 dark:text-white">{user?.phone}</p>
              </div>
              <button
                onClick={handleCopyPhone}
                className="p-2 hover:bg-slate-200 rounded-lg hover:dark:bg-slate-500 transition-colors"
                aria-label="Copy phone number"
              >
                {copied ? (
                  <Check className="w-5 h-5 text-green-600" />
                ) : (
                  <Copy className="w-5 h-5 text-slate-600 dark:text-slate-300" />
                )}
              </button>
            </div>

            <div className="flex items-center gap-3 p-3 dark:bg-slate-700 hover:dark:bg-slate-600 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
              <div className="flex items-center justify-center w-10 h-10 dark:bg-purple-900 bg-purple-100 rounded-lg">
                <Mail className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              </div>
              <div className="flex-1">
                <p className="text-slate-500 text-sm">Email</p>
                <p className="text-slate-900 dark:text-white">{user?.email}</p>
              </div>
              <button
                onClick={handleCopyEmail}
                className="p-2 hover:bg-slate-200 rounded-lg hover:dark:bg-slate-500 transition-colors"
                aria-label="Copy email"
              >
                {copiedEmail ? (
                  <Check className="w-5 h-5 text-green-600" />
                ) : (
                  <Copy className="w-5 h-5 text-slate-600 dark:text-slate-300" />
                )}
              </button>
            </div>
          </div>

          {/* Bio Section */}
          <div className="border-t border-slate-200 dark:border-slate-700 pt-6">
            <div className="flex items-center justify-between dark:text-white mb-3">
              <h2>About Me</h2>
              <button
                onClick={() =>
                  isEditing
                    ? handleSaveBio()
                    : setIsEditing(true)
                }
                className="flex items-center gap-2 px-3 py-1.5 text-sm text-blue-600 hover:bg-blue-50 rounded-lg transition-colors dark:text-blue-400 hover:dark:bg-slate-700"
              >
                {isEditing ? (
                  <>
                    <Check className="w-4 h-4" />
                    Save
                  </>
                ) : (
                  <>
                    <Pencil className="w-4 h-4" />
                    Edit
                  </>
                )}
              </button>
            </div>
            {isEditing ? (
              <textarea
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                className="w-full p-3 border border-slate-300 dark:border-gray-700 rounded-lg focus:outline-none dark:text-white focus:ring-2 focus:ring-blue-500 resize-none"
                rows={3}
              />
            ) : (
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {bio}
              </p>
            )}
          </div>

        </div>
        
        <DashboardFooter sidebarCollapsed={sidebarCollapsed} />
      </div>
    </div>
  );
}