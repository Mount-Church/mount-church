export interface Ingredient {
    icon: string;
    label: string;
    description: string;
}

export const allIMockOverviewAndImpactTabs = [
    { icon: "🍅", label: "Visão geral", description: "Descrição", },
    { icon: "🥬", label: "Impacto", description: "Descrição", },
];

const [overview, impact] = allIMockOverviewAndImpactTabs;
export const initialTabs = [overview, impact];

export function getMockOverviewAndImpactTabs(
    ingredients: Ingredient[]
): Ingredient | undefined {
    const existing = new Set(ingredients);
    return allIMockOverviewAndImpactTabs.find((ingredient) => !existing.has(ingredient));
}
