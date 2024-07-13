import Script from "next/script";

export default function GoogleAnalytics() {
    return <>
        <Script id="gtag-1" src="https://www.googletagmanager.com/gtag/js?id=G-TEQEKGKZNQ"></Script>
        <Script
            id="gtag-2"
            dangerouslySetInnerHTML={{
                __html: `window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', 'G-TEQEKGKZNQ');`,
            }}
        />
    </>
}