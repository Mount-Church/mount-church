import React from 'react';

import 'assets/css/stylesGlobal.css';
import 'assets/css/stylesLocationMaps.css';

export function LocationMaps() {
    return (
        <section className="lSectionLocationMaps" id="sectionLocationMaps">
            <div className="sectionLocationMaps">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3575.968036050047!2d-48.840244999999996!3d-26.327534500000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94deb0fd52d2f8cd%3A0xd188b7b9492221bd!2sR.%20Botafogo%2C%20494%20-%20Itaum%2C%20Joinville%20-%20SC%2C%2089210-000!5e0!3m2!1sen!2sbr!4v1723808768432!5m2!1sen!2sbr"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen 
                    title="Mapa de localização"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
        </section>
    );
}
