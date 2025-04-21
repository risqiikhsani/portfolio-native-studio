import DynamicBreadcrumb from '@/components/dynamic-breadcrumb';
import React from 'react'

export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <div>
        <DynamicBreadcrumb/>
        {children}
    </div>
  )
}
