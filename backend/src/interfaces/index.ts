export interface IDish {
    id?: number,
    title: string,
    category: 'Pratos Quentes' | 'Pratos Frios' | 'Bebidas',
    price: number,
    photo?: string,
    finishIn: number,
    active?: boolean,
}

interface IOrder {
    id?: number,
    dishId: number,
    status: 'Pedido Realizado' | 'Em preparo' | 'Finalizado',
}

export interface ICustomer {
    id?: number,
    name: string,
    cpf: string,
    table: number,
}

export interface IOrderDish {
    dish_id: number,
    quantity: number,
}
