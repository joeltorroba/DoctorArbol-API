import proyectos from '../data/proyectos.json' with { type: 'json' }

export function GET(request) {
  const url = new URL(request.url)
  const trabajadorId = url.searchParams.get('trabajadorId')

  const headers = {
    'Access-Control-Allow-Origin': '*'
  }

  if (trabajadorId !== null) {
    const filtrados = proyectos.filter(
      p => p.trabajadores.includes(Number(trabajadorId))
    )

    return Response.json(filtrados, { status: 200, headers })
  }

  return Response.json(proyectos, { status: 200, headers })
}