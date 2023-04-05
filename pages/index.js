import Cookies from "js-cookie";
import { useForm } from '@/hooks/useForm'
import { useRouter } from 'next/router';

export default function Home() {

  const { usuario, password, handleInputChange, reset } = useForm(
    {
      usuario: '',
      password: ''
    }
  )

  const router = useRouter();

  const onSubmit = (e) => {
    e.preventDefault();
    if (usuario === 'admin' && password === 'admin') {
      Cookies.set("token", "Bearer");
      router.push("/main");
    }
  }

  return (
    <div className='p-5'>
      <h1>Ingresar al app</h1>
      <form onSubmit={e => onSubmit(e)}>
        <div className="mb-3">
          <label htmlFor="usuario" className="form-label">Usuario</label>
          <input type="text"
            name='usuario' value={usuario} onChange={handleInputChange}
            className="form-control" id="usuario"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password"
            name='password' value={password} onChange={handleInputChange}
            className="form-control" id="password"
          />
        </div>
        <button type="submit" className="btn btn-primary">Entrar</button>
      </form>
    </div>
  )
}
