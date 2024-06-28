export default async function handler(req, res) {
    setTimeout(() => {
        res.status(200).json([
            {
                id: 1,
                name: 'item1'
            },
            {
                id: 2,
                name: 'item2'
            }
        ])
    }, 5000);
}