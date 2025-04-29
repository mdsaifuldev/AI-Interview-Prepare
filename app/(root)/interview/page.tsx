import React from 'react';
import Agent from '@/components/Agent'; 


const Page = () => {
  return (
    <main>
      <h1>Welcome</h1>
      <Agent /> {/* NO props passed, so it's safe */}
    </main>
  );
};

export default Page;
