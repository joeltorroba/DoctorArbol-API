import trabajadores from '../data/trabajadores.json' with { type: 'json' }

export function GET(request) {
  const url = new URL(request.url)
  const id = url.searchParams.get('id')

  const headers = {
    'Access-Control-Allow-Origin': '*'
  }

  if (id !== null) {
    const trabajador = trabajadores.find(t => t.id === Number(id))

    if (!trabajador) {
      return Response.json(
        { error: 'Trabajador no encontrado' },
        { status: 404, headers }
      )
    }

    return Response.json(trabajador, { status: 200, headers })
  }

  return Response.json(trabajadores, { status: 200, headers })
}