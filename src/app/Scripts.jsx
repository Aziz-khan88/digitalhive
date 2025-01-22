"use client";
import { useEffect } from 'react';

const Scripts = () => {
    useEffect(() => {
        // Google Tag Manager (for <head>)
        const gtmScript = document.createElement("script");
        gtmScript.async = true;
        gtmScript.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-TFXZ8VTJ';
        document.head.appendChild(gtmScript);

        // Google Tag Manager for noscript (for <body>)
        const noscriptDiv = document.createElement("noscript");
        noscriptDiv.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TFXZ8VTJ"
          height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
        document.body.insertBefore(noscriptDiv, document.body.firstChild);

        // Optionally add Google Analytics Tag if needed
        const analyticsScript = document.createElement("script");
        analyticsScript.src = "https://www.googletagmanager.com/gtag/js?id=G-KCPM5K053W";
        analyticsScript.async = true;
        analyticsScript.defer = true;
        document.head.appendChild(analyticsScript);

        // Initialize gtag for Google Analytics
        analyticsScript.onload = () => {
            window.dataLayer = window.dataLayer || [];
            function gtag() { dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', 'G-KCPM5K053W');
        };

    }, []);

    return null;
};

export default Scripts;
