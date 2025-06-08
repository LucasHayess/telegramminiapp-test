// global.d.ts
export {};

declare global {
  interface TelegramUser {
    id: number;
    is_bot?: boolean;
    first_name: string;
    last_name?: string;
    username?: string;
    language_code?: string;
    allows_write_to_pm?: boolean;
  }

  interface TelegramThemeParams {
    bg_color?: string;
    text_color?: string;
    hint_color?: string;
    link_color?: string;
    button_color?: string;
    button_text_color?: string;
    secondary_bg_color?: string;
  }

  interface TelegramWebApp {
    initData: string;
    initDataUnsafe: {
      query_id?: string;
      user?: TelegramUser;
      auth_date?: string;
      hash?: string;
    };
    version: string;
    platform: string;
    colorScheme: "light" | "dark";
    themeParams: TelegramThemeParams;
    isExpanded: boolean;
    viewportHeight: number;
    viewportStableHeight: number;
    isClosingConfirmationEnabled: boolean;

    ready(): void;
    expand(): void;
    close(): void;
    sendData(data: string): void;
    setHeaderColor(color: string): void;
    setBackgroundColor(color: string): void;
    enableClosingConfirmation(): void;
    disableClosingConfirmation(): void;
    onEvent(type: string, callback: () => void): void;
    offEvent(type: string, callback: () => void): void;
  }

  interface Window {
    Telegram?: {
      WebApp: TelegramWebApp;
    };
  }
}
