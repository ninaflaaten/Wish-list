"use client";
import { useEffect, useState } from "react";

export default function WishlistHeader() {
  const [daysLeft, setDaysLeft] = useState<number | null>(null);

  useEffect(() => {
    const today = new Date();
    const christmas = new Date(today.getFullYear(), 11, 24); // 24. desember
    const diffTime = christmas.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    setDaysLeft(diffDays);
  }, []);

  return (
    <div>
      {daysLeft !== null ? (
        <p>{daysLeft} days left until Christmas!</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
