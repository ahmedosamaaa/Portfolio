/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        removeConsole: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
};

export default nextConfig;
