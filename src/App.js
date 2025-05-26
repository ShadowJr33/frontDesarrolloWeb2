import React, { useState } from 'react';
import './App.css';

// -------------------------
// MODALES DE INSERCIÓN
// -------------------------

const InsertUsuarioModal = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    contraseña: '',
    saldo: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    onSubmit({
      ...formData,
      saldo: formData.saldo === '' ? null : parseFloat(formData.saldo)
    });
    onClose();
  };

  if (!isOpen) return null;
  return (
    <Modal title="Insertar Usuario" onClose={onClose} onSubmit={handleSubmit}>
      <input name="nombre" placeholder="Nombre" onChange={handleChange} />
      <input name="correo" placeholder="Correo" onChange={handleChange} />
      <input name="contraseña" placeholder="Contraseña" type="password" onChange={handleChange} />
      <input name="saldo" placeholder="Saldo" type="number" onChange={handleChange} />
    </Modal>
  );
};

const InsertRifaModal = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    numero_maximo_participantes: '',
    valor: '',
    fecha_inicio: '',
    fecha_fin: '',
    premio_principal: '',
    premios_secundarios: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    onSubmit({
      ...formData,
      numero_maximo_participantes: formData.numero_maximo_participantes === '' ? null : parseInt(formData.numero_maximo_participantes),
      valor: formData.valor === '' ? null : parseFloat(formData.valor)
    });
    onClose();
  };

  if (!isOpen) return null;
  return (
    <Modal title="Insertar Rifa" onClose={onClose} onSubmit={handleSubmit}>
      <input name="nombre" placeholder="Nombre" onChange={handleChange} />
      <input name="numero_maximo_participantes" placeholder="Participantes" type="number" onChange={handleChange} />
      <input name="valor" placeholder="Valor" type="number" onChange={handleChange} />
      <input name="fecha_inicio" placeholder="Fecha inicio (YYYY-MM-DD)" onChange={handleChange} />
      <input name="fecha_fin" placeholder="Fecha fin (YYYY-MM-DD)" onChange={handleChange} />
      <input name="premio_principal" placeholder="Premio principal" onChange={handleChange} />
      <input name="premios_secundarios" placeholder="Premios secundarios" onChange={handleChange} />
    </Modal>
  );
};

