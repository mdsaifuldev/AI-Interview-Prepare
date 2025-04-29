"use client";  // Add this at the top of the file

import React, { ReactNode, useEffect, useState } from 'react';
import { isAuthenticated } from '@/lib/actions/auth.action'; // Ensure correct import
import { redirect } from 'next/navigation';

const AuthLayout = ({ children }: { children: ReactNode }) => {
  const [isUserAuthenticated, setIsUserAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAuthentication = async () => {
      const authenticated = await isAuthenticated();
      setIsUserAuthenticated(authenticated);
      if (!authenticated) {
        redirect('/sign-in');
      }
    };

    checkAuthentication();
  }, []);

  // Show loading until the authentication status is determined
  if (isUserAuthenticated === null) {
    return <div>Loading...</div>;
  }

  return <div className="auth-layout">{children}</div>;
};

export default AuthLayout;
