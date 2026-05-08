export async function getProjects() {
  const response = await fetch('api/projects');

  if (!response.ok) {
    throw new Error('Erro ao carregar projetos');
  }

  return response.json();
}
