"use client";

import { useEffect, useState } from "react";

interface TelegramUser {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
}

export default function Home() {
  const [user, setUser] = useState<TelegramUser | null>(null);

  useEffect(() => {
    const tg = window.Telegram?.WebApp;
    if (!tg) return;

    tg.ready(); // 通知 Telegram 页面已加载
    tg.expand(); // 可选，自动展开 WebApp 窗口

    setUser(tg.initDataUnsafe?.user ?? null);
  }, []);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white text-black dark:bg-black dark:text-white p-4">
      <h1 className="text-2xl font-bold mb-4">🎉 Telegram Mini App</h1>
      {user ? (
        <div className="text-center">
          <p>
            👤 {user.first_name} {user.last_name}
          </p>
          <p>🆔 {user.id}</p>
          <p>🌐 Username: @{user.username}</p>
        </div>
      ) : (
        <p>正在加载用户信息...</p>
      )}
    </main>
  );
}
