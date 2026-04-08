// src/data/models.ts
// Adicione seus modelos aqui. O "slug" vira a URL: /modelo/[slug]

export interface ModelEntry {
  slug: string;       // URL: /modelo/cadeira → slug: "cadeira"
  name: string;       // Nome exibido na página
  file: string;       // Caminho do .glb em /public
  background?: string; // Cor de fundo (padrão #ffffff)
}

export const models: ModelEntry[] = [
  {
    slug: "gp-mini",
    name: "Gerador Portátil GP Mini",
    file: "/models/gp-mini.glb",
  }
];

export function getModel(slug: string): ModelEntry | undefined {
  return models.find((m) => m.slug === slug);
}
