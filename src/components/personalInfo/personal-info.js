import styled from 'styled-components';


const PersonalInfo = () => {
  return (
    <form>
      <h1>Informação pessoal</h1>
      <div>
        <label>Nome:</label>
        <input type="text" />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" />
      </div>
      <div>
        <label>Numero de telefone:</label>
        <input type="text" />
      </div>
    </form>
  );
};

export default PersonalInfo;
