import documentos from '../data/documentos.json' with { type: 'json' }

export function GET(request) {
  const url = new URL(request.url)
  const id = url.searchParams.get('id')
const trabajadorId = url.searchParams.get('trabajadorId')
  const headers = {
    'Access-Control-Allow-Origin': '*'
  }

  if (id !== null) {
    const documento = documentos.find(d => d.id === Number(id))

    if (!documento) {
      return Response.json(
        { error: 'Documento no encontrado' },
        { status: 404, headers }
      )
    }

    return Response.json(documento, { status: 200, headers })
  }
    if (trabajadorId !== null) {
  const filtrados = documentos.filter(
    d => d.trabajadorId === Number(trabajadorId)
    )

    return Response.json(filtrados, { status: 200, headers })
    }
  return Response.json(documentos, { status: 200, headers })
}