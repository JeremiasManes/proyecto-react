import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import { NavLink, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getDocs, collection, orderBy, query } from 'firebase/firestore'
import { db } from '../../services/firebase/index'

const Navbar = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {

        const collectionRef = query(collection(db, 'categories'), orderBy('order'))

        getDocs(collectionRef).then(response => {
            const categoriesAdapted = response.docs.map(doc => {
                const data = doc.data()
                const id = doc.id

                return { id, ...data }
            })
            setCategories(categoriesAdapted)
        })
    }, [])

    return (
        <nav className='nav'>
            <Link to={'/'} className='marca'>ICHIRO</Link>
            <div className='divcategorias'>
                {
                    categories.map(cat => (
                        <NavLink key={cat.id} to={`/category/${cat.slug}`} className={({ isActive }) => (isActive ? 'categoriasActive' : 'categorias')}>{cat.label}</NavLink>
                    ))
                }
            </div>
            <CartWidget />
        </nav>
    )
}

export default Navbar