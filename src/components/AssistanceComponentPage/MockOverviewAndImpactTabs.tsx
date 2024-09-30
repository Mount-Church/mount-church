export interface Ingredient {
    icon: string;
    label: string;
    description: string;
}

export const allIMockOverviewAndImpactTabs = [
    { icon: "🎯", label: "Visão geral", description: "Descrição 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</br> Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.", },
    { icon: "🔥", label: "Impacto", description: "Descrição 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</br> Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.", },
];

const [overview, impact] = allIMockOverviewAndImpactTabs;
export const initialTabs = [overview, impact];

export function getMockOverviewAndImpactTabs(
    ingredients: Ingredient[]
): Ingredient | undefined {
    const existing = new Set(ingredients);
    return allIMockOverviewAndImpactTabs.find((ingredient) => !existing.has(ingredient));
}
