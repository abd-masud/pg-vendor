"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/images/logo_white.webp";
import { useAuth } from "@/contexts/AuthContext";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useAccUserRedirect } from "@/hooks/useAccUser";
import { AiFillDashboard } from "react-icons/ai";
import { FaGear, FaMoneyBillTransfer } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa";
import { MdDynamicFeed, MdNotificationsActive } from "react-icons/md";
import { RiWallet3Fill } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";
import { PiHandWithdrawFill } from "react-icons/pi";

interface SideBarProps {
  closeSidebar?: () => void;
}

export const SideBar = ({ closeSidebar }: SideBarProps) => {
  const { user } = useAuth();
  const pathname = usePathname();
  const [openSection, setOpenSection] = useState<string | null>(null);
  useAccUserRedirect();

  if (!user) return null;

  const toggleSection = (section: string) => {
    setOpenSection(openSection == section ? null : section);
  };

  const handleLinkClick = () => {
    if (window.innerWidth < 768 && closeSidebar) {
      closeSidebar();
    }
  };

  const linkClass = (route: string) =>
    `text-[13px] text-[#797c8b] hover:text-white font-[500] flex items-center transition duration-300 group h-11 border-t border-[#252D37] ${
      pathname == route ? "text-white bg-[#1E2639]" : ""
    }`;

  const subLinkClass = (route: string) =>
    `text-[13px] text-[#797c8b] hover:text-white font-[500] flex items-center transition duration-300 group h-11 ${
      pathname == route ? "text-white" : ""
    }`;

  const linkBar = (route: string) =>
    `bg-[#307DF1] h-[23px] w-[3px] group-hover:opacity-100 opacity-0 transition duration-300 ${
      pathname == route ? "opacity-100" : ""
    }`;

  return (
    <main className="bg-[#131226] h-screen overflow-y-auto overflow-x-hidden scrollbar-hide">
      <Link
        className="text-white font-bold flex items-center text-[30px] px-8 py-[19.5px]"
        href={"/"}
        onClick={handleLinkClick}
      >
        <Image height={30} src={logo} alt={"Logo"} priority />
        <span className="text-white text-[18px] font-bold ml-2">
          Payment Gateway
        </span>
      </Link>

      <Link
        href={"/dashboard"}
        className={linkClass("/dashboard")}
        onClick={handleLinkClick}
      >
        <div className={linkBar("/dashboard")}></div>
        <AiFillDashboard className="ml-[21px] text-[16px] mr-3 w-5" />
        Dashboard
      </Link>
      <div className="mt-auto">
        <Link
          href="/check-wallet"
          className={`${linkClass(
            "/check-wallet"
          )} flex items-center justify-between`}
          onClick={handleLinkClick}
        >
          <div className="flex items-center">
            <div className={linkBar("/check-wallet")}></div>
            <RiWallet3Fill className="ml-[21px] text-[16px] mr-3 w-5" />
            Check Wallet
          </div>
        </Link>
      </div>
      <button
        onClick={() => toggleSection("handle-pay-in")}
        className={`text-[13px] text-[#797c8b] hover:text-white font-[500] flex items-center justify-between pr-5 transition duration-300 group h-11 w-full border-t border-[#252D37] ${
          pathname.includes("/handle-pay-in") ? "text-white bg-[#1E2639]" : ""
        }`}
      >
        <div className="flex items-center">
          <div
            className={`h-[23px] w-[3px] group-hover:bg-[#307DF1] transition duration-300 ${
              pathname.includes("/handle-pay-in")
                ? "bg-[#307DF1]"
                : "bg-transparent"
            }`}
          ></div>
          <FaMoneyBillTransfer className="ml-[21px] text-[13px] mr-3 w-5" />
          Handle Pay-in
        </div>
        <FaChevronDown />
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 transform ${
          openSection == "handle-pay-in"
            ? "max-h-[90px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="pl-[56px] bg-[#1D1B31] text-[13px]">
          <Link
            className={subLinkClass("/handle-pay-in/person-to-person")}
            href="/handle-pay-in/person-to-person"
            onClick={handleLinkClick}
          >
            Person to Person
          </Link>

          <Link
            className={subLinkClass("/handle-pay-in/person-to-consumer")}
            href="/handle-pay-in/person-to-consumer"
            onClick={handleLinkClick}
          >
            Person to Consumer
          </Link>
        </div>
      </div>
      <button
        onClick={() => toggleSection("handle-payout")}
        className={`text-[13px] text-[#797c8b] hover:text-white font-[500] flex items-center justify-between pr-5 transition duration-300 group h-11 w-full border-t border-[#252D37] ${
          pathname.includes("/handle-payout") ? "text-white bg-[#1E2639]" : ""
        }`}
      >
        <div className="flex items-center">
          <div
            className={`h-[23px] w-[3px] group-hover:bg-[#307DF1] transition duration-300 ${
              pathname.includes("/handle-payout")
                ? "bg-[#307DF1]"
                : "bg-transparent"
            }`}
          ></div>
          <FaMoneyBillTransfer className="ml-[21px] text-[13px] mr-3 w-5" />
          Handle Payout
        </div>
        <FaChevronDown />
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 transform ${
          openSection == "handle-payout"
            ? "max-h-[90px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="pl-[56px] bg-[#1D1B31] text-[13px]">
          <Link
            className={subLinkClass("/handle-payout/person-to-person")}
            href="/handle-payout/person-to-person"
            onClick={handleLinkClick}
          >
            Person to Person
          </Link>

          <Link
            className={subLinkClass("/handle-payout/person-to-consumer")}
            href="/handle-payout/person-to-consumer"
            onClick={handleLinkClick}
          >
            Person to Consumer
          </Link>
        </div>
      </div>
      <button
        onClick={() => toggleSection("income")}
        className={`text-[13px] text-[#797c8b] hover:text-white font-[500] flex items-center justify-between pr-5 transition duration-300 group h-11 w-full border-t border-[#252D37] ${
          pathname.includes("/income") ? "text-white bg-[#1E2639]" : ""
        }`}
      >
        <div className="flex items-center">
          <div
            className={`h-[23px] w-[3px] group-hover:bg-[#307DF1] transition duration-300 ${
              pathname.includes("/income") ? "bg-[#307DF1]" : "bg-transparent"
            }`}
          ></div>
          <FaMoneyBillTransfer className="ml-[21px] text-[13px] mr-3 w-5" />
          Income
        </div>
        <FaChevronDown />
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 transform ${
          openSection == "income"
            ? "max-h-[90px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="pl-[56px] bg-[#1D1B31] text-[13px]">
          <Link
            className={subLinkClass("/income/salary")}
            href="/income/salary"
            onClick={handleLinkClick}
          >
            Pay-In
          </Link>

          <Link
            className={subLinkClass("/income/withdraw")}
            href="/income/withdraw"
            onClick={handleLinkClick}
          >
            Payout
          </Link>
        </div>
      </div>
      <div className="mt-auto">
        <Link
          href="/fees-history"
          className={`${linkClass(
            "/fees-history"
          )} flex items-center justify-between`}
          onClick={handleLinkClick}
        >
          <div className="flex items-center">
            <div className={linkBar("/fees-history")}></div>
            <MdDynamicFeed className="ml-[21px] text-[16px] mr-3 w-5" />
            Fees History
          </div>
        </Link>
      </div>
      <div className="mt-auto">
        <Link
          href="/withdraw"
          className={`${linkClass(
            "/withdraw"
          )} flex items-center justify-between`}
          onClick={handleLinkClick}
        >
          <div className="flex items-center">
            <div className={linkBar("/withdraw")}></div>
            <PiHandWithdrawFill className="ml-[21px] text-[16px] mr-3 w-5" />
            Withdraw
          </div>
        </Link>
      </div>
      <div className="mt-auto">
        <Link
          href="/support-request"
          className={`${linkClass(
            "/support-request"
          )} flex items-center justify-between`}
          onClick={handleLinkClick}
        >
          <div className="flex items-center">
            <div className={linkBar("/support-request")}></div>
            <BiSupport className="ml-[21px] text-[18px] mr-3 w-5" />
            Support Request
          </div>
        </Link>
      </div>
      <div className="mt-auto">
        <Link
          href="/notifications"
          className={`${linkClass(
            "/notifications"
          )} flex items-center justify-between`}
          onClick={handleLinkClick}
        >
          <div className="flex items-center">
            <div className={linkBar("/notifications")}></div>
            <MdNotificationsActive className="ml-[21px] text-[18px] mr-3 w-5" />
            Notifications
          </div>
        </Link>
      </div>
      <button
        onClick={() => toggleSection("system-settings")}
        className={`text-[13px] text-[#797c8b] hover:text-white font-[500] flex items-center justify-between pr-5 transition duration-300 group h-11 w-full border-t border-[#252D37] ${
          pathname.includes("/system-settings") ? "text-white bg-[#1E2639]" : ""
        }`}
      >
        <div className="flex items-center">
          <div
            className={`h-[23px] w-[3px] group-hover:bg-[#307DF1] transition duration-300 ${
              pathname.includes("/system-settings")
                ? "bg-[#307DF1]"
                : "bg-transparent"
            }`}
          ></div>
          <FaGear className="ml-[21px] text-[16px] mr-3 w-5" />
          System Settings
        </div>
        <FaChevronDown />
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 transform ${
          openSection == "system-settings"
            ? "max-h-[90px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="pl-[56px] bg-[#1D1B31] text-[13px]">
          <Link
            className={subLinkClass("/system-settings/settings-1")}
            href="/system-settings/settings-1"
            onClick={handleLinkClick}
          >
            Settings-1
          </Link>

          <Link
            className={subLinkClass("/system-settings/settings-2")}
            href="/system-settings/settings-2"
            onClick={handleLinkClick}
          >
            Settings-2
          </Link>
        </div>
      </div>
    </main>
  );
};
