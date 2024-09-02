import {Api} from '../api';

export default function Home({items}) {
    return (
        <div>
            <h3>Products</h3>
            <ul>
                {items && items.map(item => <li key={item.id}>{item.name}</li>)}
            </ul>
        </div>
    )
}

export async function getServerSideProps({}) {
    const items = await Api.catalog.getItems();
    return {
        props: {
            items,
        },
    };
}