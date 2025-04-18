// components/dashboard/UserProfile.js
"use client";

import Image from "next/image";

export default function UserProfile() {
  const user = {
    name: "Tope Fasasi",
    email: "tope@jsmastery.pro",
    avatar: "/jsmastery2.jpg",
  };

  return (
    <div className="flex flex-col mb-10">
      <div className="w-16 h-16 mt-20 mb-5 relative rounded-full bg-blue-100 flex items-center justify-center p-2 border-2 border-white shadow-md">
        <Image
          src={user.avatar}
          alt="User avatar"
          width={60}
          height={60}
          className="rounded-full"
          priority
        />
      </div>
      <h3 className="text-xl font-bold">{user.name}</h3>
      <p className="text-gray-600">{user.email}</p>
    </div>
  );
}
