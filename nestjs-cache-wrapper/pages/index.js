import {useEffect, useState} from "react";
import {Api} from '../api';

export default function Home({items: serverItems}) {
    const [clientItems, setClientItems] = useState([]);
    const [isClientItemsLoading, setIsClientItemsLoading] = useState(true);

    const getClientItems = async () => {
        setIsClientItemsLoading(true);
        setClientItems(await Api.catalog.getItemsWrapper());
        setIsClientItemsLoading(false);
    }

    useEffect(() => {
        getClientItems();
    }, []);

    return (
        <div>
            <h3>Items from client</h3>
            {isClientItemsLoading && (<div>Loading...</div>)}
            {!isClientItemsLoading && <ul>
                {clientItems.map(item => <li key={item.id}>{item.name}</li>)}
            </ul>}
            <h3>Items from server</h3>
            <ul>
                {serverItems.map(item => <li key={item.id}>{item.name}</li>)}
            </ul>
        </div>
    )
}

export async function getServerSideProps({query}) {
    const reset = Boolean(query.reset);
    const items = await Api.catalog.getItemsWrapper(reset)
    return {
        props: {
            items
        },
    }
}