const InsertApuestaModal = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    deporte: '',
    campeonato: '',
    fecha_partido: '',
    marcador: '',
    valor_minimo_apuesta: '',
    valor_maximo_apuesta: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    onSubmit({
      ...formData,
      valor_minimo_apuesta: formData.valor_minimo_apuesta === '' ? null : parseFloat(formData.valor_minimo_apuesta),
      valor_maximo_apuesta: formData.valor_maximo_apuesta === '' ? null : parseFloat(formData.valor_maximo_apuesta)
    });
    onClose();
  };

  if (!isOpen) return null;
  return (
    <Modal title="Insertar Apuesta" onClose={onClose} onSubmit={handleSubmit}>
      <input name="deporte" placeholder="Deporte" onChange={handleChange} />
      <input name="campeonato" placeholder="Campeonato" onChange={handleChange} />
      <input name="fecha_partido" placeholder="Fecha partido (YYYY-MM-DDTHH:MM:SS)" onChange={handleChange} />
      <input name="marcador" placeholder="Marcador" onChange={handleChange} />
      <input name="valor_minimo_apuesta" placeholder="Valor mínimo" type="number" onChange={handleChange} />
      <input name="valor_maximo_apuesta" placeholder="Valor máximo" type="number" onChange={handleChange} />
    </Modal>
  );
};
const InsertBoletoModal = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    id_rifa: '',
    id_usuario: '',
    numero_asignado: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    onSubmit({
      id_rifa: parseInt(formData.id_rifa),
      id_usuario: parseInt(formData.id_usuario),
      numero_asignado: parseInt(formData.numero_asignado)
    });
    onClose();
  };

  if (!isOpen) return null;
  return (
    <Modal title="Insertar Boleto" onClose={onClose} onSubmit={handleSubmit}>
      <input name="id_rifa" placeholder="ID de Rifa" type="number" onChange={handleChange} />
      <input name="id_usuario" placeholder="ID de Usuario" type="number" onChange={handleChange} />
      <input name="numero_asignado" placeholder="Número asignado" type="number" onChange={handleChange} />
    </Modal>
  );
};
const InsertParticipacionApuestaModal = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    id_apuesta: '',
    id_usuario: '',
    valor_apostado: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    onSubmit({
      id_apuesta: parseInt(formData.id_apuesta),
      id_usuario: parseInt(formData.id_usuario),
      valor_apostado: parseFloat(formData.valor_apostado)
    });
    onClose();
  };

  if (!isOpen) return null;
  return (
    <Modal title="Insertar Participación Apuesta" onClose={onClose} onSubmit={handleSubmit}>
      <input name="id_apuesta" placeholder="ID de Apuesta" type="number" onChange={handleChange} />
      <input name="id_usuario" placeholder="ID de Usuario" type="number" onChange={handleChange} />
      <input name="valor_apostado" placeholder="Valor Apostado" type="number" onChange={handleChange} />
    </Modal>
  );
};
const InsertSorteoModal = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    id_rifa: '',
    numero_ganador: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    onSubmit({
      id_rifa: parseInt(formData.id_rifa),
      numero_ganador: parseInt(formData.numero_ganador)
    });
    onClose();
  };

  if (!isOpen) return null;
  return (
    <Modal title="Insertar Sorteo" onClose={onClose} onSubmit={handleSubmit}>
      <input name="id_rifa" placeholder="ID de Rifa" type="number" onChange={handleChange} />
      <input name="numero_ganador" placeholder="Número Ganador" type="number" onChange={handleChange} />
    </Modal>
  );
};
const InsertPagoPremioModal = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    id_usuario: '',
    id_rifa_apuesta: '',
    valor_ganado: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    onSubmit({
      id_usuario: parseInt(formData.id_usuario),
      id_rifa_apuesta: parseInt(formData.id_rifa_apuesta),
      valor_ganado: parseFloat(formData.valor_ganado)
    });
    onClose();
  };

  if (!isOpen) return null;
  return (
    <Modal title="Insertar Pago Premio" onClose={onClose} onSubmit={handleSubmit}>
      <input name="id_usuario" placeholder="ID de Usuario" type="number" onChange={handleChange} />
      <input name="id_rifa_apuesta" placeholder="ID de Rifa o Apuesta" type="number" onChange={handleChange} />
      <input name="valor_ganado" placeholder="Valor Ganado" type="number" onChange={handleChange} />
    </Modal>
  );
};
const InsertTransaccionModal = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    id_usuario: '',
    tipo: 'credito', // Valor por defecto
    monto: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    onSubmit({
      id_usuario: parseInt(formData.id_usuario),
      tipo: formData.tipo,
      monto: parseFloat(formData.monto)
    });
    onClose();
  };

  if (!isOpen) return null;
  return (
    <Modal title="Insertar Transacción" onClose={onClose} onSubmit={handleSubmit}>
      <input name="id_usuario" placeholder="ID de Usuario" type="number" onChange={handleChange} />
      <select name="tipo" onChange={handleChange}>
        <option value="credito">Credito</option>
        <option value="entrada">Entrada</option>
        <option value="salida">Salida</option>
      </select>
      <input name="monto" placeholder="Monto" type="number" onChange={handleChange} />
    </Modal>
  );
};


