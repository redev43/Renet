import type { Metadata } from 'next'
import { Roboto_Flex } from 'next/font/google'
import "@/styles/base.scss"
import Navigation from '@/ui/Navigation/Navigation'
import { Provider } from '@/hooks/provider.hook'
import MobileNavigation from '@/ui/MobileNavigation/MobileNavigation'

const inter = Roboto_Flex({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Renet Network',
  description: 'renet social network',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <MobileNavigation />
          <Navigation />
          {children}
        </Provider>
      </body>
    </html>
  )
}
