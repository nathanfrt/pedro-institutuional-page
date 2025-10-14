import React, { useEffect } from 'react';

const GoogleReviews = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://apps.elfsight.com/p/platform.js';
        script.async = true;
        document.body.appendChild(script);
    }, []);

    return (
        <div className="container text-center">
            <div class="elfsight-app-45ab829a-8424-45ad-bbee-2a130f090ed8" data-elfsight-app-lazy></div>
        </div>
    );
};

export default GoogleReviews;
