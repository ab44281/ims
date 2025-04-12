'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React from 'react';
import { links, sidebarLinks } from '@/constants';
import { cn } from '@/lib/utils';
import Footer from './Footer';

const Sidebar = ({user}:SiderbarProps) => {
  const pathname = usePathname();

  return (
    <section className='sidebar'>
      <nav className='flex flex-col gap-4'>
        <Link href='/' className='mb-12 cursor-pointer flex items-center gap-2'>
          <Image 
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt="Horizon logo"
            className="size-[24px] max-xl:size-14"
          />
          <h1 className='sidebar-logo'>IMS</h1>
        </Link>

        {sidebarLinks
          .filter((item) => item.roles.includes(user.role)) // 🔥 Filter based on user role
          .map((item) => {
            const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);
            // const LinkIcon = item.icon;
            return (
              <Link href={item.route} key={item.label} className={cn('sidebar-link', { 'bg-bank-gradient': isActive })}>
                <div className="relative size-6">
                  <Image 
                    src={item.imgURL}
                    alt={item.label}
                    fill
                    className={cn({
                      'brightness-[3] invert-0': isActive
                    })}
                  />
                </div>
                <p className={cn("sidebar-label", { "!text-white": isActive })}>
                  {item.label}
                </p>
              </Link>
            );
          })}
      </nav>
      {/* {links.map((link) => {
          const LinkIcon = link.icon;
          return (
            <Link
              key={link.name}
              href={link.href}
              className={`flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3
              ${pathname === link.href ? 'bg-sky-100 text-blue-600' : ''}
              `}
            >
              <LinkIcon className="w-6 h-6" />
              <p className="hidden md:block">{link.name}</p>
            </Link>
          );
        })} */}
      <Footer user={user} />
    </section>
  );
};

export default Sidebar;
