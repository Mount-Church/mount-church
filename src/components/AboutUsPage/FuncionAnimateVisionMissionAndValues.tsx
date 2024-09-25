export interface VisionMissionAndValues {
    icon: string;
    label: string;
    description: string;
}

export const allVisionMissionAndValues = [
    {
        icon: "🎯",
        label: "Visão",
        animateVisionMissionAndValuesTitle: "Restaurando Corações com o Amor de Cristo",
        description: "Ser uma igreja bíblica e relevante na sociedade, restaurando famílias e discipulando com o amor de Cristo.",
    },
    {
        icon: "🫡",
        label: "Missão",
        animateVisionMissionAndValuesTitle: "Compromisso com o Crescimento e Impacto na Comunidade",
        description: "Estamos comprometidos com o crescimento contínuo e o impacto positivo em nossa comunidade. Nossos planos incluem expandir nossos programas de <strong>assistência social</strong>, aumentar a participação em <strong>conexões</strong> e desenvolver novas iniciativas que alcancem mais pessoas com a mensagem do Evangelho.",
    },
    {
        icon: "✅",
        label: "Valores",
        animateVisionMissionAndValuesTitle: "Amor, Serviço, Integridade, Comunhão e Missão",
        description: "Amor, serviço, integridade, comunhão e missão são os valores centrais que nos guiam. Cada um desses princípios é vital para nosso <strong>ministério</strong> e define a forma como interagimos com nossa comunidade e além.",
    }
];

const [Visão, Missão, Valores] = allVisionMissionAndValues;
export const initialTabs = [Visão, Missão, Valores];

export function getNextVisionMissionAndValues(
    visionMissionAndValues: VisionMissionAndValues[]
): VisionMissionAndValues | undefined {
    const existing = new Set(visionMissionAndValues);
    return allVisionMissionAndValues.find((visionMissionAndValues) => !existing.has(visionMissionAndValues));
}
