
const RegistroProfesional = ()=> {
  return(
    <div className="w-2/4">
      <form className='p-8'>
        <h2>Regístrate, y así podrás ser parte de nuestra comunidad.</h2>
        <div className="form control">
          <label className="label">
            <span className="label-text">Registra tus Skills</span>
          </label>
          <div>
            <input placeholder="Ingrese tus Skills" className="input input-bordered" type="text"></input>
            <input type="button" className="btn w-2/5 mx-5" value="Agregar"></input>
          </div>
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Cuéntanos más sobre ti</span>
          </label> 
          <textarea class="textarea h-64 textarea-bordered" 
          placeholder="Puedes describirte como también contarnos sobre los proyectos en los que has trabajado"></textarea>
        </div> 
        <div className="flex justify-center">
          <input type="submit" className="btn w-2/5 m-5" value="Cancelar"></input>
          <input type="submit" className="btn w-2/5 m-5" value="Registrar"></input>
        </div>
      </form>
    </div>
    );
  }
export default RegistroProfesional;