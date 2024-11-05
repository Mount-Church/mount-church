import 'assets/css/stylesGlobal.css';
import './assets/css/stylesHighlightsAndPreviousSermons.css'

import { CardHighlightsAndPreviousSermons } from 'components/WatchComponentsPage';

export function HighlightsAndPreviousSermons() {
    return (
        <section className="lSectionHighlightsAndPreviousSermons" id="sectionHighlightsAndPreviousSermons">
            <div className="sectionHighlightsAndPreviousSermons">
                <div>
                    <h2 className="globalSectionTitleTextDark45px mt-12">
                        Highlights e Pregações Anteriores
                    </h2>
                    <p className="sectionTextDarkHighlightsAndPreviousSermons">
                        Se não houver um culto ao vivo no momento, você pode assistir aos <strong>highlights</strong> dos nossos cultos anteriores. Navegue pelo nosso acervo e selecione as pregações que mais lhe interessam. Escolha entre diversos pregadores e temas para enriquecer sua jornada espiritual.
                    </p>
                    <CardHighlightsAndPreviousSermons />
                </div>
            </div>
        </section>
    )
}