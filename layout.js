import './globals.css'

export const metadata = {
  title: 'امتلك وحدتك بأضخم مشاريع شركة حسن علام للتطوير العقاري',
  description: 'شركة حسن علام من أكبر شركات العقارات في مصر والشرق الأوسط - Swan Lake - Hap Town',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
