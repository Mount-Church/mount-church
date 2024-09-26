import "./assets/css/stylesAnimateVisionMissionAndValues.css";
import { motion, AnimatePresence } from "framer-motion";

export default function AnimateVisionMissionAndValues() {

    return (
        <>
            <div className="windowAnimateVisionMissionAndValues">
                <nav>
                    <ul className="ulWindowAnimateVisionMissionAndValues">
                        <li
                            className={"selectedTabAnimated liWindowAnimateVisionMissionAndValues"}
                        >
                            🎯 Visão
                            <motion.div className="underlineWindowAnimateVisionMissionAndValues" layoutId="underlineWindowAnimateVisionMissionAndValues" />
                        </li>
                    </ul>
                </nav>
                <main>
                    <AnimatePresence mode="wait">
                        <motion.div
                        >
                            <div>
                                <h2 className="titleTextAnimateVisionMissionAndValues">
                                    Restaurando Corações com o Amor de Cristo
                                </h2>
                                <p className="textAnimateVisionMissionAndValues" >
                                    Ser uma igreja bíblica e relevante na sociedade, restaurando <strong>famílias</strong> e discipulando com o amor de <strong>Cristo</strong>.
                                </p>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </main>
            </div>

            <div className="windowAnimateVisionMissionAndValues">
                <nav>
                    <ul className="ulWindowAnimateVisionMissionAndValues">
                        <li
                            className={"selectedTabAnimated liWindowAnimateVisionMissionAndValues"}
                        >
                            🫡 Missão
                            <motion.div className="underlineWindowAnimateVisionMissionAndValues" layoutId="underlineWindowAnimateVisionMissionAndValues" />
                        </li>
                    </ul>
                </nav>
                <main>
                    <AnimatePresence mode="wait">
                        <motion.div
                        >
                            <div>
                                <h2 className="titleTextAnimateVisionMissionAndValues">
                                    Compromisso com a Comunidade
                                </h2>
                                <p className="textAnimateVisionMissionAndValues" >
                                    Estamos comprometidos com o crescimento contínuo e o impacto positivo em nossa comunidade. Nossos planos incluem expandir nossos programas de <strong>assistência social</strong>, aumentar a participação em <strong>conexões</strong> e desenvolver novas iniciativas que alcancem mais pessoas com a mensagem do Evangelho.
                                </p>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </main>
            </div>

            <div className="windowAnimateVisionMissionAndValues">
                <nav>
                    <ul className="ulWindowAnimateVisionMissionAndValues">
                        <li
                            className={"selectedTabAnimated liWindowAnimateVisionMissionAndValues"}
                        >
                            ✅ Valores
                            <motion.div className="underlineWindowAnimateVisionMissionAndValues" layoutId="underlineWindowAnimateVisionMissionAndValues" />
                        </li>
                    </ul>
                </nav>
                <main>
                    <AnimatePresence mode="wait">
                        <motion.div
                        >
                            <div>
                                <h2 className="titleTextAnimateVisionMissionAndValues">
                                    Amor, Serviço, Integridade, Comunhão e Missão
                                </h2>
                                <p className="textAnimateVisionMissionAndValues" >
                                    Amor, serviço, integridade, comunhão e missão são os valores centrais que nos guiam. Cada um desses princípios é vital para nosso <strong>ministério</strong> e define a forma como interagimos com nossa comunidade e além.
                                </p>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </main>
            </div>
        </>
    );
}
