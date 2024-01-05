import Search from '../../components/Search';
import { Outlet } from 'react-router-dom';

const DefaultPage = () => {
    return (
        <main>
            <Search />

            <Outlet />
        </main>
    )
}

export default DefaultPage;