const UpdateModal = ({ isOpen, onClose, onSubmit, fields, initialData }) => {
  const [formData, setFormData] = useState(initialData || {});

  React.useEffect(() => {
    setFormData(initialData || {});
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (!isOpen) return null;
  return (
    <Modal title="Actualizar elemento" onClose={onClose} onSubmit={() => onSubmit(formData)}>
      {fields.map(f => (
        <input
          key={f}
          name={f}
          placeholder={f}
          value={formData[f] || ""}
          onChange={handleChange}
        />
      ))}
    </Modal>
  );
};
const DeleteByIdModal = ({ isOpen, onClose, onConfirm, index }) => {
  const [id, setId] = useState("");

  React.useEffect(() => {
    setId("");
  }, [isOpen]);

  if (!isOpen) return null;
  // Si es boleto (index === 3), cambia el placeholder
  const placeholder = index === 3 ? "Número asignado" : "ID";
  return (
    <Modal title="Eliminar elemento por ID" onClose={onClose} onSubmit={() => onConfirm(id)}>
      <input
        name="id"
        placeholder={placeholder}
        value={id}
        type="number"
        onChange={e => setId(e.target.value)}
      />
    </Modal>
  );
};

// Reusable modal base
const Modal = ({ title, onClose, onSubmit, children }) => (
  <div className="modal-backdrop">
    <div className="modal">
      <h3>{title}</h3>
      {children}
      <div className="modal-buttons">
        <button onClick={onSubmit}>Guardar</button>
        <button onClick={onClose}>Cancelar</button>
      </div>
    </div>
  </div>
);

// -------------------------
// COMPONENTE MINI TABLA
// -------------------------

const MiniTable = ({ title, onShow, onInsert, data, onDelete, onUpdate }) => (
  <div className="mini-table">
    <h3>{title}</h3>
    <div className="buttons">
      <button onClick={onInsert}>Insertar</button>
      <button onClick={onDelete}>Eliminar</button>
      <button onClick={onUpdate}>Actualizar</button>
      <button onClick={onShow}>{data ? "Ocultar" : "Mostrar"}</button>
    </div>
    {data && (
      <div className="result">
        {Array.isArray(data)
          ? data.map((item, i) => (
            <div key={i} className="data-block">
              {Object.entries(item).map(([key, value]) => (
                <div key={key}>
                  <strong>{key}:</strong> {value}
                </div>
              ))}
              <hr />
            </div>
          ))
          : <div>{JSON.stringify(data)}</div>}
      </div>
    )}
  </div>
);

// -------------------------
// COMPONENTE PRINCIPAL
// -------------------------

function App() {
  const tableTitles = [
    "Usuario", "Rifa", "Apuesta", "Boleto",
    "Participación Apuesta", "Sorteo", "Pago Premio", "Transacción"
  ];

  const apiUrls = [
    "http://127.0.0.1:5000/usuario/obtener",
    "http://127.0.0.1:5000/rifa/obtener",
    "http://127.0.0.1:5000/apuesta/obtener",
    "http://127.0.0.1:5000/boleto/obtener",
    "http://127.0.0.1:5000/participacion_apuesta/obtener",
    "http://127.0.0.1:5000/sorteo/obtener",
    "http://127.0.0.1:5000/pago_premio/obtener",
    "http://127.0.0.1:5000/transaccion/obtener"
  ];

  const tableFields = [
    { id: "id", fields: ["nombre", "correo", "contraseña", "saldo"] }, // Usuario
    { id: "id", fields: ["nombre", "numero_maximo_participantes", "valor", "fecha_inicio", "fecha_fin", "premio_principal", "premios_secundarios"] }, // Rifa
    { id: "id", fields: ["deporte", "campeonato", "fecha_partido", "marcador", "valor_minimo_apuesta", "valor_maximo_apuesta"] }, // Apuesta
    { id: "id", fields: ["id_rifa", "id_usuario", "numero_asignado"] }, // Boleto
    { id: "id", fields: ["id_apuesta", "id_usuario", "valor_apostado"] }, // Participación Apuesta
    { id: "id", fields: ["id_rifa", "numero_ganador"] }, // Sorteo
    { id: "id", fields: ["id_usuario", "id_rifa_apuesta", "valor_ganado"] }, // Pago Premio
    { id: "id", fields: ["id_usuario", "tipo", "monto"] } // Transacción
  ];

  const [allData, setAllData] = useState(Array(8).fill(null));
  const [modalStates, setModalStates] = useState({ usuario: false, rifa: false, apuesta: false, boleto: false, participacion_apuesta: false, sorteo: false, pago_premio: false, transaccion: false });
  const [deleteModal, setDeleteModal] = useState({ open: false, index: null });
  const [updateModal, setUpdateModal] = useState({ open: false, index: null, fields: [] });

  const handleMostrar = async (index) => {
    const updatedData = [...allData];
    if (updatedData[index]) {
      updatedData[index] = null;
      setAllData(updatedData);
      return;
    }

    try {
      const response = await fetch(apiUrls[index]);
      const data = await response.json();
      updatedData[index] = data;
      setAllData(updatedData);
    } catch (error) {
      updatedData[index] = { error: "No se pudo obtener la información." };
      setAllData(updatedData);
    }
  };

  const postData = async (url, payload, refreshIndex) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const result = await response.json();
      console.log("Insertado:", result);
      handleMostrar(refreshIndex); // Refrescar vista
    } catch (err) {
      console.error("Error al insertar:", err);
    }
  };

  const deleteData = async (url, payload, refreshIndex) => {
    try {
      const options = {
        method: "DELETE",
        headers: { "Content-Type": "application/json" }
      };
      if (payload) options.body = JSON.stringify(payload);
      const response = await fetch(url, options);
      const result = await response.json();
      console.log("Eliminado:", result);
      handleMostrar(refreshIndex); // Refrescar vista
    } catch (err) {
      console.error("Error al eliminar:", err);
    }
  };

  const updateData = async (url, payload, refreshIndex) => {
    try {
      const response = await fetch(url, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const result = await response.json();
      console.log("Actualizado:", result);
      handleMostrar(refreshIndex); // Refrescar vista
    } catch (err) {
      console.error("Error al actualizar:", err);
    }
  };

  return (
    <div className="App">
      <h1>Capi Apuestas</h1>
      <div className="tables-container">
        {tableTitles.map((title, index) => (
          <MiniTable
            key={index}
            title={title}
            data={allData[index]}
            onShow={() => handleMostrar(index)}
            onInsert={() => {
              if (index === 0) setModalStates({ ...modalStates, usuario: true });
              else if (index === 1) setModalStates({ ...modalStates, rifa: true });
              else if (index === 2) setModalStates({ ...modalStates, apuesta: true });
              else if (index === 3) setModalStates({ ...modalStates, boleto: true });
              else if (index === 4) setModalStates({ ...modalStates, participacionApuesta: true });
              else if (index === 5) setModalStates({ ...modalStates, sorteo: true });
              else if (index === 6) setModalStates({ ...modalStates, pagoPremio: true });
              else if (index === 7) setModalStates({ ...modalStates, transaccion: true });
            }}
            onDelete={() => setDeleteModal({ open: true, index })}
            onUpdate={() => {
              // Incluye el campo id al principio de los campos
              const fields = ["id", ...tableFields[index].fields];
              setUpdateModal({ open: true, index, fields });
            }}
          />
        ))}
      </div>

      <InsertUsuarioModal
        isOpen={modalStates.usuario}
        onClose={() => setModalStates({ ...modalStates, usuario: false })}
        onSubmit={(data) => postData("http://127.0.0.1:5000/usuario/crear", data, 0)}
      />
      <InsertRifaModal
        isOpen={modalStates.rifa}
        onClose={() => setModalStates({ ...modalStates, rifa: false })}
        onSubmit={(data) => postData("http://127.0.0.1:5000/rifa/crear", data, 1)}
      />
      <InsertApuestaModal
        isOpen={modalStates.apuesta}
        onClose={() => setModalStates({ ...modalStates, apuesta: false })}
        onSubmit={(data) => postData("http://127.0.0.1:5000/apuesta/crear", data, 2)}
      />
      <InsertBoletoModal
        isOpen={modalStates.boleto}
        onClose={() => setModalStates({ ...modalStates, boleto: false })}
        onSubmit={(data) => postData("http://127.0.0.1:5000/boleto/crear", data, 3)}
      />
      <InsertParticipacionApuestaModal
        isOpen={modalStates.participacionApuesta}
        onClose={() => setModalStates({ ...modalStates, participacionApuesta: false })}
        onSubmit={(data) => postData("http://127.0.0.1:5000/participacion_apuesta/crear", data, 4)}
      />
      <InsertSorteoModal
        isOpen={modalStates.sorteo}
        onClose={() => setModalStates({ ...modalStates, sorteo: false })}
        onSubmit={(data) => postData("http://127.0.0.1:5000/sorteo/crear", data, 5)}
      />
      <InsertPagoPremioModal
        isOpen={modalStates.pagoPremio}
        onClose={() => setModalStates({ ...modalStates, pagoPremio: false })}
        onSubmit={(data) => postData("http://127.0.0.1:5000/pago_premio/crear", data, 6)}
      />
      <InsertTransaccionModal
        isOpen={modalStates.transaccion}
        onClose={() => setModalStates({ ...modalStates, transaccion: false })}
        onSubmit={(data) => postData("http://127.0.0.1:5000/transaccion/crear", data, 7)}
      />

      <UpdateModal
        isOpen={updateModal.open}
        onClose={() => setUpdateModal({ open: false, index: null, fields: [] })}
        onSubmit={(data) => {
          updateData(
            apiUrls[updateModal.index].replace("/obtener", "/actualizar"),
            data,
            updateModal.index
          );
          setUpdateModal({ open: false, index: null, fields: [] });
        }}
        fields={updateModal.fields} // <-- SOLUCIÓN: usa los campos del estado
        initialData={updateModal.data}
      />

      <DeleteByIdModal
        isOpen={deleteModal.open}
        index={deleteModal.index}
        onClose={() => setDeleteModal({ open: false, index: null })}
        onConfirm={(id) => {
          if (id) {
            if (deleteModal.index === 7) {
              // Transacción: el id va en la URL
              deleteData(
                apiUrls[7].replace("/obtener", `/eliminar/${parseInt(id)}`),
                null, // No body
                7
              );
            } else {
              // Otras tablas: el id va en el body
              const payload = { id: parseInt(id) };
              deleteData(
                apiUrls[deleteModal.index].replace("/obtener", "/eliminar"),
                payload,
                deleteModal.index
              );
            }
          }
          setDeleteModal({ open: false, index: null });
        }}
      />
    </div>
  );
}

export default App;
