import Test from '@/components/layout/test';
import Link from 'next/link';
import React from 'react';

export default function demo1() {
    return (
        <div>
            <h1>Hello1</h1>
            <Link href="/demo">Demo</Link>
        </div>
    );
}
demo1.Layout = Test;
