import { Metadata } from "next"
import { FC, ReactNode } from "react"
import { FooterHome } from "app/components/FooterHome"
import { Providers } from "app/providers"
import { Config } from "config"

type Props = {
  children: ReactNode
}

const RootLayout: FC<Props> = (props) => {
  const fontURL =
    "https://fonts.googleapis.com/css2?family=M+PLUS+1p:wght@500;700&display=swap"

  return (
    <html lang={"ja"}>
      <head>
        <link rel={"preconnect"} href={"https://fonts.googleapis.com"} />
        <link
          rel={"preconnect"}
          href={"https://fonts.gstatic.com"}
          crossOrigin={""}
        />
        <link href={fontURL} rel={"stylesheet"} />
      </head>
      <body>
        <Providers>
          {props.children}
          <FooterHome />
        </Providers>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  title: {
    template: Config.siteTitleTemplateJA,
    default: Config.siteTitleJA,
  },
  description: Config.siteDescriptionJA,
  openGraph: {
    type: "website",
    siteName: Config.siteTitleJA,
  },
  twitter: {
    card: "summary_large_image",
    creator: "@aipictors",
    title: Config.siteNameJA,
    description: Config.siteDescriptionJA,
  },
}

export default RootLayout
