import { Helmet } from "react-helmet"

function Scripts() {
  return (
    <>
      <Helmet>
        <!-- Google tag (gtag.js) -->
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-4XS9THNKWY"></script>
            <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-4XS9THNKWY');
        </script>
      </Helmet>
    </>
  )
}