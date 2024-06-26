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
                    { key: "Access-Control-Allow-Origin", value: "https://test-cors-drab.vercel.app" },
                    // { key: "Access-Control-Allow-Origin", value: "http://my-site.com:3000" },
                    { key: "Access-Control-Allow-Methods", value: "DELETE" },
                ]
            },
            {
                source: "/api/data3",
                headers: [
                    { key: "Access-Control-Allow-Origin", value: "*" },
                    { key: "Access-Control-Allow-Methods", value: "PUT" },
                ]
            },
            {
                source: "/api/data4",
                headers: [
                    { key: "Access-Control-Allow-Origin", value: "other-website.com" },
                ]
            }
        ]
    }
};


export default nextConfig;