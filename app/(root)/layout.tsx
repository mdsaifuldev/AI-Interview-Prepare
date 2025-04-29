"use client";  // Add this directive at the top

import React, { ReactNode, useEffect, useState } from 'react';
import Link from "next/link";
import Image from 'next/image';
import { isAuthenticated } from '@/lib/actions/auth.action';
import { useRouter } from 'next/navigation';

const RootLayout = ({ children }: { children: ReactNode }) => {
  const [isUserAuthenticated, setIsUserAuthenticated] = useState<boolean | null>(null);
  const router = useRouter();

  useEffect(() => {
    const checkAuthentication = async () => {
      const authenticated = await isAuthenticated();
      setIsUserAuthenticated(authenticated);

      if (!authenticated) {
        router.push('/sign-in');
      }
    };

    checkAuthentication();
  }, [router]);

  // Show loading until the authentication status is determined
  if (isUserAuthenticated === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="root-layout">
      <nav>
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="Logo" width={38} height={32} />
          <h2 className="text-primary-100">PrepIV</h2>
        </Link>
      </nav>
      {children}
    </div>
  );
};

export default RootLayout;
