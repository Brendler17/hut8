export async function getProjects() {
  const response = await fetch('api/projects');

  if (!response.ok) {
    throw new Error('Erro ao carregar projetos');
  }

  return response.json();
}

export async function getTeam() {
  const response = await fetch('api/team');

  if (!response.ok) {
    throw new Error('Erro ao carregar equipe');
  }

  return response.json();
}