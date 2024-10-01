export interface Ingredient {
    icon: string;
    label: string;
    description: string;
}

export const allIMockOverviewAndImpactTabs = [
    { icon: "🎯", label: "Visão geral", description: "Nosso objetivo é ser um canal de bênçãos para a comunidade, mostrando o amor de Jesus através de atos concretos de bondade e ajuda prática. Acreditamos que, ao servir os outros, estamos cumprindo a missão de nossa fé.", },
    { icon: "🔥", label: "Impacto", description: "Cada doação e cada ato de voluntariado têm um impacto significativo. Com sua ajuda, podemos alcançar mais pessoas, oferecer mais suporte e criar um ambiente de esperança e transformação.", },
];

const [overview, impact] = allIMockOverviewAndImpactTabs;
export const initialTabs = [overview, impact];

export function getMockOverviewAndImpactTabs(
    ingredients: Ingredient[]
): Ingredient | undefined {
    const existing = new Set(ingredients);
    return allIMockOverviewAndImpactTabs.find((ingredient) => !existing.has(ingredient));
}
