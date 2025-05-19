'use client';
import { Gwendolyn } from 'next/font/google';

const gwendolynBoldFont = Gwendolyn({
    weight: '700',
    subsets: ['latin'],
    display: 'swap',
});

export default function HeroTitle() {
    return (
        <span className={`text-accent capitalize h1 ${gwendolynBoldFont.className}`.trim()}>
            mahjoubi bilel
        </span>
    )
}   
