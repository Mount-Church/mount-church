import 'assets/css/stylesGlobal.css';
import './assets/css/stylesTransformationStories.css';

import BatismHug from './assets/images/BatismHug.jpg'

export function TransformationStories() {
    return (
        <section className="lSectionTransformationStories" id="lSectionTransformationStories">
            <div className="sectionTransformationStories">
                <div className="sectionTransformationStoriesData">
                    <h2 className="sectionTitleTransformationStories">
                        Histórias de Transformação
                    </h2>
                    <img src={BatismHug} alt="Men Pray" className="sectionTransformationStoriesImg" />
                </div>
                <div className='SecondColumTransformationStories'>
                    <p className="globalSectionTextDark">
                        Fundada com o propósito de ser um farol de <strong>esperança e amor</strong>, a <strong>Mount Church</strong> tem crescido e impactado a vida de muitos ao longo do tempo. Desde nossos primeiros encontros até hoje, temos visto a mão de Deus mover-se poderosamente em nossa comunidade.
                    </p>
                </div>
            </div>
        </section>
    );
}