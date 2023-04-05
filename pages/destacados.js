import MainLayout from "@/layouts/main-layout";
import { deletePost, initPosts } from "@/redux/postSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Destacados() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(initPosts(JSON.parse(localStorage.getItem("posts")) || []));
    }, [])

    const { postsDestacados } = useSelector(state => state.posts);
    //console.log(postsDestacados)

    const borrarDestacados = (post) => {
        //console.log(post)
        if(confirm(`¿Quieres borrar el post ${post.id}?`))
            dispatch(deletePost(post))
    }

    if(!postsDestacados.length)
        return (
            <MainLayout>
                <h1>No hay posts destacados</h1>
            </MainLayout>
        )

    return (
        <MainLayout>
            <h1>Posts destacados</h1>
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
                        {/* <tr>
                            <th scope="row">1</th>
                            <td className="d-none d-sm-block">1</td>
                            <td>hola mundo</td>
                            <td className="d-none d-sm-block">no se me ocurre nada</td>
                            <td><button className="btn btn-danger">Eliminar de destacados</button></td>
                        </tr> */}
                        {postsDestacados.map(post => (
                            <tr key={post.id}>
                                <td scope="row">{post.id}</td>
                                <td className="d-none d-sm-block">{post.userId}</td>
                                <td>{post.title}</td>
                                <td className="d-none d-sm-block">{post.body}</td>
                                <td>
                                    <button onClick={() => borrarDestacados(post)} className="btn btn-danger">
                                        Eliminar de destacados
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