/* eslint sort-keys: error */
import Image from 'next/image'
import type { DocsThemeConfig } from 'nextra-theme-docs'
import { useConfig } from 'nextra-theme-docs'
import type { ReactElement } from 'react'

const MDLogo = (props: any): ReactElement => (
  <Image
    src={'/logo.png'}
    alt='logo'
    height={120 as number}
    width={100 as number}
    {...props}
  />
)

const Logo = ({
  src = '/logo.png',
  width = 30,
  height = 30,
  style = {},
  ...props
}: {
  src?: string
  width?: number
  height?: number
  style?: any
}): ReactElement => (
  <Image
    src={src}
    alt='logo'
    height={height}
    width={width}
    style={{
      borderRadius: '5rem',
      ...style
    }}
    {...props}
  />
)

const Vercel = () => (
  <svg height="20" viewBox="0 0 283 64" fill="none">
    <path
      fill="currentColor"
      d="M141.04 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM248.72 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM200.24 34c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9V5h9zM36.95 0L73.9 64H0L36.95 0zm92.38 5l-27.71 48L73.91 5H84.3l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10V51h-9V17h9v9.2c0-5.08 5.91-9.2 13.2-9.2z"
    />
  </svg>
)

const TITLE = 'Wiki';

const EDIT_TEXT = 'Edit this page on GitHub →';

const FOOTER_LINK = 'https://vercel.com/';

const FOOTER_LINK_TEXT = (
  <>
    Powered by
    <Vercel />
  </>
)

const config: DocsThemeConfig = {
  // banner: {
  //   key: 'discord.js-bot-template',
  //   text: 'Green Mountain Trader and Expansion Market documentation has been added! Read more →',
  // },
  chat: {
    link: 'https://discord.gg/mirasaki',
  },
  darkMode: true,
  editLink: {
    text: EDIT_TEXT,
    component: ({
      children,
      className,
      filePath
    }) => {
      return <a href={`https://github.com/Mirasaki/mirasaki-knowledge-base/${filePath}`} className={className}>{children}</a>
    }
  },

  // Ref: https://docs.github.com/en/enterprise-server@3.8/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/using-query-parameters-to-create-a-pull-request
  feedback: {
    content: 'Give us feedback →',
    labels: 'feedback',
    useLink() {
      const config = useConfig()
      return `https://github.com/Mirasaki/mirasaki-knowledge-base/issues/new?${new URLSearchParams({
        title: `Feedback for ${config.title}`
      }).toString()}`
    }
  },
  footer: {
    text: function useText() {
      return (<div>
        <a
          rel="noreferrer"
          target="_blank"
          className="flex items-center gap-2 font-semibold"
          href={FOOTER_LINK}
        >
          {FOOTER_LINK_TEXT}
        </a>
      </div>)
    }
  },
  head: function useHead() {
    const config = useConfig<{ description?: string; image?: string }>()
    const description =
      config.frontMatter.description || 'Explore a collection of guides/tutorials, tips and documentation regarding use of our products and services'
    const image = config.frontMatter.image || '/images/logo-square.png'
    return (
      <>
        {/* Favicons, meta */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#000000"
        />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="description" content={description} />
        <meta name="og:description" content={description} />
        {/* Don't use large image */}
        {/* <meta name="twitter:card" content="summary_large_image" /> */}
        <meta name="twitter:image" content={image} />
        <meta name="og:title" content={`${config.title}`} />
        <meta name="og:image" content={image} />
        <meta name="apple-mobile-web-app-title" content="Mirasaki Development" />
      </>
    )
  },
  logo: function Logo() {
    return (
      <>
        <MDLogo  />
        <span
          className="hidden select-none font-extrabold ltr:ml-2 rtl:mr-2 md:inline"
          title={`Mirasaki Development: ${TITLE || ''}`}
        >
          Mirasaki Wiki
        </span>
      </>
    )
  },
  nextThemes: {
    defaultTheme: 'dark'
  },
  project: {
    link: 'https://github.com/Mirasaki/mirasaki-knowledge-base'
  },
  sidebar: {
    autoCollapse: true,
    defaultMenuCollapseLevel: 1,
    titleComponent: ({
      title,
      type,
    }) => {
      return (
        type === 'separator' ? (
          <div className="flex items-center gap-2">
            {title === 'CFTools' && <Logo src={"/images/projects/icons/cftools.png"} />}
            {title === 'GameShield' && <Logo src={"/images/projects/icons/gameshield.png"} />}
            {title === 'Mitsuki' && <Logo src={"/images/projects/icons/mitsuki.png"} />}
            {title === 'Remote File Access API' && <Logo src={"/images/projects/icons/remote-file-access-api.png"} />}
            {title === 'Discord' && <Logo src={"/images/logos/discord-mark-blurple.svg"}
              style={{
                padding: '0 .3rem'
              }}
            />}
            {title}
          </div>
        ) : (
          <>
            {title === 'Green Mountain Trader' && <Logo src={
              // Hydration Error with useTheme,
              // let's use styling instead
               "/images/projects/icons/gmt-light.png"
            } style={{ backgroundColor: 'black' }}/>}
            {title === 'Expansion Market' && <Logo src={"/images/projects/icons/expansion-market.jpg"} style={{
              marginRight: '.25rem'
            }}/>}
            {title}
          </>
        )
      )
    },
    toggleButton: true
  },
  toc: {
    title: 'Table of Contents',
    extraContent: (
      <Image alt="banner" src="/images/logo-macbook.png" width={1920} height={1080} priority={true}/>
    ),
    float: true
  },
  useNextSeoProps() {
    return {
      titleTemplate: `%s | Mirasaki Development`
    }
  }
}

export default config
