/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        domains: ['counter4.optistats.ovh'], // Ajoutez le domaine ici
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'prof-info.vercel.app',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com',
                pathname: '/**',
            },
        ],
    },
};
export default nextConfig;