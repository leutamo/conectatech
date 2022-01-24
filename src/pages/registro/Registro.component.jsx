
const Registro = ()=> {
  return(
    <div className="w-2/4">
      <form className='p-8'>
        <h2>Regístrate, y así podrás ser parte de nuestra comunidad.</h2>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Nombres</span>
          </label> 
          <input placeholder="Ingrese sus nombres" className="input input-bordered" type="text"></input>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Apellidos</span>
          </label> 
          <input placeholder="Ingrese sus apellidos" className="input input-bordered" type="text"></input>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Correo</span>
          </label> 
          <input placeholder="Ingrese su correo" className="input input-bordered" type="text"></input>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Contraseña</span>
          </label> 
          <input placeholder="Ingrese su contraseña" className="input input-bordered" type="password"></input>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Celular</span>
          </label> 
          <input placeholder="Ingrese su celular" className="input input-bordered" type="text"></input>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Tipo de Usuario</span>
          </label>
          <select className="select select-bordered w-full max-w-xs">
            <option disabled="disabled" selected="selected">Seleccione Tipo de Usuario</option> 
            <option>Usuario</option> 
            <option>Profesional</option>
          </select>
        </div>
        <div className="flex justify-center">
          <input type="submit" className="btn w-2/5 m-5" value="Cancelar"></input>
          <input type="submit" className="btn w-2/5 m-5" value="Registrar"></input>
        </div>
      </form>
    </div>
  );
}
export default Registro;