import { Inter } from "next/font/google";
import "./globals.css";
import { TrackerProvider } from "@/context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Expense Tracker",
  description: "Create expense tracker in React.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TrackerProvider>{children}</TrackerProvider>
      </body>
    </html>
  );
}
