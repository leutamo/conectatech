
const UserHeader = ({name}) => {
  return(
    <header>
      <nav>
        <ul>
          <li className="bg-black text-white">icono</li>
          <li>Crear Petición</li>
          <li>Peticiones Resueltas</li>
          <li>Mis Peticiones</li>
          <li>{name}</li>
        </ul>
      </nav>
    </header>
  );
}
export default UserHeader;