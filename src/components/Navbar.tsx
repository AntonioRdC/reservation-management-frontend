'use client';

import { useState } from 'react';
import { BiLogIn } from 'react-icons/bi';
import { BiMenu } from 'react-icons/bi';
import { AiOutlineHome } from 'react-icons/ai';
import Link from 'next/link';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { buttonVariants } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  {
    href: '#Lorem',
    label: 'Lorem1',
  },
  {
    href: '#Lorem',
    label: 'Lorem2',
  },
  {
    href: '#Lorem',
    label: 'Lorem3',
  },
  {
    href: '#Lorem',
    label: 'Lorem4',
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="sticky border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-zinc-700 dark:bg-background">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between ">
          <NavigationMenuItem className="font-bold flex">
            <Link href="/" className="ml-2 font-bold text-xl flex">
              <AiOutlineHome />
            </Link>
          </NavigationMenuItem>

          {/* Nav & Login  on Smartphone */}
          <span className="flex md:hidden">
            <ThemeToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="px-2">
                <BiMenu
                  className="flex md:hidden h-5 w-5"
                  onClick={() => setIsOpen(true)}
                >
                  <span className="sr-only">Menu Icon</span>
                </BiMenu>
              </SheetTrigger>
              <SheetContent side={'bottom'}>
                <SheetHeader>
                  <SheetTitle className="font-bold text-xl">
                    Shadcn/React
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col justify-center items-center gap-2 mt-4">
                  {routeList.map(({ href, label }: RouteProps) => (
                    <Link
                      key={label}
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className={buttonVariants({ variant: 'ghost' })}
                    >
                      {label}
                    </Link>
                  ))}
                  <Link
                    href="/auth/login"
                    className={`w-[110px] border ${buttonVariants({
                      variant: 'outline',
                    })}`}
                  >
                    <BiLogIn className="mr-2 w-5 h-5" />
                    Fazer Login
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </span>

          {/* Nav  on Desktop */}
          <nav className="hidden md:flex gap-2">
            {routeList.map((route: RouteProps, i) => (
              <Link
                href={route.href}
                key={i}
                className={`text-[17px] ${buttonVariants({
                  variant: 'ghost',
                })}`}
              >
                {route.label}
              </Link>
            ))}
          </nav>

          {/* Login  on Desktop */}
          <div className="hidden md:flex gap-2">
            <Link
              href="/auth/login"
              className={`border ${buttonVariants({ variant: 'outline' })}`}
            >
              <BiLogIn className="mr-2 w-5 h-5" />
              Fazer Login
            </Link>
            <ThemeToggle />
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
