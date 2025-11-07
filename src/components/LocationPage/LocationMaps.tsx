import 'assets/css/stylesGlobal.css';
import './assets/css/stylesLocationMaps.css';

export function LocationMaps() {
    return (
        <section className="lSectionLocationMaps" id="sectionLocationMaps">
            <div className="sectionLocationMaps">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3576.278757690014!2d-48.83604532460183!3d-26.317989476959513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94deb00db1b3cf3d%3A0xb4aef3a2e1f44171!2sR.%20Marqu%C3%AAs%20de%20Olinda%2C%202900%20-%20Gl%C3%B3ria%2C%20Joinville%20-%20SC%2C%2089203-720!5e0!3m2!1spt-BR!2sbr!4v1739582400000!5m2!1spt-BR!2sbr"
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