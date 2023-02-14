'use strict'
const pacientes = [
  { id: 1, nome: 'Maria', dataNascimento: '1984-11-01' },
  { id: 2, nome: 'Joao', dataNascimento: '1980-01-16' },
  { id: 3, nome: 'Jose', dataNascimento: '1998-06-06' }
]

export async function listarPacientes(event) {
  console.log(event)
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        pacientes
      },
      null,
      2
    )
  }
}

export async function obterPacientes(event) {
  console.log(event)

  const { id } = event.pathParameters

  const paciente = pacientes.find((paciente) => paciente.id == id)

  return {
    statusCode: 200,
    body: JSON.stringify(paciente, null, 2)
  }
}
