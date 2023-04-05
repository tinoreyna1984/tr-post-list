import MainLayout from "@/layouts/main-layout";
import { addPost, initPosts } from "@/redux/postSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';

export default function Main() {

    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                setLoading(false)
            })
    }, [])

    //console.log(data)

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(initPosts(JSON.parse(localStorage.getItem("posts")) || []));
    }, [])

    //const { postsDestacados } = useSelector(state => state.posts);
    
    const agregarDestacado = (post) => {
        dispatch(addPost(post))
    }

    if (isLoading) return (
        <MainLayout>
            <h1>Cargando</h1>
        </MainLayout>
    );
    if (!data) return (
        <MainLayout>
            <h1>No hay datos</h1>
        </MainLayout>
    );

    return (
        <MainLayout>
            <h1>Todos los posts</h1>
            <div className="table-responsive">
                <table className="table table-borderless">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th className="d-none d-sm-block" scope="col">Usuario</th>
                            <th scope="col">Título</th>
                            <th className="d-none d-sm-block" scope="col">Contenido</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(post => (
                            <tr key={post.id}>
                                <td scope="row">{post.id}</td>
                                <td className="d-none d-sm-block">{post.userId}</td>
                                <td>{post.title}</td>
                                <td className="d-none d-sm-block">{post.body}</td>
                                <td>
                                    <button onClick={() => agregarDestacado(post)} className="btn btn-primary">
                                        Agregar a destacados
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </MainLayout>
    );
}