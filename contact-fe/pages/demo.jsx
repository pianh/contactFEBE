import Test from '@/components/layout/test';
import Link from 'next/link';
import React from 'react';

export default function demo() {
    return (
        <div>
            <h1>Hello</h1>
            <Link href="/demo1">Demo1</Link>
        </div>
    );
}
demo.Layout = Test;
