import { FC, ReactNode } from "react"
import { Providers } from "app/providers"

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

type Props = {
  children: ReactNode
}

const RootLayout: FC<Props> = (props) => {
  const fontURL =
    "https://fonts.googleapis.com/css2?family=M+PLUS+1p:wght@500;700&display=swap"

  return (
    <html lang={"ja"}>
      <head>
        <meta name={"robots"} content={"noindex"} />
        <link rel={"preconnect"} href={"https://fonts.googleapis.com"} />
        <link
          rel={"preconnect"}
          href={"https://fonts.gstatic.com"}
          crossOrigin={""}
        />
        <link href={fontURL} rel={"stylesheet"} />
      </head>
      <body>
        <Providers>{props.children}</Providers>
      </body>
    </html>
  )
}

export default RootLayout
