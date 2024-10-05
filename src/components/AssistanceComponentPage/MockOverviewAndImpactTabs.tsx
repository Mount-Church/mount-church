export interface Ingredient {
    icon: string;
    label: string;
    description: string;
}

export const allIMockOverviewAndImpactTabs = [
    { icon: "🎯", label: "Visão geral", description: "Nosso objetivo na <strong>Mount Church</strong> é ser um canal de bênçãos para a comunidade, demonstrando o amor de <strong>Jesus</strong> através de atos concretos de <strong>bondade</strong> e ajuda prática. Acreditamos que a fé se manifesta não apenas em palavras, mas em ações que impactam positivamente a vida das pessoas ao nosso redor.</br></br>Estamos comprometidos em alcançar aqueles que estão em situação de <strong>vulnerabilidade</strong>, oferecendo suporte emocional, espiritual e material. Nossa missão é proporcionar esperança e transformação, ajudando a restaurar famílias, apoiar indivíduos em dificuldades e promover a justiça social.", },
    { icon: "🔥", label: "Impacto", description: "Cada <strong>doação</strong> e cada ato de <strong>voluntariado</strong> têm um impacto profundo e duradouro em nossa comunidade. Com sua ajuda, podemos alcançar um número maior de pessoas que necessitam de apoio, oferecendo não apenas recursos materiais, mas também <strong>esperança</strong> e <strong>dignidade</strong>.</br></br>Quando você contribui com doações de alimentos, roupas ou apoio financeiro, está diretamente ajudando a alimentar famílias, vestir aqueles que estão desabrigados e proporcionar itens essenciais para uma vida mais digna. Essas ações simples, mas poderosas, ajudam a aliviar o sofrimento imediato e a criar um ambiente onde as pessoas podem começar a reconstruir suas vidas.", },
];

const [overview, impact] = allIMockOverviewAndImpactTabs;
export const initialTabs = [overview, impact];

export function getMockOverviewAndImpactTabs(
    ingredients: Ingredient[]
): Ingredient | undefined {
    const existing = new Set(ingredients);
    return allIMockOverviewAndImpactTabs.find((ingredient) => !existing.has(ingredient));
}
