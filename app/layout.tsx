export const metadata = {
  title: 'YunJun Wiki',
  description: 'Happy Birthday Jun!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}