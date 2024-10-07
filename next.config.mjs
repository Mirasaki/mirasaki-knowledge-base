import nextra from 'nextra'

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  flexsearch: {
    codeblocks: true
  },
  staticImage: true,
  defaultShowCopyCode: true
})

/**
 * @type {import('next').NextConfig}
 */
export default withNextra({
  distDir: './.next', // Nextra supports custom `nextConfig.distDir`
  redirects: () => [],
  reactStrictMode: true,
  output: 'standalone',
  images: {
    remotePatterns: [
      // PayPal buttons
      {
        protocol: 'https',
        hostname: 'www.paypal.com',
      }
    ]
  }
})
