export interface Ingredient {
    icon: string;
    label: string;
    description: string;
}

export const allIMockOverviewAndImpactTabs = [
    { icon: "🎯", label: "Visão geral", description: "Nossa igreja <strong>valoriza profundamente</strong> a <strong>colaboração</strong> dos ofertantes e dizimistas. Suas <strong>contribuições</strong> são essenciais para a continuidade e crescimento de nossos <strong>ministérios</strong> e <strong>projetos sociais</strong>.", },
    { icon: "🔥", label: "Impacto", description: "As <strong>contribuições</strong> dos nossos membros têm um <strong>impacto</strong> significativo na comunidade. Elas permitem a <strong>manutenção</strong> da igreja, o suporte a <strong>projetos sociais</strong> e a expansão de nossos <strong>ministérios</strong>, beneficiando inúmeras vidas.", },
];

const [overview, impact] = allIMockOverviewAndImpactTabs;
export const initialTabs = [overview, impact];

export function getMockOverviewAndImpactTabs(
    ingredients: Ingredient[]
): Ingredient | undefined {
    const existing = new Set(ingredients);
    return allIMockOverviewAndImpactTabs.find((ingredient) => !existing.has(ingredient));
}
