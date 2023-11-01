import React, { useState } from 'react';
import { Button, Spacer, Table, TableHeader, TableBody, TableColumn, TableRow, TableCell } from '@nextui-org/react';

export const Bookingsys = () => {
  const [fechaInicio, setFechaInicio] = useState('');
  const [fechaFin, setFechaFin] = useState('');
  const [cantidadPersonas, setCantidadPersonas] = useState('');
  const [habitacionElegida, setHabitacionElegida] = useState('');
  const [reservas, setReservas] = useState([]);
  const [mensajeError, setMensajeError] = useState('');

  const agregarReserva = () => {
    if (!fechaInicio || !fechaFin || !cantidadPersonas || !habitacionElegida) {
      setMensajeError('Por favor, complete todos los campos antes de registrar la reserva.');
      return;
    }

    // Verificar si la habitación está ocupada en el rango de fechas
    if (habitacionOcupada(habitacionElegida, fechaInicio, fechaFin)) {
      setMensajeError('La habitación está ocupada en ese rango de fechas. Por favor, elija otras fechas o habitación.');
      return;
    }

    const nuevaReserva = {
      id: reservas.length + 1,
      fechaInicio: fechaInicio,
      fechaFin: fechaFin,
      habitacion: habitacionElegida,
      cantidadPersonas: cantidadPersonas,
    };

    setReservas([...reservas, nuevaReserva]);
    setMensajeError('');
  };

  // Función para verificar si la habitación está ocupada en el rango de fechas
  const habitacionOcupada = (habitacion, fechaInicio, fechaFin) => {
    return reservas.some((reserva) => {
      return (
        reserva.habitacion === habitacion &&
        ((fechaInicio >= reserva.fechaInicio && fechaInicio <= reserva.fechaFin) ||
          (fechaFin >= reserva.fechaInicio && fechaFin <= reserva.fechaFin))
      );
    });
  };

  return (
    <div>
      <div>
        <label htmlFor="fecha-inicio" className="mr-2">
          Fecha de inicio:
        </label>
        <input type="date" id="fecha-inicio" name="fecha-inicio" value={fechaInicio} onChange={(e) => setFechaInicio(e.target.value)} required className="rounded-lg p-2" />
      </div>
      <Spacer y={2} />

      <div>
        <label htmlFor="fecha-fin" className="mr-2">
          Fecha de fin:
        </label>
        <input type="date" id="fecha-fin" name= "fecha-fin" value={fechaFin} onChange={(e) => setFechaFin(e.target.value)} required className="rounded-lg p-2" />
      </div>
      <Spacer y={2} />

      <div>
        <label htmlFor="cantidad-personas" className="mr-2">
          Cantidad de personas:
        </label>
        <input type="number" id="cantidad-personas" name="cantidad-personas" value={cantidadPersonas} onChange={(e) => setCantidadPersonas(e.target.value)} min="1" max="5" required className="rounded-lg p-2" />
      </div>
      <Spacer y={2} />
      <div>
        <label htmlFor="habitacion-elegida" className="mr-2">
          Número de Habitación:
        </label>
        <input type="number" id="habitacion-elegida" name="habitacion-elegida" value={habitacionElegida} onChange={(e) => setHabitacionElegida(e.target.value)} min="1" max="51" required className="rounded-lg p-2" />
      </div>
      <Button id="mostrar-boton" type="submit" color="primary" onClick={agregarReserva}>
        Reservar
      </Button>

      <div>
        {mensajeError && <div className="text-red-500">{mensajeError}</div>}
      </div>

      <h2 className='text-center font-bold'>Reservas</h2>
      <Table aria-label="Reservas table">
        <TableHeader>
          <TableColumn>ID</TableColumn>
          <TableColumn>Fecha de Inicio</TableColumn>
          <TableColumn>Fecha de Fin</TableColumn>
          <TableColumn>Habitación</TableColumn>
          <TableColumn>Cantidad de Personas</TableColumn>
        </TableHeader>
        <TableBody>
          {reservas.map((reserva) => (
            <TableRow key={reserva.id}>
              <TableCell>{reserva.id}</TableCell>
              <TableCell>{reserva.fechaInicio}</TableCell>
              <TableCell>{reserva.fechaFin}</TableCell>
              <TableCell>{reserva.habitacion}</TableCell>
              <TableCell>{reserva.cantidadPersonas}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
