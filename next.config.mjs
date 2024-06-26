/** @type {import('next').NextConfig} */
//const nextConfig = {}
const nextConfig = {
    async headers() {
        return [
            {
                source: "/api/data1",
                headers: [
                    { key: "Access-Control-Allow-Origin", value: "*" },
                    { key: "Access-Control-Allow-Methods", value: "GET,PATCH,POST,PUT,OPTIONS,DELETE" },
                ]
            },
            {
                source: "/api/data2",
                headers: [
                    { key: "Access-Control-Allow-Origin", value: "other-website.com" },
                ]
            },
            {
                source: "/api/data3",
                headers: [
                    { key: "Access-Control-Allow-Origin", value: "*" },
                    { key: "Access-Control-Allow-Methods", value: "PUT" },
                ]
            }
        ]
    }
};


export default nextConfig;